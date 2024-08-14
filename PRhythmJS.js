// PRhythmJS Main Script
// This is a bit of a mess, as this is a development reboot
const tickrate = 30;
const timestep = 1000 / tickrate;

var gTick = 0;
var ticking = false;
var tickTs = 0;
var lastTickTs = 0;
var updateId = 0;

var style = `p4d`

// Grab the canvas and it's 2D context
const c = document.getElementById("gamecanvas");
const ctx = c.getContext("2d");
var cWidth = ctx.canvas.width;
var cHeight = ctx.canvas.height;

var ratio = gcd(cWidth, cHeight);
var aspectW = cWidth / ratio;
var aspectH = cHeight / ratio;
var noteSize = cHeight * 0.05;
var smallNoteSize = cHeight * 0.02;
// Last known document width and height for canvas resizing (if needed)
var docWidth = window.innerWidth;
var docHeight = window.innerHeight;

// Note positions relative to canvas dimensions
const noteMultSX = [0.4581976, 0.5418024, 0.45, 0.55, 0.4581976, 0.5418024];
const noteMultSY = [0.4512305, 0.4512305, 0.5, 0.5, 0.5487695, 0.5487695];
const noteMultEX = [0.1065104, 0.89375, 0.0625, 0.9377604, 0.1065104, 0.89375];
const noteMultEY = [0.1625, 0.1625, 0.5, 0.5, 0.837963, 0.837963];
// Since visual targets are different from the end of the note tracks
const noteMultTargetX = [0.2, 0.8, 0.14, 0.86, 0.2, 0.8];
const noteMultTargetY = [0.15, 0.15, 0.5, 0.5, 0.85, 0.85];
const noteTargetBorderMult = 0.0065104167; // 25px at 4K (width based, use floor)
const noteTargetRadiusMult = 0.0377604167; // 145px @ 4K (width based, use floor)


var borderL = new Image();
borderL.src = `./img/${style}/dance/borderL.png`;
var borderR = new Image();
borderR.src = `./img/${style}/dance/borderR.png`;
var imageaspectH = cHeight / borderL.height;
var imageaspectW = cWidth / borderL.width;
var tmpratio = Math.min(imageaspectH, imageaspectW);


// some crap
var lastFpsTs = 0;
var avgFps = 60; // estimate of framerate (gets updated)
var alpha = 0.2; // how much more recent frame time data gets weighed in fps calculation (lower = faster change)
var framesThisSecond = 0;
var tps = 0;
var avgTps = tickrate;
var ticksThisSecond = 0;
var diff = 0;
var gTs = 0;
var initialTickEst = false;
var uptSet = false;
var currentUpdate = 0;
var updatesPerTick = 0;
var uiTick = 0;
// list of typical refresh rates
const refreshRates = [24, 30, 60, 120, 144, 240, 360, 1000];
var drawables = [];

// events

// Different types of curves (keeping it basic for now)
const CurveTypes = Object.freeze({
	LINEAR: 1,
	CURVE: 2
});

// Path class
// Every object that needs to move should have it's own unique path object attached to it
// x and y are going to be multipliers so we don't have to worry about canvas size changes
class Path {
    x = 0;
    y = 0;
    running = false;
    points = 2;
    currentPoint = 0;

    constructor(startPoint, interPoints, endPoint) {
        if (interPoints == null) {
            this.interPoints == null;
        } else {
            this.interPoints = interPoints;
            this.points += interPoints.length;
        }

        this.startPoint = startPoint;
        this.x = startPoint.x;
        this.y = startPoint.y;
        this.endPoint = endPoint;
    }

    reset() {
        this.startPoint.finished = false;
        this.endPoint.finished = false;

        if (this.interPoints != null) {
            for (let i = 0; i < this.interPoints.length; i++) {
                this.interPoints[i].finished = false;
            }
        }
    }

    // send thing on path
    // paths are stopped by default
    resume() {
        if (!this.running) {
            console.log(`path has been requested to be resumed`);
            this.running = true;
        } else {
            console.error(`path that is resumed has been requested to be resumed!`);
        }
    }

    // stop updating the path
    stop() {
        if (this.running) {
            console.log(`path has been requested to be stopped`);
            this.running = false;
        } else {
            console.error(`path that is stopped has been requested to stop!`);
        }
    }

    // update the position of the object on the path
    update() {
        if (this.interPoints == null) {
            switch (this.currentPoint) {
                case 1:
                    this.startPoint.update();
                    break;
                case 2:
                    this.endPoint.update();
                    break;
                default:
                    break;
            }
        } else {
            switch (this.currentPoint) {
                case 1:
                    // startPoint update
                    this.startPoint.update();
                    break;
                case (1 + this.interPoints.length):
                    // endPoint update
                    this.endPoint.update();
                    break;
                default:
                    // interPoints update
                    this.interPoints[currentPoint - 2].update();
                    break;
            }
        }
        
    }
}

// Point class
class PathPoint {
    finished = false;
    constructor(x, y, curveType, curveTime) {
        this.x = x;
        this.y = y;
        this.curveType = curveType;
        this.curveTime = curveTime;
    }

