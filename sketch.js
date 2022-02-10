let backgroundImage;
let brain;
let question;
let bttn;
let answer = "Welcome to my world of sports";
function preload() {
  brain = loadJSON("chatbotBrain.json");
  backgroundImage = loadImage(
    "https://images.neobookings.com/cms/rafanadalacademy.com/section/el-real-madrid-se-exhibe-en-el-rafa-nadal-museum-experience/pics/el-real-madrid-se-exhibe-en-el-rafa-nadal-museum-experience-6ze3jr7lxp.jpeg"
  );
}
function setup() {
  createCanvas(400, 400);

  question = createInput();
  question.position((width * 2.8) / 5, 170);

  bttn = createButton("Send here!");
  bttn.position((width * 5) / 6, 195);
  bttn.mousePressed(ask);
}

function ask() {
  let questionStr = question.value().toLowerCase();
  console.log(questionStr);

  loop1: for (let i = 0; i < brain.chatbot.length; i++) {
    loop2: for (let j = 0; j < brain.chatbot[i].triggers.length; j++) {
      if (questionStr.indexOf(brain.chatbot[i].triggers[j]) !== -1) {
        answer = random(brain.chatbot[i].answers);

        break loop1;
      } else {
        answer = random(brain.catchall);
      }
    }
  }
}
console.log(answer);
function draw() {
  background(120);
  fill(0);
  text(answer, 30, 120, width / 2, height / 2);
}
