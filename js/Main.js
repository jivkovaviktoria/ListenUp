var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function (){
    if (song.paused) {
        song.play();
        icon.src = "../images/pause.png";
    } else {
        song.pause();
        icon.src = "../images/play.png";
    }
}
