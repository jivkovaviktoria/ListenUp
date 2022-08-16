const songs = [
    {
        songname: "Llamame",
        path: "/Songs/Llamame.mp3",
        artist: "WRS",
        photo: "../images/llamame.webp"
    },
    {
        songname: "Waves",
        path: "/Songs/Waves.mp3",
        artist: "Mr. Probz",
        photo: "../images/waves.jpg"
    },
    {
        songname: "Boulevard of broken dreams",
        path: "/Songs/BoulevardOfBrokenDreams.mp3",
        artist: "Green Day",
        photo: "../images/boulevardOfBrokenDreams.jpg"
    },
    {
        songname: "Heaven",
        path: "/Songs/Heaven.mp3",
        artist: "Bryan Adams",
        photo: "../images/heaven.jpg"
    },
    {
        songname: "Perfect",
        path: "/Songs/Perfect.mp3",
        artist: "Ed Sheeran",
        photo: "../images/perfect.jpg"
    },
    {
        songname: "Everything I do",
        path: "/Songs/EverythingIDo.mp3",
        artist: "Bryan Adams",
        photo: "../images/everythingIdo.jpg"
    },
    {
        songname: "Nobody but you",
        path: "/Songs/NobodyButYou.mp3",
        artist: "Blake Shelton",
        photo: "../images/nobodyButYou.jpg"
    },
    {
        songname: "Forever after all",
        path: "/Songs/ForeverAfterAll.mp3",
        artist: "Luke Combs",
        photo: "../images/foreverAfterALl.jpg"
    },
    {
        songname: "Don't speak",
        path: "/Songs/DontSpeak.mp3",
        artist: "No Doubt",
        photo: "../images/dontSPeak.jpg"
    },
    {
        songname: "You are the reason",
        path: "/Songs/YouAreTheReason.mp3",
        artist: "Calum Scott",
        photo: "../images/youAreTheReason.jpg"
    },
    {
        songname: "Animal",
        path: "/Songs/Animal.mp3",
        artist: "Alvaro Soler",
        photo: "../images/animal.jpg"
    },
    {
        songname: "ZITTI E BUONI",
        path: "/Songs/ZittiEBuoni.mp3",
        artist: "Maneskin",
        photo: "../images/zittiebuoni.jpg"
    },
    {
        songname: "Every breath you take",
        path: "/Songs/EveryBreathYouTake.mp3",
        artist: "The Police",
        photo: "../images/everyBreathYouTake.jpg"
    },
    {
        songname: "Breaking Me",
        path: "/Songs/BreakingMe.mp3",
        artist: "Topic ft. A7S",
        photo: "../images/breakingMe.png"
    }
];


let song = document.getElementById("song");

let ul = document.getElementById('list');  // Parent



for (let i = 0; i < songs.length; i++){

    let li = document.getElementById(`${i}`);
    let image = document.createElement('img');
    image.id = songs[i].songname;
    image.classList.add("songimage");
    li.innerHTML = songs[i].songname;

    image.src = songs[i].photo;

    li.appendChild(image);
}

ul.addEventListener('click', function(e) {

    let id = e.target.id;
    song.src = songs[id].path;
    song.play();

    if(document.querySelector('.animate') !== null){
        document.querySelector('.animate').classList.remove("animate");
    }

    let songImage = document.getElementById(songs[id].songname);
    songImage.classList.add("animate");

});

