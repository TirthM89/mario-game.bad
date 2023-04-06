NX = 0;
NY = 0;
img = "";
MX = 325;
MY = 325;




function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("imgs/mario/mario05.png");
}

function setup() {
	canvas = createCanvas(1200, 400);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function modelLoaded() {
	console.log("model is loaded");
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		NX = results[0].pose.nose.x;
		NY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
	if (NX < 300) {
		MX = MX - 1;
	}
	if (NX > 300) {
		MX = MX + 1;
	}
	if (NY < 150) {
		MY = MY - 1;
	}
	if (NY > 150) {
		MY = MY + 1;
	}
}






