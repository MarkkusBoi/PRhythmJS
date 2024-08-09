// js rhythm
// This is an old version of the project serving as a proof of concept
// It does not present well, and a lot is not actually implmeneted
// It serves as a demonstration of the concept
// THIS VERSION WILL NOT BE UPDATED AND IS ONLY HERE FOR HISTORICAL PURPOSES
// That being said, code from this version is fair game to be reused in the new version

// test (gulp)
const test = `[00:00.000]{specialist}{Arranger: Atsushi Kitajoh}{2:18}{120}{P4D}{[1:31.859]}
[00:09.843]1,2;
[00:10.777]1,2;
[00:11.712]1,4;
[00:12.646]1,6;
[00:13.580]1,5;
[00:14.515]1,5;
[00:14.982]1,3;
[00:15.449]1,3;
[00:15.916]1,1;
[00:16.850]1,2;
[00:17.317]1,4;
[00:19.186]1,4;
[00:20.153]1,6;
[00:21.088]1,5;
[00:21.522]5,0;
[00:22.022]1,5;
[00:22.956]1,3;
[00:23.423]1,1;
[00:24.358]1,2;
[00:24.825]1,1;1,2;
[00:25.292]1,2;
[00:26.693]1,3;1,4;
[00:27.628]1,5;1,6;
[00:28.095]1,5;
[00:28.562]1,5;
[00:29.062]1,5;
[00:29.496]5,0;
[00:29.763]1,3;
[00:30.230]1,1;
[00:31.865]1,1;1,2;
[00:32.332]1,2;
[00:32.799]1,4;
[00:33.734]1,4;
[00:34.668]1,6;
[00:35.602]1,5;
[00:36.537]1,3;
[00:37.471]1,3;
[00:38.405]1,1;
[00:39.373]1,1;1,2;
[00:39.840]1,2;
[00:40.307]1,2;
[00:41.241]1,4;
[00:41.708]1,6;
[00:43.110]1,5;1,6;
[00:44.044]5,0;
[00:44.978]1,5;
[00:45.445]1,3;
[00:45.913]1,1;
[00:47.314]3,2;
[00:48.248]4,2;
[00:49.216]1,4;
[00:49.683]1,6;
[00:49.917]1,6;
[00:50.617]1,5;
[00:50.851]1,5;
[00:51.084]1,5;
[00:51.552]1,5;
[00:52.486]1,4;
[00:52.953]1,1;
[00:53.420]5,0;
[00:54.354]1,2;
[00:54.821]1,2;
[00:55.055]1,2;
[00:55.289]1,2;
[00:56.223]1,4;
[00:56.456]1,4;
[00:56.690]1,4;
[00:57.157]1,6;
[00:57.624]5,0;
[00:58.125]1,5;
[00:59.059]1,3;
[00:59.760]3,1;
[01:00.894]4,1;
[01:01.862]1,1;1,2;
[01:02.329]1,1;1,2;
[01:04.198]1,3;1,4;
[01:05.132]1,5;1,6;
[01:05.599]1,5;
[01:06.066]1,5;
[01:06.533]1,5;
[01:07.000]5,0;
[01:07.968]1,3;
[01:08.435]1,1;1,2;
[01:09.369]1,1;1,2;
[01:09.837]1,1;1,2;
[01:10.304]1,2;
[01:10.737]6,0;
[01:11.238]1,4;
[01:12.639]1,5;1,6;
[01:13.106]1,5;
[01:13.574]1,5;
[01:14.041]1,5;
[01:14.508]5,0;
[01:14.741]1,3;
[01:15.209]1,1;
[01:16.844]1,1;1,2;
[01:17.344]1,1;1,2;
[01:17.811]1,2;
[01:18.245]6,0;
[01:18.745]1,4;
[01:13.213]1,3;1,4;
[01:20.147]1,5;1,6;
[01:20.614]1,5;
[01:21.081]1,5;
[01:21.548]1,5;
[01:21.982]6,0;
[01:22.249]1,3;
[01:22.950]1,1;1,2;
[01:23.417]1,1;1,2;
[01:24.351]1,1;1,2;
[01:24.818]1,1;1,2;
[01:25.285]1,2;
[01:25.752]6,0;
[01:26.220]1,4;
[01:26.687]1,3;1,4;
[01:27.654]1,5;1,6;
[01:28.121]1,5;
[01:28.589]1,3;
[01:29.489]6,0;
[01:29.756]1,1;1,2;
[01:30.224]1,1;1,2;
[01:31.859]1,2;
[01:32.326]1,2;
[01:32.793]1,2;
[01:33.260]5,0;
[01:33.727]1,4;
[01:34.194]1,4;
[01:34.661]1,6;
[01:35.596]1,5;
[01:36.063]1,5;
[01:36.530]1,5;
[01:37.497]1,3;
[01:37.965]1,1;
[01:38.398]5,0;
[01:39.366]1,2;
[01:40.300]1,4;
[01:40.534]1,4;
[01:40.767]1,4;
[01:41.235]1,4;
[01:42.169]1,6;
[01:42.402]1,6;
[01:42.636]1,6;
[01:43.103]1,5;
[01:43.337]1,5;
[01:43.570]1,5;
[01:44.037]1,3;
[01:44.738]1,1;
[01:45.439]5,0;
[01:45.906]5,0;
[01:46.874]1,2;
[01:47.107]1,2;
[01:47.808]1,4;
[01:48.742]1,6;
[01:48.976]1,6;
[01:49.676]1,6;
[01:50.611]1,5;
[01:50.844]1,5;
[01:51.545]1,3;
[01:52.479]1,1;
[01:52.713]1,1;
[01:53.413]5,0;
[01:54.348]1,2;
[01:54.581]1,2;
[01:54.815]1,2;
[01:55.282]1,4;
[01:55.516]1,4;
[01:56.250]1,6;
[01:56.483]1,6;
[01:56.717]1,6;
[01:57.184]1,6;
[01:57.417]1,6;
[01:58.118]1,5;
[01:58.352]1,5;
[01:59.052]1,3;
[01:59.286]1,3;
[01:59.753]1,1;
[02:00.420]5,0;
[02:00.888]5,0;
[02:01.855]1,1;1,2;
[02:03.724]1,4;
[02:04.191]1,4;
[02:04.658]1,6;
[02:05.592]1,5;
[02:06.093]1,5;
[02:07.494]1,3;
[02:07.961]1,3;
[02:08.428]1,1;
[02:09.363]1,2;
[02:09.830]1,4;
[02:11.231]3,6;
[02:11.665]4,6;
[02:13.100]1,5;
[02:14.034]1,3;
[02:14.735]3,1;
[02:15.903]4,1;`;

