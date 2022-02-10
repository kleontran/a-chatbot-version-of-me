let brain;
let question;
let bttn;
let answer = "Welcome to my world of sports";
function preload() {
  brain = loadJSON("chatbotBrain.json");
}
function setup() {
  createCanvas(800, 800);

  question = createInput();
  question.position(width / 3, 170);

  bttn = createButton("Send here!");
  bttn.position(width / 3, 200);
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
  fill(255, 255, 255);
  text(answer, width / 3, 120, width / 2, height / 2);
}
