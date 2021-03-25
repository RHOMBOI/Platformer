
var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 500;
var c = canvas.getContext("2d");
var keys = [];
var keybinds = [];
var squares = [];
var fr = 60;
var texts = [];
var movingPlatforms = [];
var layout = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var scale = 40;
var player = new Player(400,canvas.height / 2);
var s = player.square;

var camera = new Camera(player.x - canvas.width / 2, player.y, canvas.width / 2);

new Text(400,50,"Welcome to the greatest platformer ever made",20,"Arial");
new Text(400,100,"Or you just died",20,"Arial");
new Text(400,150,"In that case sucks to be you lol",20,"Arial");
new Text(4250,100,"This part is EVIL!!!",20,"Arial").color = "red";
new Text(6430,50,"THE CAVE OF DOOM",20,"Arial");
new Text(7300,50,"Good luck with this part",20,"Arial").color = "white";

t1 = new Text(9040,110,"Congratulations on beating the",15,"Arial");
t2 = new Text(9040,140,"only platformer where you can trip!",15,"Arial");
t3 = new Text(9040,170,"Walk into the red square to see what you won!",15,"Arial");
t4 = new Text(9040,200,"(The tripping is definitely not a bug lol)",15,"Arial");
t1.color = "white";
t2.color = "white";
t3.color = "white";
t4.color = "white";
t1.centered = false;
t2.centered = false;
t3.centered = false;
t4.centered = false;
initKeybinds();
loadLayout();
c.strokeStyle = "white";
setInterval(function () {
    cls("skyblue");
    checkKeys();
    drawSquares();
    drawTexts();
    updateSquares();
    player.update();
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
function loadLayout() {
    for (let y = 0; y < layout.length; y++) {
        for (let x = 0; x < layout[y].length; x++) {
            let cl = layout[y][x];
            if (cl === 0) {
                continue;
            } else if (cl === 1) {
                new Square((x - 1) * scale + scale / 2 - 2, y * scale + scale / 2, scale + 1, scale + 1, "square");
            } else if (cl === 2) {
                new Square((x - 1) * scale + scale / 2 - 2, y * scale + scale / 2, scale + 1, scale + 1, "death");
            }
        }
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
    }
}
function Keybind(key, func) {
    this.key = key;
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
    this.jumpHeight = 10;
    this.gravity = true;
    this.isFlying = false;
    this.gravitySpeed = 16;
    this.x = x;
    this.y = y;
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
                if(Math.abs(dx) < 50 + scale && Math.abs(dy) < 50 + scale){
                let w = (this.square.w + cs.w) / 2;
                let h = (this.square.h + cs.h) / 2;
                let ox = 0;
                let oy = 0;
                if (Math.abs(dx) < w && Math.abs(dy) < h) {
                    if (cs.type === "death") {
                        this.die();
                    } else {
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
            }
        }
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
    this.side = false; //move left right
    this.vX = 0;
    this.speed = 1 / 60;
    this.moveTimer = 0;
    this.onGround = false;
    this.tL = new Point(x - this.w / 2, y - this.h / 2);
    this.tR = new Point(x + this.w / 2, y - this.h / 2);
    this.bR = new Point(x + this.w / 2, y + this.h / 2);
    this.bL = new Point(x - this.w / 2, y + this.h / 2);
    this.draw = function () {
        if(camera.x - camera.fov && this.x < camera.x + camera.fov * 2 + scale * 2){
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
            } else if (this.type === "physics") {
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
        this.pos(this.x, other.y + (s.h + other.h) / 2);
    };
    this.onCollideBottom = function (other) {
        this.vY = 0;
        this.pos(this.x, other.y - (s.h + other.h) / 2);
        this.onGround = true;

    };
    this.onCollideLeft = function (other) {
        this.vX = 0;
        this.pos(other.x - (s.w + other.w) / 2, this.y);
    };
    this.onCollideRight = function (other) {
        this.vX = 0;
        this.pos(other.x + (s.w + other.w) / 2, this.y);
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
function initKeybinds() {
    new Keybind("ArrowUp", function () {
        if (player.onGround) {
            player.vY = -player.jumpHeight;
        }
    });
    new Keybind("ArrowRight", function () {
        player.vX += player.speed;
    });
    new Keybind("ArrowLeft", function () {
        player.vX -= player.speed;
    });
};



//window.addEventListener("mousedown", function (event) {
//    new Square(event.x + camera.x, event.y, 20, 20,  "physics");
//});

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