const testAudio = new Audio("../chart/001_specialist.wav");

// Vars
// Update interval (ms)
const updateInterval = 3;
// Fixed update timestamps
var prevTimestamp = 0;
var timestamp = 0;
// Update timestamps
var uPrevTimestamp = 0;
var uTimestamp = 0;
var startTime = 0;
var isUpdating = false;

// ms lookahead and rating timing (these will end up scaling with bpm)
const noteLookAhead = 1100; // noteLookAhead will scale with note speed option TODO TODO
const ratingGood = 300;
const ratingGreat = 200;
const ratingPerfect = 60;
const ratingMiss = 170;

// Input stuff
var gamepadConnected = false;
var gamepad;
// Right Trigger, Dpad Up, Triangle (Y), Dpad Left, Circle (B), Dpad Down, Cross (A)
// These array should provide a good way of remapping controls
const controllerLaneMapping = [7, 12, 3, 14, 1, 13, 0];
const keyboardLaneMapping = [`Space`, `KeyE`, `KeyI`, `KeyW`, `KeyO`, `KeyQ`, `KeyP`];
var keyDown = new Array();
var keyTimes = new Array();
// Some keys need to be ignored
var ignoreKeys = [`AltLeft`, `AltRight`, `Tab`, `Escape`, `MetaLeft`, `MetaRight`, `CapsLock`, `ShiftLeft`, `ShiftRight`, `ControlLeft`, `ControlRight`, `VolumeMute`, `VolumeUp`, `VolumeDown`, `MediaPlayPause`, `MediaStop`, `MediaTrackNext`, `MediaTrackPrevious`, `F1`, `F3`, `F5`, `F7`, `F10`, `F12`];
// Lane locking for correct note activiations
var laneLocks = [false, false, false, false, false, false, false];

