#pragma author MarkkusBoi
#pragma description MNS Game
#pragma magic [ 4D 4E 53 00 ] @ 0x00

// heavily based on https://github.com/tge-was-taken/010-Editor-Templates/blob/master/templates/p4d_mns.bt

import std.io;
import std.math;

enum dDifficulty : u16 {
    Easy = 0,
    Normal = 1,
    Hard = 2,
    AllNight = 3,    
};

enum dBeat : u8 {
    First = 0,
    Second = 1,
    Third = 2,
    Fourth = 3
};

enum dButton : u8 {
    Down = 0,
    Cross = 1,
    Left = 2,
    Circle = 3,
    Up = 4,
    Triangle = 5,
    Scratch = 8,
};

enum dMeta : u16 {
    Normal = 0,
    FEVER = 1,
    Double = 2,
};

struct dNote {
    dBeat beat;
    u8 subBeat;
    u16 measure;
    dButton button;
    u8 holdDuration;
    dMeta type;
} [[single_color]];

struct mnsFile {
    le char magic[4] [[color("FF0000")]];
    le u32 field04;
    le u32 field08;
    le u32 musicId;
    le float bpm;
    le u16 musicIdMajor;
    dDifficulty difficulty;
    le u32 field18;
    le u32 noteCount; // does not include duplicates
    le u32 field20;
    dNote notes[numNotes] @ 0x24;
} [[single_color]];

u32 fileSize = std::mem::size();
u32 numNotes = (fileSize - 36) / 8;

std::print("Notes in file: {}", numNotes);

mnsFile file @ 0x00;

if(file.magic == "MNS\x00"){
    std::print("Magic is correct!");
}else{
    std::print("Magic mismatch! File is not MNS or is corrupt!");
}