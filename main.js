song1 = ""
song2 = ""
function preload() {
    song1 = loadSound("Humpty_Dumpty.mp3");
    song2 = loadSound("Wheels_on_the_bus.mp3");
}
function setup() {
    canvas = createCanvas(600,600);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
}
function draw() {
    image(video,0,0,600,600);

}

