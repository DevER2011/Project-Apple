
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = 0;
to_number = "";
draw_circle = "";

recognition.onresult = function(event){
  console.log(event);
  console.log("it worked");
  console.log("I VENTED");
  var content = event.results[0][0].transcript;
  
  document.getElementById("status").innerHTML = "Speech has been recognised as - " + content;
  if(content == "circle"){
  
  x = Math.floor(Math.random() *900);
  y = Math.floor(Math.random() *600);
  document.getElementById("status").innerHTML = "started drawing apple";
  draw_circle = "set";
  }
}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start(){
document.getElementById("status").innerHTML = "I am Listening, Please say Any number";
recognition.start()
}
function setup(){
  canvas = createCanvas(900, 600);
  }