// Last known document width and height for canvas resizing (if needed)
var docWidth = window.innerWidth;
var docHeight = window.innerHeight;

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
const textDisplayTime = 600;

// Display list for notes
var display = new Array();
const noteMultSX = [0.4581976, 0.5418024, 0.45, 0.55, 0.4581976, 0.5418024];
const noteMultSY = [0.4512305, 0.4512305, 0.5, 0.5, 0.5487695, 0.5487695];
const noteMultEX = [0.1354506, 0.8645494, 0.0625, 0.9375, 0.1354506, 0.8645494];
const noteMultEY = [0.074692375, 0.074692375, 0.5, 0.5, 0.925307625, 0.925307625];
// Since visual targets are different from the end of the note tracks
const noteMultTargetX = [0.2, 0.8, 0.14, 0.86, 0.2, 0.8];
const noteMultTargetY = [0.15, 0.15, 0.5, 0.5, 0.85, 0.85];

// I realized that I'm not even using this
/*
const NoteTags = Object.freeze({
	NORMAL: 1,
	DOUBLE: 2,
	HOLDS: 3,
	HOLDE: 4,
    SCRATCH: 5,
    FSCRATCH: 6
});
*/

// Class to contain a lane and its properties
class RhythmLane {
    pressed = false;
    ts = 0;

    constructor(notes) {
        this.notes = notes; // Notes array
    }
}

// Interprets and stores the song chart for game use
class RhythmChart {
    // global time skew
    skew = 0;
    lanes = new Array();
    title = ``;
    artist = ``;
    duration = ``;
    bpm = 0;
    
    constructor(input) {
        this.input = input;

        // Create 7 lanes (instead of explicitly)
        for (let i = 0; i < 7; i++) {
            this.lanes.push(new RhythmLane(new Array()));
        }

        // Process input rhythm chart
        // This processing happens before game start, so it doesn't have to be too terribly efficient
        const wholeRegex = /\r?\n/;
        const lineRegex = /^\[(\d{2}:\d{2}\.\d{3})\](.+)$/;
        const headerRegex = /\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}/;

