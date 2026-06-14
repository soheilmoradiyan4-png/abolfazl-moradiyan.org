let slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

slides[current]
.classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current]
.classList.add("active");

},3000);



let search =
document.getElementById("search");

search.addEventListener("keyup",()=>{

let value =
search.value.toLowerCase();

let songs =
document.querySelectorAll(".song");

songs.forEach(song=>{

let title =
song.querySelector("h3")
.innerText.toLowerCase();

song.style.display =
title.includes(value)
? "block"
: "none";

});

});



function downloadSong(btn,url){

let counter =
btn.parentElement
.querySelector("span");

counter.innerText =
parseInt(counter.innerText)+1;

let a =
document.createElement("a");

a.href = url;

a.download = "";

a.click();

}