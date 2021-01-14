const music = document.querySelector("audio");
const playBtn = document.getElementById("main-button");
const forwardBtn = document.getElementById("forward");
const backBtn = document.getElementById("backward");
const playicon = document.getElementById("playicon");
const image = document.getElementById("image");
const title = document.getElementById("track-name");
const artistname = document.getElementById("artist");



var songsinfo = [
    {
        "path" : "./audios/mai-ni-meriye.mp3",
        "Title" : "Mai Ni Meriye",
        "artist" : "Lost Stories",
        "image" : "./images/bg2.jpg",
    },
    {
        "path" : "./audios/Jadi Buti.mp3",
        "Title" : "Jadi Buti",
        "artist" : "Nucleya X Major Lazer",
        "image" : "./images/musicbg.jpg",
    },
    {
        "path" : "./audios/cradles.mp3",
        "Title" : "Cradles",
        "artist" : "Sub Urban",
        "image" : "./images/bg2.jpg",
    },
    {
        "path" : "./audios/sun-is-shining.mp3",
        "Title" : "Sun Is Shining",
        "artist" : "Axwell X Ingrosso",
        "image" : "./images/musicbg.jpg",
    },
    {
        "path" : "./audios/vaseegaraXzara-zara.mp3",
        "Title" : "Vaseegara X Zara Zara",
        "artist" : "Lost Stories",
        "image" : "./images/bg2.jpg",
    }
];

var isplaying = false;
var songnumber = 1;

playBtn.addEventListener('click' , () => {
    isplaying = !isplaying;
    isplaying ? playfunc() : pausefunc();
});

backBtn.addEventListener('click', () => {
    pausefunc();
    songnumber > 1 ? songnumber -= 1 : songnumber = songsinfo.length;
    title.textContent = songsinfo[songnumber-1].Title;
    artistname.textContent = songsinfo[songnumber-1].artist;
    music.src = songsinfo[songnumber-1].path;
    image.src = songsinfo[songnumber-1].image;
    playfunc();
});

forwardBtn.addEventListener('click', () => {
    pausefunc();
    songnumber < songsinfo.length ? songnumber += 1 : songnumber = 1;
    title.textContent = songsinfo[songnumber-1].Title;
    artistname.textContent = songsinfo[songnumber-1].artist;
    music.src = songsinfo[songnumber-1].path;
    image.src = songsinfo[songnumber-1].image;
    playfunc();
});

function playfunc() {
    music.play();
    playicon.className = "fas fa-pause";
    image.classList.add("animated");
};

function pausefunc() {
    music.pause();
    playicon.className = "fas fa-play";
    image.classList.remove("animated");
};