/* NAVIGATION */

function showPage(id){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document.getElementById(id).classList.add("active");

}



/* PASSWORD */

const PASSWORD="19092024";

const lock=document.getElementById("lockScreen");

document.getElementById("unlockBtn").onclick=()=>{

if(document.getElementById("passwordInput").value===PASSWORD){

lock.style.display="none";

}else{

alert("Wrong password 💔");

}

};



/* MUSIC */

const music=document.getElementById("bgMusic");

document.getElementById("musicToggle").onclick=()=>{

music.paused?music.play():music.pause();

};



/* CLICK HEARTS */

document.body.addEventListener("click",e=>{

if(e.target.tagName==="BUTTON")return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);

});



/* FLOATING BACKGROUND HEARTS */

const bg=document.getElementById("hearts-bg");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="bg-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=4+Math.random()*4+"s";

bg.appendChild(heart);

setTimeout(()=>heart.remove(),8000);

},800);



/* CAROUSEL SCALE */

const track=document.querySelector(".carousel");

if(track){

track.addEventListener("scroll",scaleCards);
window.addEventListener("load",scaleCards);

}

function scaleCards(){

const center=track.scrollLeft+track.offsetWidth/2;

document.querySelectorAll(".image-card")
.forEach(card=>{

const cardCenter=card.offsetLeft+card.offsetWidth/2;

const dist=Math.abs(center-cardCenter);

const scale = Math.max(0.8, 1 - dist / 500);

card.style.transform=`scale(${scale})`;

});

}



/* SONG PLAYER */

const songPlayer = document.getElementById("songPlayer");
const songSource = document.getElementById("songSource");

document.querySelectorAll(".sticky-note")
.forEach(note => {

note.addEventListener("click", () => {

const song = note.dataset.song;

if(song){
music.pause();

songSource.src = song;

songPlayer.load();

songPlayer.play();

}

});

});



/* SONGS MESSAGE */

const songsBtn = document.getElementById("songsSurpriseBtn");
const songsMsg = document.getElementById("songsSurpriseMessage");

songsBtn.onclick = () => {

  songsMsg.classList.remove("hidden");

  setTimeout(()=>{
    songsMsg.classList.add("show");
  },50);

};



/* GIFT BOX */

const gift=document.getElementById("giftBox");

gift.onclick=()=>{

gift.classList.add("open");

document.getElementById("giftMessage")
.classList.remove("hidden");

};