        let lines = input.split(wholeRegex);
        for (let i = 0; i < lines.length; i++) {
            if (i == 0) {
                const lineOut = lines[i].match(lineRegex);
                const header = lineOut[2].match(headerRegex);

                this.title = header[1];
                this.artist = header[2];
                this.duration = header[3];
                this.bpm = parseInt(header[4]);
                setElement(document, `header`, `${this.title}, ${this.artist}, ${this.duration}, ${this.bpm}`);
            } else {
                const lineOut = lines[i].match(lineRegex);

                // Process the notes (possibly multiple on a line!)
                const tagOut = lineOut[2].split(`;`).filter(item => item !== ``);

                for (let j = 0; j < tagOut.length; j++) {
                    const command = tagOut[j].split(`,`);
                    const pos = parseInt(command[1]);
                    const time = convTimeStamp(lineOut[1]);
                    var note = 0;

                    // Convert the int to NoteTag
                    const parseTag = parseInt(command[0]);
                    convTimeStamp(lineOut[1]);

                    // Switch alternative suggested by ChatGPT
                    // NEED TO IMPLEMENT ACTUAL NOTES
                    const tagMap = {
                        1: () => { note = new Note(cWidth * noteMultSX[pos - 1], cHeight * noteMultSY[pos - 1], cWidth * noteMultEX[pos - 1], cHeight * noteMultEY[pos - 1], smallNoteSize, noteSize, time - noteLookAhead, time, time + ratingMiss)}, // normal
                        2: () => { note = new Note(cWidth * noteMultSX[pos - 1], cHeight * noteMultSY[pos - 1], cWidth * noteMultEX[pos - 1], cHeight * noteMultEY[pos - 1], smallNoteSize, noteSize, time - noteLookAhead, time, time + ratingMiss) }, // double
                        3: () => { note = new Note(cWidth * noteMultSX[pos - 1], cHeight * noteMultSY[pos - 1], cWidth * noteMultEX[pos - 1], cHeight * noteMultEY[pos - 1], smallNoteSize, noteSize, time - noteLookAhead, time, time + ratingMiss) }, // hold start
                        4: () => { note = new Note(cWidth * noteMultSX[pos - 1], cHeight * noteMultSY[pos - 1], cWidth * noteMultEX[pos - 1], cHeight * noteMultEY[pos - 1], smallNoteSize, noteSize, time - noteLookAhead, time, time + ratingMiss) }, // hold end
                        5: () => { note = new Scratch(cWidth * .05, cWidth * .4375, time - noteLookAhead, time, time + ratingMiss) }, // scratch
                        6: () => { note = new Scratch(cWidth * .05, cWidth * .4375, time - noteLookAhead, time, time + ratingMiss) } // fever scratch
                    }

                    // Create note object
                    tagMap[parseTag]();

                    const posMap = {
                        0: () => { note.lane = pos; this.lanes[0].notes.push(note); },
                        1: () => { note.lane = pos; this.lanes[1].notes.push(note); },
                        2: () => { note.lane = pos; this.lanes[2].notes.push(note); },
                        3: () => { note.lane = pos; this.lanes[3].notes.push(note); },
                        4: () => { note.lane = pos; this.lanes[4].notes.push(note); },
                        5: () => { note.lane = pos; this.lanes[5].notes.push(note); },
                        6: () => { note.lane = pos; this.lanes[6].notes.push(note); },
                    }

                    // Push note to lane
                    posMap[pos]();
                }
            }
        }

        // Reverse the arrays so we pop them instead of splicing
        for (let i = 0; i < this.lanes.length; i++) {
            this.lanes[i].notes.reverse();
        }
    }

    // This is needed for timing notes to actual time
    updateSkew(skew) {
        this.skew = skew;
    }

    think(ts) {
        let iterNotes = new Array();

        // Processes all lanes
        for (let i = 0; i < this.lanes.length; i++) {
            // Spawn note objects
            if (this.lanes[i].notes.length != 0) {
                if (this.lanes[i].notes[this.lanes[i].notes.length - 1].startTs + this.skew <= ts) {
                    //console.log(`current time: ${ts}, startTime: (${this.lanes[i].notes[this.lanes[i].notes.length - 1].startTs} + ${this.skew} = ${this.lanes[i].notes[this.lanes[i].notes.length - 1].startTs + this.skew}), diff: ${Math.abs((this.lanes[i].notes[this.lanes[i].notes.length - 1].startTs + this.skew) - ts)}`);
                    iterNotes.push(this.lanes[i].notes[this.lanes[i].notes.length - 1]);
                    this.lanes[i].notes.pop();
                }
            }

            // each lane has one button, so they only need to check if their button is pressed
            const lanePressed = processInput(controllerLaneMapping[i], keyboardLaneMapping[i]);
            // processcontroller with lane mapping
            if (lanePressed && !this.lanes[i].pressed) {
                // Lanes have properties so we don't have to mess with arrays (less operations this way)
                this.lanes[i].pressed = true;
                this.lanes[i].ts = ts;
            } else {
                if (!lanePressed && this.lanes[i].pressed) {
                    this.lanes[i].pressed = false;
                    // Release lane lock
                    if (laneLocks[i] == true) {
                        //console.info(`2. lane ${i}'s lock deactivated`);
                        laneLocks[i] = false;
                    }
                }
            }
        }
        // end lane iteration

        // Update existing notes
        if (display.length != 0) {
            for (let i = 0; i < display.length; i++) {
                // check input for notes
                if (!(display[i] instanceof UnisonBar || display[i] instanceof RatingText)) {
                    if ((this.lanes[display[i].lane].pressed == true) && ((display[i].targetTs - ratingGood) <= (ts - this.skew))) {
                        display[i].fired = true;
    
                        // The code within is ran to destroy notes so it should only be ran when notes should be destroyed
                        if (laneLocks[display[i].lane] == false) {
                            display[i].destroy(ts - this.skew, checkNoteTime(display[i].lane, display[i].targetTs, ts - this.skew));
                        }
                    }
                }
    
                display[i].update(ts - this.skew);
    
                // clear display objects with clear flag on
                if (display[i].clear == true) {
                    if (display[i].fired == false) {
                        // If we've gotten to this point, then it's a miss
                        display[i].destroy(ts - this.skew, `MISS`);
                        display[i] = null;
                    }
                    
                    display.splice(i, 1);
                }
            }
        }

        // Push new notes to be displayed
        if (iterNotes.length > 0) {
            spawnNotes(iterNotes);
        }
    }
    // end think method
}

