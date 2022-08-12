const songs = [
    {
        songname: "Llamame",
        path: "/Songs/Llamame.mp3",
        artist: "WRS"
    },
    {
        songname: "Waves",
        path: "/Songs/Waves.mp3",
        artist: "Mr. Probz"
    },
    {
        songname: "Boulevard of broken dreams",
        path: "/Songs/BoulevardOfBrokenDreams.mp3",
        artist: "Green Day"
    },
    {
        songname: "Heaven",
        path: "/Songs/Heaven.mp3",
        artist: "Bryan Adams"
    },
    {
        songname: "Perfect",
        path: "/Songs/Perfect.mp3",
        artist: "Ed Sheeran"
    },
    {
        songname: "Everything I do",
        path: "/Songs/EverythingIDo.mp3",
        artist: "Bryan Adams"
    },
    {
        songname: "Nobody but you",
        path: "/Songs/NobodyButYou.mp3",
        artist: "Blake Shelton"
    },
    {
        songname: "Forever after all",
        path: "/Songs/ForeverAfterAll.mp3",
        artist: "Luke Combs"
    },
    {
        songname: "Don't speak",
        path: "/Songs/DontSpeak.mp3",
        artist: "No Doubt"
    },
    {
        songname: "You are the reason",
        path: "/Songs/YouAreTheReason.mp3",
        artist: "Calum Scott"
    },
    {
        songname: "Animal",
        path: "/Songs/Animal.mp3",
        artist: "Alvaro Soler"
    },
    {
        songname: "ZITTI E BUONI",
        path: "/Songs/ZittiEBuoni.mp3",
        artist: "Maneskin"
    },
    {
        songname: "Every breath you take",
        path: "/Songs/EveryBreathYouTake.mp3",
        artist: "The Police"
    },
    {
        songname: "Breaking Me",
        path: "/Songs/BreakingMe.mp3",
        artist: "Topic ft. A7S"
    }
];


let song = document.getElementById("song");
song.src = songs[0].path;

let ul = document.getElementById('list');  // Parent

ul.addEventListener('click', function(e) {
    let id = e.target.id;
    song.src = songs[id].path;
    song.play();
});

for (let i = 0; i < songs.length; i++){
    let li = document.getElementById(`${i}`);

    li.innerHTML = songs[i].songname;
}


