// preloader
let myVar;
function myFunction() {
  myVar = setTimeout(showPage,1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("very-specific-design").style.display = "block";
}
// listen audio
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
// modal letter d
// get the modal
var modalD = document.getElementById("myModalD");
// Get the button that opens the modal
var letterD = document.getElementById("letterD");
// Get the <span> element that closes the modal
var spanD = document.getElementById("closeD");
// When the user clicks the button, open the modal 
letterD.onclick = function() {
  modalD.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
 function closeD() {
  modalD.style.display = "none";
  d.pause();
  d.currentTime = 0;
}

// play audio d
var d = document.getElementById("audioD"); 

function playAudioD() { 
  d.play(); 
} 
// modal letter m
// get the modal
var modalM = document.getElementById("myModalM");
// Get the button that opens the modal
var letterM = document.getElementById("letterM");
// Get the <span> element that closes the modal
var spanM = document.getElementById("closeM");
// When the user clicks the button, open the modal 
letterM.onclick = function() {
  modalM.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
function closeM() {
  modalM.style.display = "none";
  M.pause();
  M.currentTime = 0;
}
// play audio M
var M = document.getElementById("audioM"); 

function playAudioM() { 
  M.play(); 
} 
// modal letter I
// get the modal
var modalI = document.getElementById("myModalI");
// Get the button that opens the modal
var letterI = document.getElementById("letterI");
// Get the <span> element that closes the modal
var spanI = document.getElementById("closeI");
// When the user clicks the button, open the modal 
letterI.onclick = function() {
  modalI.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
 function closeI() {
  modalI.style.display = "none";
  I.pause();
  I.currentTime = 0;
}
// play audio M
var I = document.getElementById("audioI"); 

function playAudioI() { 
  I.play(); 
} 
// modal letter N
// get the modal
var modalN = document.getElementById("myModalN");
// Get the button that opens the modal
var letterN = document.getElementById("letterN");
// Get the <span> element that closes the modal
var spanN = document.getElementById("closeN");
// When the user clicks the button, open the modal 
letterN.onclick = function() {
  modalN.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
function closeN() {
  modalN.style.display = "none";
  N.pause();
  N.currentTime = 0;
}
// play audio M
var N = document.getElementById("audioN"); 

function playAudioN() { 
  N.play(); 
}
// GET TO N
function getN(){
  modalN.style.display = "block";
  modalN.classList.add("slide")
  closeD();
  closeI();
  closeM();

}
// GET TO I
function getI(){
  modalI.style.display = "block";
  closeD();
  closeN();
  closeM();
}
// GET TO D
function getD(){
  modalD.style.display = "block";
  closeI();
  closeN();
  closeM();
}
// GET TO M
function getM(){
  modalM.style.display = "block";
  closeD();
  closeN();
  closeI();
}
// audio play
var $seekbar = document.getElementById("$seekbar");
var $audio = document.getElementById("$audio");
var $pause = document.getElementById("$pause");
var $play = document.getElementById("$play");

// Set max value when you know the duration
$audio.onloadedmetadata = () => $seekbar.max = $audio.duration
// update audio position
$seekbar.onchange = () => $audio.currentTime = $seekbar.value
// update range input when currentTime updates
$audio.ontimeupdate = () => $seekbar.value = $audio.currentTime
function playAudioAll(){
  $audio.play();
  play.style.display = "none";
  pause.style.display = "inline-block"; 
}
// to pause video
function pauseaudio(){
  $audio.pause();
  play.style.display = "inline-block";
  pause.style.display = "none"; 

}
// reload
function reload(){
  $seekbar.value="0";
  $audio.pause();
  $audio.currentTime=0;
  play.style.display = "inline-block";
  pause.style.display = "none"; 
}
// for responsive
function resize()
{
    var heights = window.innerHeight;
    console.log(heights)
    document.getElementById("very-specific-design").style.height = parseInt(heights) + "px";
}
window.onresize = function() {
    resize();
};









  