function spawnNotes(notes) {
    // This is the function where we throw notes to the display list
    // By queueing up notes to spawn, we can check for unison notes and spawn them at the exact same time
    // We also set up things like the unison bar and holds etc.
    var normal = new Array();
    for (let i = 0; i < notes.length; i++) {
        // Check to see if the current iteration note is a normal note
        if (notes[i] instanceof Note) {
            normal.push(notes[i]);
        }
        display.push(notes[i]);
    }

    // unison check
    if(normal.length == 2) {
        // check if the normal notes are both even or both odd
        if (((normal[0] % 2 == 0) && (normal[1] % 2 == 0)) || ((normal[0] % 2 != 0) && (normal[1] % 2 != 0))) {
            // Push unison bar
            display.push(new UnisonBar(
                normal[0].startX,
                normal[0].startY,
                normal[0].endX,
                normal[0].endY,
                normal[1].startX,
                normal[1].startY,
                normal[1].endX,
                normal[1].endY,
                normal[0].startTs,
                normal[0].targetTs,
                normal[0].endTs
            ));
        } else {
            console.error(`2 normal notes appear on the same side! (invalid unison note)`);
        }
    }
}

// Determine timing score of current note
function checkNoteTime(lane, targetTs, ts) {
    // Check to see if the current note is PAST perfect range
        // If so, also check to see if the NEXT sequential note is within range at all
            // If so, GOOD the current note and rate the next sequential (popping both notes)
    // Else, rate the current note accordingly

    //console.log(`testing for ts ${ts} relative to (${startTs}-${targetTs}-${endTs})`);
    // good range
    if (((targetTs - ratingGood <= ts) && (targetTs - ratingGreat > ts)) && (laneLocks[lane] == false)) {
        //console.info(`${ts} fell between good and great (${targetTs - ratingGood} < ${ts} < ${targetTs - ratingGreat})`);
        laneLocks[lane] = true; // locked lanes get released in chart update on button release
        //console.log(`1. lane ${lane}'s lock activated`);
        return `GOOD`;
    }
    if (((targetTs - ratingGreat <= ts) && (targetTs - ratingPerfect > ts)) && (laneLocks[lane] == false)) {
        //console.info(`${ts} fell between great and perfect (${targetTs - ratingGreat} < ${ts} < ${targetTs - ratingPerfect})`);
        laneLocks[lane] = true;
        //console.log(`1. lane ${lane}'s lock activated`);
        return `GREAT`;
    }
    if (((targetTs - ratingPerfect <= ts) && (targetTs + ratingPerfect > ts)) && (laneLocks[lane] == false)) {
        //console.info(`${ts} is perfect (${targetTs - ratingPerfect} < ${ts} < ${targetTs + ratingPerfect})`);
        laneLocks[lane] = true;
        //console.log(`1. lane ${lane}'s lock activated`);
        return `PERFECT`;
    }
    if (((targetTs + ratingPerfect <= ts) && (targetTs + ratingMiss >= ts)) && (laneLocks[lane] == false)) {



        // LANE IS NOT FULLY PROCESSED YET! KEEP PROCESSING! (Lanes need to lock out after a note registers unless it's late)
        // don't activate a lane lock so it falls to the next note (if applicable)


        //console.info(`${ts} fell between perfect and miss (${targetTs + ratingPerfect} < ${ts} < ${targetTs + ratingMiss})`);
        return `LATE`;
    }

    // Holy freakin' crap this would be bad!
    // I suppose performance hitches could lead to this
    console.error(`checkNoteTime: ts was unable to be checked: lane: ${lane}, targetTs: ${targetTs}, ts: ${ts}`);
    return `ERROR`;
}

