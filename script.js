// =========================
// Birthday Website Script
// =========================

const music = document.getElementById("music");
const pages = document.querySelectorAll(".page");
const slides = document.querySelectorAll(".slide");
const typing = document.getElementById("typing");

let currentSlide = 0;
let typingIndex = 0;

// Password
function checkName(){

    const name = document.getElementById("nameInput").value.trim().toLowerCase();

    if(name === "alishba"){

        document.getElementById("lockScreen").style.display = "none";

    }else{

        document.getElementById("error").innerHTML =
        "❤️ Ye surprise sirf Alishba ke liye hai.";

    }

}

// Open Surprise
function startSurprise(){

    music.play().catch(()=>{});

    pages.forEach(page=>page.classList.remove("active"));

    pages[1].classList.add("active");

    startSlider();

}

// Next Page
function nextPage(page){

    pages.forEach(pageItem=>pageItem.classList.remove("active"));

    pages[page-1].classList.add("active");

    if(page===3){

        startTyping();

    }

    if(page===4){

        startFireworks();

    }

}

// Slider
function startSlider(){

    setInterval(()=>{

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide>=slides.length){

            currentSlide=0;

        }

        slides[currentSlide].classList.add("active");

    },2500);

}

// Letter
const message = `Dear Alishba ❤️

Happy 15th Birthday!

May Allah always keep you smiling.

Thank you for being such an amazing person.

I wish all your dreams come true.

Stay Happy.
Stay Beautiful.

Forever,
Ayaan ❤️`;

function startTyping(){

typing.innerHTML="";

typingIndex=0;

const timer=setInterval(()=>{

typing.innerHTML+=message.charAt(typingIndex);

typingIndex++;

if(typingIndex>=message.length){

clearInterval(timer);

}

},40);

}
// =========================
// Floating Hearts
// =========================

const hearts = document.querySelector(".hearts");

for(let i=0;i<80;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.animationDelay=Math.random()*5+"s";

    heart.style.fontSize=(14+Math.random()*18)+"px";

    hearts.appendChild(heart);

}

// =========================
// Gift Surprise
// =========================

const gift=document.querySelector(".gift");

gift.addEventListener("click",()=>{

    gift.innerHTML="💖";

    alert(
`🎉 Happy 15th Birthday Alishba ❤️

May your life always be full of happiness,
smiles and success.

Forever,
Ayaan ❤️`
);

});

// =========================
// Fireworks
// =========================

function startFireworks(){

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function create(){

for(let i=0;i<8;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height/2,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:70

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

create();

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle="#ff8ecf";

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

}

// =========================
// Window Resize
// =========================

window.addEventListener("resize",()=>{

const canvas=document.getElementById("fireworks");

if(canvas){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

});

// =========================
// End
// =========================
