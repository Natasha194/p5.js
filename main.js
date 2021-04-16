function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(300, 295);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintColor);
}

function takeSnapshot() {
    save('photoEdit.png');
}

function filterTint() {
    tintColor = document.getElementById("tintColor").value;
}