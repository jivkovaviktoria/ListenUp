var song = document.getElementById("song");
var icon = document.getElementById("icon");
var name = document.getElementById("name");

let i = 0;
const songs = [
    {
        songname: "Boulevard of broken dreams",
        path: "./Songs/BoulevardOfBrokenDreams.mp3",
        artist: "Green Day"
    },
    {
        songname: "Heaven",
        path: "./Songs/Heaven.mp3",
        artist: "Bryan Adams"
    },
    {
        songname: "Perfect",
        path: "./Songs/Perfect.mp3",
        artist: "Ed Sheeran"
    },
    {
        songname: "Everything I do",
        path: "./Songs/Bryan-Adams-Everything-I-Do-I-Do-It-For-You.mp3",
        artist: "Bryan Adams"
    },
    {
        songname: "Nobody but you",
        path: "./Songs/NobodyButYou.mp3",
        artist: "Blake Shelton"
    },
    {
        songname: "Forever after all",
        path: "./Songs/ForeverAfterAll.mp3",
        artist: "Luke Combs"
    },
    {
        songname: "Don't speak",
        path: "./Songs/DontSpeak.mp3",
        artist: "No Doubt"
    },
    {
        songname: "You are the reason",
        path: "./Songs/YouAreTheReason.mp3",
        artist: "Calum Scott"
    },
    {
        songname: "Animal",
        path: "./Songs/Animal.mp3",
        artist: "Alvaro Soler"
    },
    {
        songname: "ZITTI E BUONI",
        path: "./Songs/ZittiEBuoni.mp3",
        artist: "Maneskin"
    },
    {
        songname: "Every breath you take",
        path: "./Songs/EveryBreathYouTake.mp3",
        artist: "The Police"
    },
    {
        songname: "Breaking Me",
        path: "./Songs/BreakingMe.mp3",
        artist: "Topic ft. A7S"
    }
];

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 39:
            nextButton.click();
            break;
        case 37:
            prevButton.click();
            break;
    }
});
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        icon.click();
    }
})
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
    document.getElementById("artist").innerHTML = songs[i].artist;
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
    document.getElementById("artist").innerHTML = songs[i].artist;
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
    document.getElementById("artist").innerHTML = songs[i].artist;
}

function End(){
    i++;
    if(i>songs.length-1){
        i=0;
    }
    song.src = songs[i].path;
    song.play();
    document.getElementById("name").innerHTML = songs[i].songname;
    document.getElementById("artist").innerHTML = songs[i].artist;
}


