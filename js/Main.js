var song = document.getElementById("song");
var icon = document.getElementById("icon");


let i = 0;
const songs = [
    "./Songs/BoulevardofBrokenDreams.mp3",
    "./Songs/Heaven.mp3",
    "./Songs/Perfect.mp3",
    "./Songs/Bryan-Adams-Everything-I-Do-I-Do-It-For-You.mp3",
    "./Songs/NobodyButYou.mp3",
    "./Songs/ForeverAfterAll.mp3",
    "./Songs/DontSpeak.mp3",
    "./Songs/YouAreTheReason.mp3"];


icon.onclick = function(){
    if (song.paused) {
        song.src = songs[i];
        song.play();
        icon.src = "./images/pause.png";
    } else {
        song.pause();
        icon.src = "./images/play.png";
    }
}
nextButton.onclick = function (){
    song.pause();
    if(i==songs.length-1){
        i=-1;
    }
    i++;
    song.src = songs[i];
    icon.src = "./images/pause.png";
    song.play();
}

prevButton.onclick = function(){
    song.pause();
    i--;
    if(i==-1){
        i = songs.length-1;
    }
    song.src = songs[i];
    icon.src = "./images/pause.png";
    song.play();
}

function End(){
    i++;
    if(i>songs.length-1){
        i=0;
    }
    song.src = songs[i];
    song.play();
}

