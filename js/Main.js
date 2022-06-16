var song = document.getElementById("song");
var icon = document.getElementById("icon");



icon.onclick = function(){
    if (song.paused) {
        song.play();
        icon.src = "./images/pause.png";
    } else {
        song.pause();
        icon.src = "./images/play.png";
    }
}
const songs = [
    "./Songs/Heaven.mp3",
    "./Songs/Perfect.mp3",
    "./Songs/Bryan-Adams-Everything-I-Do-I-Do-It-For-You.mp3",
    "./Songs/NobodyButYou.mp3",
    "./Songs/ForeverAfterAll.mp3",
    "./Songs/DontSpeak.mp3",
    "./Songs/YouAreTheReason.mp3"];

let i = 0;
nextButton.onclick = function (){
    song.pause();
    if(i>songs.length-1)
    {
        i=0
    }
    song.src = songs[0+i];
    i++;
    song.play();
}
/*nextButton.onclick = function (){
    song.pause();
    song.src = "./Songs/Bryan-Adams-Everything-I-Do-I-Do-It-For-You.mp3";
    icon.src = "./images/pause.png";
    song.play();
    index++;
}*/
