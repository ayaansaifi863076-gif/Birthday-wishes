// ===== Elements =====
const music = document.getElementById("music");
const pages = document.querySelectorAll(".page");
const slides = document.querySelectorAll(".slide");
const typing = document.getElementById("typing");
const gift = document.querySelector(".gift");

let currentSlide = 0;

// ===== Birthday Letter =====
const message = `Dear Alishba ❤️

Happy 15th Birthday! 🎂

I hope your smile always stays beautiful.

May Allah bless you with happiness,
success and endless smiles.

Thank you for being an amazing friend.

Keep smiling...
Keep shining...

Happy Birthday Once Again ❤️

Forever,
Ayaan ❤️`;


// ===== Start Website =====
function startSurprise(){

    music.play().catch(()=>{});

    pages[0].classList.remove("active");
    pages[1].classList.add("active");

    startSlider();

}


// ===== Next Page =====
function nextPage(page){

    pages.forEach(p=>p.classList.remove("active"));

    pages[page-1].classList.add("active");

    if(page===3){
        typeWriter();
    }

    if(page===4){
        startFireworks();
    }

}


// ===== Photo Slider =====
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


// ===== Typewriter =====
let index = 0;

function typeWriter(){

    typing.innerHTML="";

    let timer = setInterval(()=>{

        typing.innerHTML += message.charAt(index);

        index++;

        if(index>=message.length){

            clearInterval(timer);

        }

    },40);

}


// ===== Floating Hearts =====
const hearts = document.querySelector(".hearts");

for(let i=0;i<80;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDelay=Math.random()*5+"s";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    hearts.appendChild(heart);

}


// ===== Gift Surprise =====
gift.addEventListener("click",()=>{

    gift.innerHTML="💖";

    alert("Happy 15th Birthday Alishba ❤️\n\nFrom Ayaan 💖");

});


// ===== Fireworks =====
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

                life:60

            });

        }

    }

    function animate(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        create();

        particles.forEach((p,i)=>{

            p.x+=p.dx;

            p.y+=p.dy;

            p.life--;

            ctx.beginPath();

            ctx.arc(p.x,p.y,3,0,Math.PI*2);

            ctx.fillStyle="pink";

            ctx.fill();

            if(p.life<=0){

                particles.splice(i,1);

            }

        });

        requestAnimationFrame(animate);

    }

    animate();

}
