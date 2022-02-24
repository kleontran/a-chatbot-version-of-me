let video1;
let video2, video3, video4, video5, video6, video7, video8, video9, video10;
let bttn;
let answer;
let listening;
let brain;
let mic;
let myRec = new p5.SpeechRec();

function preload() {
  video1 = createVideo(
    "yt5s.com-Battlefield 1 - To Be Continued (Roundabout JoJo meme)(360p).mp4"
  );
  video2 = createVideo("yt5s.com-Dude how do you feel sicko mode-(480p).mp4");
  video3 = createVideo(
    "yt5s.com-Fearless meme ORIGINAL (flipaclip) gift for baked Potonion and Kitten cloudy-(240p).mp4"
  );
  video4 = createVideo("yt5s.com-For the Damaged Coda Meme(360p).mp4");
  video5 = createVideo("yt5s.com-Happy meme template.(360p).mp4");
  video6 = createVideo("yt5s.com-Joe Biden says hello-(480p).mp4");
  video7 = createVideo("yt5s.com-Jojo earthquake meme.mp4");
  video8 = createVideo("yt5s.com-Rage quit meme(360p).mp4");
  video9 = createVideo("yt5s.com-Rickroll (Meme Template)(360p).mp4");
  video10 = createVideo("yt5s.com-you disgust me(360p).mp4");
  brain = loadJSON("chatbotBrain.json");
}
function setup() {
  createCanvas(1200, 700);
  mic = new p5.AudioIn();
  bttn = createButton("Press enter to start speaking");
  bttn.size(200, 20);
  bttn.position(width / 2, height / 4);
  bttn.mousePressed(startListening);
  video1.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  video5.hide();
  video6.hide();
  video7.hide();
  video8.hide();
  video9.hide();
  video10.hide();
}
function draw() {
  if (listening == true) {
    background(0);
  } else {
    background(255);
  }
  if (answer === "1") {
    video1.show();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video1.play();
    video1.volume(1);
  } else if (answer === "2") {
    video1.hide().stop();
    video2.show();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video2.play();
    video2.volume(1);
  } else if (answer === "3") {
    video1.hide().stop();
    video2.hide().stop();
    video3.show();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video3.play();
    video3.volume(1);
  } else if (answer === "4") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.show();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video4.play();
    video4.volume(1);
  } else if (answer === "5") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.show();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video5.play();
    video5.volume(1);
  } else if (answer === "6") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.show();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video6.play();
    video6.volume(1);
  } else if (answer === "7") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.show();
    video8.hide().stop();
    video9.hide().stop();
    video10.hide().stop();
    video7.play();
    video7.volume(1);
  } else if (answer === "8") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.show();
    video9.hide().stop();
    video10.hide().stop();
    video8.play();
    video8.volume(1);
  } else if (answer === "9") {
    video1.hide().stop();
    video2.hide().stop();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.show();
    video10.hide().stop();
    video9.play();
    video9.volume(1);
  } else if (answer === "10") {
    video10.show();
    video2.hide();
    video3.hide().stop();
    video4.hide().stop();
    video5.hide().stop();
    video6.hide().stop();
    video7.hide().stop();
    video8.hide().stop();
    video9.hide().stop();
    video1.hide().stop();
    video10.play();
    video10.volume(1);
  }
}

function startListening() {
  mic.start();
  myRec.start();
  listening = true;
  myRec.onResult = answerMe;
}

function answerMe() {
  let inputStr = myRec.resultString;
  inputStr = inputStr.toLowerCase();
  console.log(inputStr);

  loop1: for (let i = 0; i < brain.chatbot.length; i++) {
    loop2: for (let j = 0; j < brain.chatbot[i].triggers.length; j++) {
      if (inputStr.indexOf(brain.chatbot[i].triggers[j]) !== -1) {
        answer = random(brain.chatbot[i].answers);

        break loop1;
      } else {
        answer = random(brain.catchall);
      }
    }
  }
  listening = false;
}
