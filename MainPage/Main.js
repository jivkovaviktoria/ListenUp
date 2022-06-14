var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function (){
    if (song.paused) {
        song.play();
        icon.src = "/Sound%20webpage_img/pause.png";
    } else {
        song.pause();
        icon.src = "/Sound%20webpage_img/play.png";
    }
}
