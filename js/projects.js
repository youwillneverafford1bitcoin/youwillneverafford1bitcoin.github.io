const music = document.querySelectorAll(".wow");
const texts = document.querySelectorAll("p, li, h1");
const page = document.querySelectorAll("marquee");
const mp3 = document.querySelector("audio");
let playCount = 0;

const consoleMessage= "HELLO VISITOR, nice of you to check out my code. i have more projects so feel free to send me an email about it";
//got the following ASCII art from https://fsymbols.com/text-art/iphone/hands/
const consoleArt = `_______                                       
______$$$$$
_____$$___$$
_____$$___$$
_____$$___$$
_____$$___$$
_____$$___$$
_____$$___$$$$$$
_____$$___$$___$$$$$$
_____$$___$$___$$___$$$$
_____$$___$$___$$___$__$$
$$$$$_$$___$$___$$__$$___$
$$____$$$____________$____$
$$____$$__________________$
$$___$$___________________$
_$$__$$___________________$
__$$______________________$
___$$___________________$$$
____$$$_________________$$
_____$$_________________$$
_____$$$_______________$$
_______$$_____________$$
_______$$$$$$$$$$$$$$$$$
_______$$$$$$$$$$$$$$$$$ `;


console.log(consoleMessage);
console.log(consoleArt);

mp3.onplay = () => {
    document.body.style.background = "black";
    document.getElementById("marqueee").stop();
    //put that^ there because w/o it and only using .start(), when the user pauses the mp3 and plays it again, the marquee speeds up
    document.getElementById("marqueee").start();
    document.getElementById("song-stat").innerHTML = "<mark>RADIO'S PLAYING, SPRINGSTEEN BLASTING</mark>";

    for (const player of music) player.style.visibility = "visible";

    for (const text of texts) text.style.color = "white";
    
    for (const title of page) title.style.color = "yellow";
};

mp3.addEventListener('ended', function(){
    if(playCount < 1){
        mp3.pause();
        mp3.src= "./assets/audio/there-will-be-fireworks--off-with-their-heads.mp3";
        console.log("FUARKKKKKK LEZ GOOOO ROCK N ROLL")
        document.getElementById("song-stat").innerHTML = "<mark>it's ROCK AND ROLL time baby</mar>";
        mp3.load();
        mp3.play();
        playCount++;
    }
});
