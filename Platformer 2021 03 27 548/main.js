
var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
var c = canvas.getContext("2d");
var keys = [];
var keybinds = [];
var squares = [];
var fr = 60;
var texts = [];
var stage = 0;
var levels = [];
var bgc = "lightblue";
     //1 is solid black square
     //2 is death block
     //3 is win block
     //4 is checkpoint block
     //5 is player start position
function Level(backgroundcolor){
    this.backgroundcolor = backgroundcolor;
    this.layout = [];
    levels.push(this);
}

level1 = new Level("skyblue").layout = [
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , ,5, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1, , , , , , , , , , , , , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,3, , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , ,1,1,1, , , ,1,1,1, , , , , , , , , , , , ,1,1,1, , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , ,1, , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , ,1, , , , , , , , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

level2 = new Level("#909090").layout = [
    [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , ,1, ,1,1,1,1, , , , ,1, , , ,1,1,1, , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1, ,1, ,1,1,1,1, ,1,1,1, , ,1, , ,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , ,1, , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1, , , ,1,1,1,1, ,1,1,1,1, ,2,1, , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , ,5, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , ,1,2, , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , ,1,1, ,1,1,1,1, , , , , , , , ,1,1,1, , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , , , , , , , , , , , , , ,2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , ,1,2,2, , , , , ,1, , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1, , , ,1,1,1,1,1,1,1,1,1,1,1, , ,1, ,1,1,1,1, ,1,1,1, , ,1,1,1, , ,1,1, ,1,1,2,1,1, ,1, , ,3,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , ,2, , , , , , , , , , ,2,2,2, , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , ,1,2,2,2, , , , , , , , , , , , ,1,1,1,1,1,1,1, ,1,1,1, , ,4, , , ,1, ,1,1,1,1,1, , , , ,1, , ,2,1, ,1,1,1,1, , ,1,1,1, ,1,1,1,1, ,1,1, ,1, ,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [ , , , ,2, , , , , , , , , ,2,2,2,2,2, , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , ,1,2,2,2,2, , , , , , , , , , , ,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1, ,1,1,1,1,1, ,1,2, , , ,1,1,1, ,1,1,1,1, , , , , , , , , ,1, , , ,1,1,1, , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1, , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , ,2,1,1,1,1,1, , , ,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ,2,1,1,1, , ,1,1, ,1,1,1,1,1,2,1,1,1,1, ,1,1,1,1, ,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1, ,1, , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , ,1,1,1,1,1,1,1, , , ,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , ,1,1,1, ,1,1,1, , , , , ,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1, , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , ,1,1,1,1,1,1,1,1, , , ,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , ,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1, , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1,1,1,1,1,1,1,1, , , ,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

level3 = new Level("aquamarine").layout = [ 
    [1, , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , ,3, , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , ,1, , , , , ,1, , , , , , , , , ,1, , , , , , , , , , , , ,1,1,1, , , ,1, , , , , , , , , ,1, , ,1, , ,1, , , , , , , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , ,5, , , , , , , , , , , ,1, , , , , , , , , , , , , , ,1,1, , , , , ,1,2, , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , ,1,1, , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , ,1, , , , , , , , ,1, , , , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , , ,1, , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1, , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , ,2, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , ,1, , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1, , , , , , , , , , ,2, , , , , , , , , , , , , , , , , , , , , , , , ,2,2,2, , , , , , , , , , , , , , , , , , , , , ,1, , , , , ,1,1, , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,2,2,2,2,2, ,4, , , , , , , , , , ,1,1,1, , ,1, , , , , , , , , , , , , , , ,1, , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , ,1,1,1,1,1, , , , ,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ,1,1,1, , , , , , , , , , , , ,1, , , , , , ,1, , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1, , , , , ,1, , , ,1,1,1,1,1, , , , ,1,1,1,1, ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1]
];
level4 = new Level("#fff0ff").layout = [
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , ,2,2,2,2,2,1,1,1,1,1,1,1,1, , , , , , , , , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , ,1, , , ,2, , ,2, , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , ,2,2,2,2,2, , , , , , , ,1, , , , , , , , , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , ,1,1,1,1,1,1, , , , , , , , , ,1, , , ,2, , ,2, , , ,1, , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , ,2,2,2,2,2, , , , ,1, , ,1, , , , , , , , , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , ,1, , , , , , , , , , , , , ,1, , , ,2, , ,2, , , ,1, , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , ,5, , ,2, , ,2,2,2,2,2, , , , ,1, , , , , , , , , , , , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , ,1,1, , , , , , , , , , , , , ,1, , , , , , ,2, , , ,1, , , , , , , , , , , , , , , , , , , , , , ,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , , , , ,2,2, , , ,1,1, , ,1, , , , , , , , , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , ,1, , , , , , , , , , , , , ,1, , , , , , ,2, , , ,1, , , , , ,1, , , , , , , , , , , , , , , , , ,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , ,2, , , , ,1, , ,1, , , , , , , , , , , , ,1, , , , ,1, , , , , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , , , , , ,1,1, , , , , , , , , , , , , ,1, , , ,2, , ,2, , , ,1, , , , , , , , , , , , , , , , , , , , , , , ,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , , ,2,2, , , , , , ,1,2,2,1, , , , , , , , , , , , ,1, , , , , , , , , , ,1, , , ,1, , , ,1, , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , ,1,1,1, , , , , , , , , , , , , ,1, , , , , , , , , , , , , , , , , ,2, , ,1, , , ,1, , , , , , , , , , ,6,6,6,6, , , , , , , , , ,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,2, , ,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , , , , ,2, , ,1, , , , , , , ,1, , , , , , , , ,1,1, , , ,1,1,1,1,1,1,1,1,1,1, ,2, , , ,2,1,1,1, , , , , , , , , , , , ,1,1, , , , , , , , , , , , , ,1, , , ,2, , , , , , ,1, , , , , ,1, , , , , , , , , , , , , , , , , , ,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , , , , , , ,1, , ,2, , , , , , ,1, , , , , , , , , , , , ,1, , ,1, , ,1,1,1,1,1,1, , , , ,2, , , ,2,1,1,1, , , , , ,1, , , , , , , ,1, , , , , , ,4, , , , , , ,1, , , ,2,1,1,1, , , , , , , , , ,1, , , , , , , , , , , , , , , , , , ,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , , , , , , , , , , , , ,1,1,1, , , , ,4, , , ,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1, , , , , , ,1,1, , , , ,1,1,1,1, , , , , ,1, , , ,2, , ,2, , , ,1, , , , , ,1, , , , , , , , , , , , , , , , ,3, ,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , , ,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , , , ,1, , , , ,1, , ,2, , ,1, , , ,1, , , ,1, , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1]
];

var scale = 40;
var player;
loadLayout(stage);
var s = player.square;
var camera = new Camera(player.x - canvas.width / 2, player.y, canvas.width / 2);
initText();
initKeybinds();
c.strokeStyle = "white";
setInterval(function () {
    cls(bgc);
    checkKeys();
    drawSquares();
    drawTexts();
    updateSquares();
    player.update();
    c.fillStyle = "white";
    c.font = "20px Comic Sans";
    c.fillText("Level " + (stage + 1),10,25);
}, 1000 / fr);
function drawSquares(){
    for (let i = 0; i < squares.length; i++) {
        let e = squares[i];
            if (e !== player.square) {
                e.draw();
            }
    }
}
function updateSquares() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].type === "moving") {
            squares[i].update();
        }
        if (squares[i].type === "physics") {
            squares[i].update();
        }
    }
}
function loadLayout(level) {
    if(level >= levels.length){
        player.die();
        new Text(player.x, canvas.height / 2 - 50, "You beat the game :D", 30,"Arial");
    }
    else{
    squares = [];
    let layout = levels[level].layout;
    for (let y = 0; y < layout.length; y++) {
        let w = scale;
        let l;
        for (let x = 0; x < layout[y].length + 1; x++) {
            let cl = layout[y][x];
            if(!x === layout[y].length || cl === l){
                w += scale;
            }
            if(cl !== l || w > scale && x === layout[y].length){
                if(w > 0){
                    if(l === 1){
                    new Square(x * scale - w / 2 - scale, y * scale, w, scale, "square");
                }
                else if(l === 2){
                    new Square(x * scale - w / 2 - scale, y * scale, w, scale, "death");
                }
                else if(l === 3){
                    new Square(x * scale - w / 2 - scale, y * scale, w, scale, "win");
                }
                else if(l === 4){
                    new Square(x * scale - w / 2 - scale, y * scale, w, scale, "checkpoint");
                }
                else if(l === 5){
                    player = new Player(x * scale - scale - scale / 2, y * scale);
                }
                else if(l === 6){
                    new Square(x * scale - w / 2 - scale, y * scale, w, scale, "moving").moveDistance = 80;;
                }
                }
            }
            
            if(cl !== l || x === layout[y].length){
                 w = scale;
             }
            l = cl;
            
        }
    }
    bgc = levels[level].backgroundcolor;
    initText();
    player.die();
    }
}
function Text(x,y,text,size,font){
    this.color = "black";
    this.centered = true;
    this.x = x;
    this.y = y;
    this.size = size;
    this.font = font;
    this.text = text;
    this.draw = function(){
        if(this.centered){
        c.font = this.size + "px " + this.font;
        c.fillStyle = this.color;
        c.fillText(this.text, this.x - camera.x - c.measureText(this.text).width / 2, this.y);
    }
    else{
        c.font = this.size + "px " + this.font;
        c.fillStyle = this.color;
        c.fillText(this.text, this.x - camera.x, this.y);
    }
    };
    texts.push(this);
}
function drawTexts(){
    for(let i = 0; i < texts.length; i++){
     texts[i].draw();   
    }
}
function cls(background_color) {
    c.fillStyle = background_color;
    c.fillRect(0, 0, canvas.width, canvas.height);
}
function checkKeys() {
    for (let i = 0; i < keybinds.length; i++) {
        if (keys.includes(keybinds[i].key)) {
            keybinds[i].func();
        }
        else{
            if(keybinds[i].else){
            keybinds[i].else();
        }
        }
    }
}
function Keybind(key, func) {
    this.key = key;
    this.else;
    this.func = func;
    keybinds.push(this);
}
function Camera(x, y, fov) {
    this.x = x;
    this.y = y;
    this.scrollDistance = 40;
    this.scrollSpeed = 10;
    this.fov = fov;
    this.update = function () {
        let x = player.x - canvas.width / 2;
        let pdx = Math.abs(this.x - x);
        if (this.x > x) {
            this.x -= pdx / this.scrollSpeed;
        } else {
            this.x += pdx / this.scrollSpeed;
        }

        if (this.x < this.fov - canvas.width / 2) {
            this.x = this.fov - canvas.width / 2;
        }
    };
}
function Player(x, y) {
    this.square = new Square(x, y, scale / 3, scale / 3, "player");
    this.startPos = new Point(x, y);
    this.square.color = "red";
    this.dragX = 0.96;
    this.dragY = 0.98;
    this.deathY = 600;
    this.jumpHeight = 7.8;
    this.gravity = true;
    this.isFlying = false;
    this.gravitySpeed = 15;
    this.initGravity = this.gravitySpeed * 1.25;
    this.jumpGravity = 10;
    this.x = x;
    this.y = y;
    this.jumped = false;
    this.speed = 0.2;
    this.onGround = false;
    this.vX = 0;
    this.vY = 0;
    this.pos = function (x, y) {
        this.x = x;
        this.y = y;
        this.square.pos(x, y);
    };
    this.onCollideTop = function (other) {
        this.vY = 0;
        this.pos(this.x, other.y + (s.h + other.h) / 2);
    };
    this.onCollideBottom = function (other) {
        this.vY = 0;
        this.pos(this.x, other.y - (s.h + other.h) / 2);
        this.onGround = true;
        this.jumped = false;

    };
    this.onCollideLeft = function (other) {
        this.vX = 0;
        this.pos(other.x - (s.w + other.w) / 2, this.y);
    };
    this.onCollideRight = function (other) {
        this.vX = 0;
        this.pos(other.x + (s.w + other.w) / 2, this.y);
    };
    this.update = function () {
        this.onGround = false;
        this.vX *= this.dragX;
        this.vY *= this.dragY;
        this.x += this.vX;
        this.y += this.vY;
        this.square.pos(this.x, this.y);
        this.checkCollide();
        if (!this.onGround && this.gravity) {
            this.vY += this.gravitySpeed / fr;
        }
        if (this.y >= this.deathY) {
            this.die();
        }
        camera.update();
        this.draw();
    };
    this.die = function () {
        this.pos(this.startPos.x, this.startPos.y);
        this.vX = 0;
        this.vY = 0;
    };
    this.setFlying = function (flying) {
        this.gravity = !flying;
        this.isFlying = flying;
    };
    this.checkCollide = function () { // T H E P A I N
        this.onGround = false;
        for (let i = 0; i < squares.length; i++) {
            let cs = squares[i];
            if (cs !== this.square) {
                let dx = this.x - cs.x;
                let dy = this.y - cs.y;
                if(Math.abs(dx) < 50 + cs.w && Math.abs(dy) < 50 + cs.h){
                let w = (this.square.w + cs.w) / 2;
                let h = (this.square.h + cs.h) / 2;
                let ox = 0;
                let oy = 0;
                if (Math.abs(dx) < w && Math.abs(dy) < h) {
                    if (cs.type === "death") {
                        this.die();
                    }
                    else if(cs.type === "win"){
                        stage++;
                        loadLayout(stage);
                    } 
                    else if(cs.type === "checkpoint"){
                        player.startPos = new Point(player.x,player.y);
                    } 
                    else if(cs.type === "trigger"){
                        cs.onTrigger();
                    }
                        else {
                        ox = Math.abs(dx);
                        oy = Math.abs(dy);
                        if (ox - w > oy - h) {
                            if (dx < 0) {
                                if(this.vX > 0){
                                this.onCollideLeft(cs);
                            }
                            } else {
                                if(this.vX < 0){
                                this.onCollideRight(cs);
                            }
                            }
                        } else {
                            if (dy > 0) {
                                if(this.vY < 0){
                                this.onCollideTop(cs);
                            }
                            } else {
                                if(this.vY > 0){
                                this.onCollideBottom(cs);
                            }
                            }
                        }
                    }
                    }
                }
                else{continue;}
            }
        };
    };

    this.draw = function () {
        this.square.draw();
    };
}
function Point(x, y) {
    this.x = x;
    this.y = y;
}
function Square(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vX = 0;
    this.vY = 0;
    this.dragX = 0.98;
    this.dragY = 0.98;
    this.fill = true;
    this.stroke = false;
    this.gravitySpeed = 20;
    this.type = type;
    this.gravity = true;
    this.initX = x;
    this.color = "black";
    this.initY = y;
    this.deathY = 600;
    this.moveDistance = 20;
    this.startPos = new Point(x,y);
    this.vert = false; //move up
    this.side = true; //move left right
    this.vX = 0;
    this.onTrigger;
    this.speed = 1 / 60;
    this.moveTimer = 0;
    this.onGround = false;
    this.tL = new Point(x - this.w / 2, y - this.h / 2);
    this.tR = new Point(x + this.w / 2, y - this.h / 2);
    this.bR = new Point(x + this.w / 2, y + this.h / 2);
    this.bL = new Point(x - this.w / 2, y + this.h / 2);
    this.draw = function () {
        if(camera.x - camera.fov && this.x < camera.x + camera.fov * 2 + this.w * 2){
        c.beginPath();
        c.moveTo(this.tL.x - camera.x, this.tL.y);
        c.lineTo(this.tR.x - camera.x, this.tR.y);
        c.lineTo(this.bR.x - camera.x, this.bR.y);
        c.lineTo(this.bL.x - camera.x, this.bL.y);
        c.lineTo(this.tL.x - camera.x, this.tL.y);
        c.closePath();
        if (this.stroke) {
            c.stroke();
        }
        if (this.fill) {
            this.stroke = false;
            if (this.type === "square") {
                this.color = "black";
            } else if (this.type === "moving") {
                this.color = "orange";
            } else if (this.type === "player") {
                this.color = "lime";
                c.strokeStyle = "black";
                this.stroke = true;
            } else if (this.type === "death") {
                this.color = "red";
            }
            else if(this.type === "checkpoint"){
                this.color = "yellow";
            }
            else if(this.type === "win"){
                this.color = "mediumblue";
            }
             else if (this.type === "physics") {
                this.color = "purple";
            }

            c.fillStyle = this.color;
            c.fill();
        }
    }
    };
    this.pos = function (x, y) {
        this.x = x;
        this.y = y;
        this.tL = new Point(x - this.w / 2, y - this.h / 2);
        this.tR = new Point(x + this.w / 2, y - this.h / 2);
        this.bR = new Point(x + this.w / 2, y + this.h / 2);
        this.bL = new Point(x - this.w / 2, y + this.h / 2);
    };
    this.onCollideTop = function (other) {
        this.vY = 0;
        this.pos(this.x, other.y + (this.h + other.h) / 2);
    };
    this.onCollideBottom = function (other) {
        this.vY = 0;
        this.pos(this.x, other.y - (this.h + other.h) / 2);
        this.onGround = true;
    };
    this.onCollideLeft = function (other) {
        this.vX = 0;
        this.pos(other.x - (this.w + other.w) / 2, this.y);
    };
    this.onCollideRight = function (other) {
        this.vX = 0;
        this.pos(other.x + (this.w + other.w) / 2, this.y);
    };
    this.die = function () {
        this.pos(this.startPos.x, this.startPos.y);
        this.vX = 0;
        this.vY = 0;
    };
    this.update = function () {
        if(this.type === "moving"){
        if (this.side) {
            this.pos(this.initX + Math.sin(this.moveTimer) * this.moveDistance, this.initY);
            this.moveTimer += this.speed;
        }
        if (this.vert) {
            this.pos(this.initX, this.initY + Math.sin(this.moveTimer) * this.moveDistance);
            this.moveTimer += this.speed;
        }
    }
    else if(this.type === "physics"){
        this.onGround = false;
        this.vX *= this.dragX;
        this.vY *= this.dragY;
        this.pos(this.x + this.vX, this.y + this.vY);
        for (let i = 0; i < squares.length; i++) {
            let cs = squares[i];
            if (cs !== this) {
                let dx = this.x - cs.x;
                let dy = this.y - cs.y;
                if(Math.abs(dx) < 50 - scale && Math.abs(dy) < 50 - scale){
                let w = (this.w + cs.w) / 2;
                let h = (this.h + cs.h) / 2;
                let ox = 0;
                let oy = 0;
                if (Math.abs(dx) < w && Math.abs(dy) < h) {
                        ox = Math.abs(dx);
                        oy = Math.abs(dy);
                        if (ox - w > oy - h) {
                            if (dx < 0) {
                                this.onCollideLeft(cs);
                            } else {
                                this.onCollideRight(cs);
                            }
                        } else {
                            if (dy > 0) {
                                this.onCollideTop(cs);
                            } else {
                                this.onCollideBottom(cs);
                            }
                        }
                }
            }
            }
            else{
                if (!this.onGround && this.gravity) {
            this.vY += this.gravitySpeed / fr;
        }
            }
        }
        
        if (this.y >= this.deathY) {
            this.die();
        }
    }
    };
    this.setSpeed = function (speed) {
        this.speed = speed / 60;
    };
    squares.push(this);
}
function initText(){
    texts = [];
    if(stage === 0){
        new Text(400,50,"Welcome to the greatest platformer ever made",20,"Arial");
        new Text(400,100,"Or you just died",20,"Arial");
        new Text(400,150,"In that case sucks to be you lol",20,"Arial");
        new Text(3740,150,"Touch the blue square to see what you win!",15,"Arial");
    }
    else if(stage === 1){
        new Text(400,150,"You win more of this game!",20,"Arial");
    }
    else if(stage === 2){
        new Text(3700,250,"hey",20,"Arial").color = "orange";
    }
}
function initKeybinds() {
    new Keybind("ArrowUp", function () {
        
        if((player.jumped && player.vY > 0.2) || player.vY > 0.2){
           player.gravitySpeed = player.initGravity;
        }
        
        if (player.onGround) {
            player.jumped = true;
            player.vY = -player.jumpHeight;
            player.gravitySpeed = player.jumpGravity - Math.abs(player.vX / 2.5);
        }
        
        
    }).else = function(){
        if((player.jumped && player.vY < 0.2) || player.vY > 0.2){
            player.gravitySpeed = player.initGravity;
        }
    };
    
    new Keybind("ArrowRight", function () {
        player.vX += player.speed;
    });
    new Keybind("ArrowLeft", function () {
        player.vX -= player.speed;
    });
};

canvas.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
window.addEventListener("keydown", function (event) {
    if (!keys.includes(event.key)) {
        keys.push(event.key);
    }
});
window.addEventListener("keyup", function (event) {
    if (keys.includes(event.key)) {
        keys.splice(keys.indexOf(event.key), 1);
    }
});