/*

    Note Objects

*/
class Note {
    x;
    y;
    radius;
    lane;
    clear = false;
    fired = false;
    constructor(startX, startY, endX, endY, startRadius, endRadius, startTs, targetTs, endTs) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.startRadius = startRadius;
        this.endRadius = endRadius;
        this.startTs = startTs;
        this.targetTs = targetTs;
        this.endTs = endTs;

        
    }

    draw() {
        drawCircle(this.x, this.y, this.radius, `hsl(120, 100%, 50%)`, 2, ctx);
    }

    destroy(ts, text) {
        this.clear = true; // if not set already
        //console.log(`note destroyed with rating: ${text} at time ${ts}, endTs: ${this.endTs}, diff: ${Math.abs(ts - this.endTs)}`);
        display.push(new RatingText(this.x, this.y, text, ts));
    }

    update(ts) {
        if(ts >= this.endTs) {
            this.clear = true;
            return;
        } else {
            const percent = (this.startTs - ts) / (this.startTs - this.endTs);
            this.x = this.startX + ((this.endX - this.startX) * percent);
            this.y = this.startY + ((this.endY - this.startY) * percent);
            this.radius = this.startRadius + ((this.endRadius - this.startRadius) * percent);
        }
    }
}

class Scratch {
    radius;
    lane = 0;
    clear = false;
    fired = false;
    constructor(startRadius, endRadius, startTs, targetTs, endTs) {
        this.startRadius = startRadius;
        this.endRadius = endRadius;
        this.startTs = startTs;
        this.targetTs = targetTs;
        this.endTs = endTs;
    }

    draw() {
        drawCircle(cWidth / 2, cHeight / 2, this.radius, `hsl(235, 100%, 50%)`, Math.floor(cHeight * 0.01), ctx);
    }

    destroy(ts, text) {
        this.clear = true; // if not set already
        //console.log(`note destroyed with rating: ${text} at time ${ts}, endTs: ${this.endTs}, diff: ${Math.abs(ts - this.endTs)}`);
        display.push(new RatingText(this.x, this.y, text, ts));
    }

    update(ts) {
        

        if(ts >= this.endTs) {
            this.clear = true;
            return;
        } else {
            const percent = (this.startTs - ts) / (this.startTs - this.endTs);
            this.radius = this.startRadius + ((this.endRadius - this.startRadius) * percent);
        }
    }
}

class UnisonBar {
    x1;
    y1;
    x2;
    y2;
    // fuses to check if we need to clear the bar since notes are gone
    fuse1 = false;
    fuse2 = false;
    clear = false;
    constructor(startX1, startY1, endX1, endY1, startX2, startY2, endX2, endY2, startTs, targetTs, endTs) {
        this.startX1 = startX1;
        this.startY1 = startY1;
        this.endX1 = endX1;
        this.endY1 = endY1;
        this.startX2 = startX2;
        this.startY2 = startY2;
        this.endX2 = endX2;
        this.endY2 = endY2;
        this.startTs = startTs;
        this.targetTs = targetTs;
        this.endTs = endTs;
    }