    update() {

    }
}

class TestDrawable {
    x = 0;
    y = 0;
    constructor(path) {
        this.path = path;
        this.x = this.path.x;
        this.y = this.path.y;
    }

    draw() {
        if (this.path.running) {
            this.path.update();
            drawCircle(this.x * cWidth, this.y * cHeight, cWidth * 0.04, `rgb(100, 100, 100)`, cWidth * 0.01, ctx);
        }
    }
}

// This seems messy, but using timers isn't cutting it
// Because we are updating a the refresh rate of the display,
// we can use the fps value to determine how many updates
// need to occur before running a tick.
// This way we don't need to use imprecise timers.
// 
// DOWNSIDE: Display refresh can change after execution starts
// and fps calculation could be inaccurate.
// POTENTIAL SOLUTION: Periodically recalculate the fps and
// updatesPerTick value.
// calcFPS function from https://stackoverflow.com/a/45580752
function calcFPS(opts){
    var requestFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame;
    if (!requestFrame) return true; // Check if "true" is returned; 
                                    // pick default FPS, show error, etc...
    function checker(){
        if (index--) requestFrame(checker);
        else {
            // var result = 3*Math.round(count*1000/3/(performance.now()-start));
            var result = count*1000/(performance.now()- start);
            if (typeof opts.callback === "function") opts.callback(result);
        }
    }
    if (!opts) opts = {};
    var count = opts.count||60, index = count, start = performance.now();
    checker();
}

// Heuristically determine the amount of updates required for a tick to occur
// This is based on the current refresh rate
function determineTick(result) {
    var fixedResult = Math.ceil(result);
    var lowestDelta = 99999999; // bogus
    var lowestIndex = 0;

    // new precision error algorithm
    if (!refreshRates.includes(Math.ceil(result))) {
        console.info(`DISPLAY: refresh rate ${Math.ceil(result)}hz is atypical. Finding nearest typical refresh rate.`);
        for (let i = 0; i < refreshRates.length; i++) {
            let delta = Math.abs(refreshRates[i] - Math.ceil(result));

            if (delta < lowestDelta) {
                lowestDelta = delta;
                lowestIndex = i;
            }
        }

        console.info(`DISPLAY: refresh rate ${Math.ceil(result)}hz was found to be closest to ${refreshRates[lowestIndex]}hz.`);
        fixedResult = refreshRates[lowestIndex];
    }

    let idealTimestep = 1000 / tickrate;
    let currentTimestep = 1000 / fixedResult;
    updatesPerTick = Math.ceil(idealTimestep / currentTimestep);
    uptSet = true;
    console.info(`DISPLAY: Estimated screen refresh rate: ${fixedResult}, resulting updatesPerTick: ${updatesPerTick}`);
}

function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Resize canvas to x * y pixels with a ax:ay aspect ratio
function resizeCanvas(canvas, x, y, ax, ay) {
    if ((x / y) > (ax / ay)) {
        canvas.width = Math.floor(y * (ax / ay));
        canvas.height = y;
    } else {
        canvas.width = x;
        canvas.height = Math.floor(x / (ax / ay));
    }

    cWidth = ctx.canvas.width;
    cHeight = ctx.canvas.height;
    ratio = gcd(cWidth, cHeight);
    aspectW = cWidth / ratio;
    aspectH = cHeight / ratio;
    noteSize = cHeight * 0.05;
    smallNoteSize = cHeight * 0.02;

    // DELETE
    imageaspectH = cHeight / borderL.height;
    imageaspectW = cWidth / borderL.width;
    tmpratio = Math.min(imageaspectH, imageaspectW);
}

