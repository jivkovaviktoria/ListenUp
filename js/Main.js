var song = document.getElementById("song");
var icon = document.getElementById("icon");
var name = document.getElementById("name");

let i = 0;
const songs = [
    {
        songname: "Boulevard of broken dreams",
        path: "./Songs/BoulevardofBrokenDreams.mp3"
    },
    {
        songname: "Heaven",
        path: "./Songs/Heaven.mp3"
    },
    {
        songname: "Perfect",
        path: "./Songs/Perfect.mp3"
    },
    {
        songname: "Everything I do",
        path: "./Songs/Bryan-Adams-Everything-I-Do-I-Do-It-For-You.mp3"
    },
    {
        songname: "Nobody but you",
        path: "./Songs/NobodyButYou.mp3"
    },
    {
        songname: "Forever after all",
        path: "./Songs/NobodyButYou.mp3"
    },
    {
        songname: "Don't speak",
        path: "./Songs/DontSpeak.mp3"
    },
    {
        songname: "You are the reason",
        path: "./Songs/YouAreTheReason.mp3"
    },
];


icon.onclick = function(){
    if (song.paused) {
        song.src = songs[i].path;
        song.play();
        icon.src = "./images/pause.png";

    } else {
        song.pause();
        icon.src = "./images/play.png";
    }
    document.getElementById("name").innerHTML = songs[i].songname;
}
nextButton.onclick = function (){
    song.pause();
    if(i==songs.length-1){
        i=-1;
    }
    i++;
    song.src = songs[i].path;
    icon.src = "./images/pause.png";
    song.play();
    document.getElementById("name").innerHTML = songs[i].songname;
}

prevButton.onclick = function(){
    song.pause();
    i--;
    if(i==-1){
        i = songs.length-1;
    }
    song.src = songs[i].path;
    icon.src = "./images/pause.png";
    song.play();
    document.getElementById("name").innerHTML = songs[i].songname;
}

function End(){
    i++;
    if(i>songs.length-1){
        i=0;
    }
    song.src = songs[i].path;
    song.play();
    document.getElementById("name").innerHTML = songs[i].songname;
}