    draw() {
        drawLine(this.x1, this.y1, this.x2, this.y2, `hsl(312, 100%, 50%)`, Math.floor(cHeight * 0.03), ctx);
    }

    destroy(ts) { }

    update(ts) {
        if((ts >= this.endTs) || (this.fuse1 && this.fuse2)) {
            this.clear = true;
            return;
        } else {
            const percent = (this.startTs - ts) / (this.startTs - this.endTs);
            //console.log(percent);
            this.x1 = this.startX1 + ((this.endX1 - this.startX1) * percent);
            this.y1 = this.startY1 + ((this.endY1 - this.startY1) * percent);
            //console.log(`x: ${this.x1}, y: ${this.y1}`);
            this.x2 = this.startX2 + ((this.endX2 - this.startX2) * percent);
            this.y2 = this.startY2 + ((this.endY2 - this.startY2) * percent);
        }
    }
}

class RatingText {
    percent = 0;
    constructor(x, y, text, startTs) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.startTs = startTs;
    }

    draw() {
        drawText(this.x, this.y, `${cHeight * 0.03}px Arial`, `rgba(255, 255, 255, ${1 - this.percent})`, this.text);
    }

    destroy(ts) {}

    update(ts) {
        if(ts >= (this.startTs + textDisplayTime)) {
            this.clear = true;
            return;
        } else {
            this.percent = (this.startTs - ts) / (this.startTs - (this.startTs + textDisplayTime));
            this.y -= ((cHeight * 0.005) * this.percent);
        }
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
}