function drawLine(startX, startY, endX, endY, style, width, context) {
    context.strokeStyle = style;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

function drawText(x, y, font, style, align, baseline, context, text) {
    context.font = font;
    context.fillStyle = style;
    context.textAlign = align;
    context.textBaseline = baseline;
    context.fillText(text, x, y);
}

function drawCircle(x, y, radius, style, width, context) {
    context.strokeStyle = style;
    context.lineWidth = width;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke();
}

function fillCircle(x, y, radius, style, width, context) {
    context.strokeStyle = style;
    context.lineWidth = width;
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
}

function drawThing() {
    // clear the canvas
    ctx.clearRect(0, 0, cWidth, cHeight);

//    // draw note pos
//    for (let i = 0; i < noteMultSX.length; i++) {
//        drawCircle(
//            cWidth * noteMultEX[i],
//            cHeight * noteMultEY[i],
//            Math.floor(cWidth * noteTargetRadiusMult),
//            `hsl(60, 100%, 30%)`,
//            Math.floor(cWidth * noteTargetBorderMult),
//            ctx);
//    }

    // context.drawImage(imgSrc, imgSX, imgSY, imgEX, imgEY, ctxSX, ctxSY, ctxEX, ctxEY)
    ctx.drawImage(borderL, 0, 0, borderL.width, borderL.height, 0, 0, borderL.width * tmpratio, borderL.height * tmpratio);
    ctx.drawImage(borderR, 0, 0, borderR.width, borderR.height, cWidth - borderL.width * tmpratio, 0, borderR.width * tmpratio, borderR.height * tmpratio);
}

function drawDebugUI() {
    if (ticking) {
        drawText(cHeight * 0.02, cHeight * 0.02, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `Game Tick: ${gTick}, UI ts: ${gTs}`);
        drawText(cHeight * 0.02, cHeight * 0.02 * 5, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `TPS: ${tps.toFixed(2)} (${(tps / tickrate).toFixed(2) * 100}%)`);
    } else {
        drawText(cHeight * 0.02, cHeight * 0.02, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `Game Tick: ${gTick} (Paused), UI ts: ${gTs}`);
        drawText(cHeight * 0.02, cHeight * 0.02 * 5, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `TPS: ${tps.toFixed(2)} (Paused)`);
    } 
    
    drawText(cHeight * 0.02, cHeight * 0.02 * 3, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `FPS: ${avgFps.toFixed(2)}`);
    drawText(cHeight * 0.02, cHeight * 0.02 * 7, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `tick diff: ${diff}`);
    drawText(cHeight * 0.02, cHeight * 0.02 * 9, `${cHeight * 0.03}px Arial`, `rgba(200, 200, 200, 1)`, `left`, `top`, ctx, `delta: ${(1000 / (tickrate * updatesPerTick))}ms`);
}

function drawScene() {
    // (kinda) hardcoded delta >:(
    // web bad
    drawCircle(cWidth / 2 - cHeight * 0.2, cHeight / 2, Math.abs(cWidth * 0.05 * Math.sin(gTick / (1000 / (tickrate * updatesPerTick)) * updatesPerTick)), `rgba(0, 255, 255, 1)`, cWidth * 0.002, ctx);
    drawCircle(cWidth / 2 + cHeight * 0.2, cHeight / 2, Math.abs(cWidth * 0.05 * Math.sin(uiTick / (1000 / (tickrate * updatesPerTick)))), `rgba(255, 255, 255, 1)`, cWidth * 0.002, ctx);

    // draw the drawables
    for (let i = 0; i < drawables.length; i++) {
        drawables[i].draw();
    }
}

function startGame() {
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
    ticking = true;
}

function stopGame() {
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled = true;
    ticking = false;
    console.info(`game stopped!`);
}

function tick() {
    gTick++;
    ticksThisSecond++;
}

function update(ts) {
    // update global timestamp
    gTs = ts;
    if (!initialTickEst) {
        initialTickEst = true;
        calcFPS({callback: determineTick});
    }
    currentUpdate++;
    uiTick++;
    
    // Canvas resizing on document size change
    if((window.innerWidth != docWidth) || (window.innerHeight != docHeight)) {
        // resize canvas
        docWidth =  window.innerWidth;
        docHeight = window.innerHeight;
        resizeCanvas(c, docWidth * 0.9, docHeight * 0.9, 16, 9);
    }

    // Pause the game on page losing focus
    if ((document.hasFocus() == false) && ticking) {
        console.info(`Pausing the game because the document lost focus!`);
        stopGame();
    }

    // tps & fps calculation
    framesThisSecond++;
    if ((ts - lastFpsTs) >= 1000) {
        avgFps = alpha * avgFps + (1.0 - alpha) * framesThisSecond;
        //avgTps = alpha * avgTps + (1.0 - alpha) * ticksThisSecond;
        tps = ticksThisSecond;
        framesThisSecond = 0;
        ticksThisSecond = 0;
        lastFpsTs = ts;
    }

    if (ticking) {
        let tmpdiff = ts - tickTs;
        //if (tmpdiff >= timestep) {
        //    diff = tmpdiff;
        //    tickTs = ts;
        //    tick();
        //}
        if (uptSet) {
            if (currentUpdate >= updatesPerTick) {
                diff = tmpdiff;
                tickTs = ts;
                currentUpdate = 0;
                tick();
            }
        }
    } else {
        // Ensure that the current tick lasts the same amount of time as others despite being paused
        tickTs += (ts - tickTs);
    }

    // scene rendering here
    drawThing();
    drawScene();
    drawDebugUI();

    updateId = requestAnimationFrame(update);
}

function testButton() {
    if (drawables[0].path.running) {
        drawables[0].path.stop();
    } else {
        drawables[0].path.resume();
    }
}

// https://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing
// https://developer.mozilla.org/en-US/docs/Games/Anatomy
;(()  => {
    function main() {
        // Size the canvas on script load
        resizeCanvas(c, docWidth * 0.9, docHeight * 0.9, 16, 9);

        document.getElementById("stopbutton").disabled = true;

        updateId = requestAnimationFrame(update);
    }

    // test
    drawables.push(new TestDrawable(new Path(new PathPoint(.3, .3, CurveTypes.LINEAR, 1000), new PathPoint(.5, .5, CurveTypes.LINEAR, 0))));

    main();
})();