function drawText(x, y, font, style, text) {
    ctx.font = font;
    ctx.fillStyle = style;
    ctx.textAlign = `center`;
	ctx.textBaseline = `middle`;
    ctx.fillText(text, x, y);
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

function drawLine(startX, startY, endX, endY, style, width, context) {
    context.strokeStyle = style;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

function drawCanvas() {
    // clear the canvas
    ctx.clearRect(0, 0, cWidth, cHeight);

    // these will be replaced by bitmaps at some point
    drawCircle(cWidth / 2, cHeight / 2, cWidth * 0.36, `#CDCDCD`, 4, ctx);
    // clear area for note pos
    /*
    for (let i = 0; i < noteMultSX.length; i++) {
        ctx.globalCompositeOperation = 'destination-out';
        fillCircle(cWidth * noteMultTargetX[i], cHeight * noteMultTargetY[i], noteSize, `hsl(60, 100%, 30%)`, 2, ctx);
        ctx.globalCompositeOperation = 'source-over';
    }
    */
    // draw note pos
    for (let i = 0; i < noteMultSX.length; i++) {
        drawCircle(cWidth * noteMultTargetX[i], cHeight * noteMultTargetY[i], noteSize, `hsl(60, 100%, 30%)`, 2, ctx);
    }

    // draw display list
    for (let i = 0; i < display.length; i++) {
        display[i].draw();
    }
}

// Converts LRC file timestamps to ms (for timestamps)
function convTimeStamp(ts) {
    var result = 0;
    // expected format for ts: MINUTE:SECOND.MS
    const regex = /(\d+):(\d+)\.(\d+)/;
    const eval = ts.match(regex);

    if (eval) {
        // Convert minutes to ms
        result += parseInt(eval[1]) * 60000;
        // Convert seconds to ms
        result += parseInt(eval[2]) * 1000;
        // Add ms
        result += parseInt(eval[3]);

        return result;
    } else {
        // There is nothing to return
        console.error(`convTimeStamp: Provided timestamp (${ts}) was not able to be interpreted!`);
        return null;
    }
}

// Get random integer with inclusive ranges [min:max]
function getRandomIntRange(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sets content of HTML element (for debug output)
function setElement(doc, element, newText) {
	doc.getElementById(element).innerHTML = newText
}

function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function getKeyDowns() {
    var output = ``;
    for (let i = 0; i < keyDown.length; i++) {
        output = `${output} ${keyDown[i]}`
    }
    return output;
}

function startGame() {
    startTime = Date.now();
    rc.updateSkew(startTime);
    document.getElementById("startbutton").disabled = true;
    document.getElementById("stopbutton").disabled = false;
    isUpdating = true;
    testAudio.play();
}

function stopGame() {
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled = true;
    isUpdating = false;
}

function handleKeyDown() {
    // Ignore repeated events and ignored keys
    // Was previously using event.key, but key.code allows us not to worry about shift modifier for keys
    if(!event.repeat && !ignoreKeys.includes(event.code)) {
        // Push the key and start time to respective arrays
        // Also make lower case because reasons
        keyDown.push(event.code);
        keyTimes.push(Date.now());
    }
}

function handleKeyUp() {
    var found = false;
    // Search to see if key is in keyDown[] and remove it
    for (let i = 0; i < keyDown.length; i++) {
        if (keyDown[i] == event.code) {
            const out = `${event.code} finished. Elapsed time: ${Date.now() - keyTimes[i]}ms`;
            //updateOutput(out, `output`);
            console.log(out);
            found = true;
            keyDown.splice(i, 1);
            keyTimes.splice(i, 1);
        }
    }
    
    if (!found && !ignoreKeys.includes(event.code)) {
        console.warn(`keyUp event intercepted that was not found in keyDown[]: ${event.code}. This could be a problem.`);
    }
}

// Set up recieving arrow key events (non-deprecated method)
function addKeyboardListeners() {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
}

// Check to see if the input is being pressed (controller or keyboard)
function processInput(button, key) {
    // controller code path
    // isn't working in chromium for some reason?
    if (gamepadConnected) {
        // using value because of trigger scratches
        if (gamepad.buttons[button].value > 0.3) {
            return true;
        } else {  return false; }
    // keyboard code path
    } else {
        if (keyDown.includes(key)) {
            return true;
        } else { return false; }
    }
}

// Updates very often
function update() {
	if (isUpdating) {
		uTimestamp = Date.now();
	
        // This is redundant at the moment
		if ((uTimestamp - uPrevTimestamp) >= updateInterval) {
			fixedUpdate(uTimestamp);
			uPrevTimestamp = uTimestamp;
		}
	}

    // Canvas resizing on document size change
    if((window.innerWidth != docWidth) || (window.innerHeight != docHeight)) {
        console.log(`window size changed!`);
        // resize canvas
        docWidth =  window.innerWidth;
        docHeight = window.innerHeight;
        resizeCanvas(c, docWidth * 0.9, docHeight * 0.9, 16, 9);
    }
}

// Update the game on a fixed interval
function fixedUpdate(ts) {
	rc.think(ts);

    drawCanvas(ts);
}

// Size the canvas on script load
resizeCanvas(c, docWidth * 0.9, docHeight * 0.9, 16, 9);

// Start executing the game
// Updating at 1ms intervals (aparrently)
var updateId = setInterval(update, 1);

// Gets executed right before setInterval callback starts
prevTimestamp = Date.now();
uPrevTimestamp = prevTimestamp;
document.getElementById("stopbutton").disabled = true;

// load the chart
var rc = new RhythmChart(test);

// Add keyboard event listeners (no gamepad assumed on start)
addKeyboardListeners();

// Gamepad events
window.addEventListener("gamepadconnected", (event) => {
    gamepadConnected = true;
    gamepad = event.gamepad;
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
    // Clear out keyboard arrays (they can no longer be released)
    keyDown = new Array();
    keyTimes = new Array();

    console.log(`gamepad connected: ${event.gamepad.id}`);
});

window.addEventListener("gamepaddisconnected", (event) => {
    gamepadConnected = false;
    addKeyboardListeners();

    console.log(`gamepad disconnected`);
})