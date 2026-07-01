/*==================================================
        MOBILE NAVIGATION
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

/* Close menu when clicking a navigation link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.querySelector("i").classList.remove("fa-times");
        menuBtn.querySelector("i").classList.add("fa-bars");

    });

});


/*==================================================
            DARK MODE
==================================================*/

const themeToggle = document.querySelector(".theme-toggle");

function enableDarkMode(){

    document.body.classList.add("dark");

    themeToggle.innerHTML =
    '<i class="fas fa-sun"></i>';

    localStorage.setItem("theme","dark");

}

function disableDarkMode(){

    document.body.classList.remove("dark");

    themeToggle.innerHTML =
    '<i class="fas fa-moon"></i>';

    localStorage.setItem("theme","light");

}

/* Load Saved Theme */

if(localStorage.getItem("theme")==="dark"){

    enableDarkMode();

}

/* Toggle Theme */

themeToggle.addEventListener("click",()=>{

    if(document.body.classList.contains("dark")){

        disableDarkMode();

    }
    else{

        enableDarkMode();

    }

});


/*==================================================
            TYPING ANIMATION
==================================================*/

const typingText = document.getElementById("typing");

const professions = [

"Software Development Engineer",

"Python Developer",

"Frontend Developer",

"Full Stack Developer",

"Machine Learning Enthusiast"

];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect(){

    const currentText = professions[professionIndex];

    if(!deleting){

        typingText.textContent =
        currentText.substring(0, characterIndex);

        characterIndex++;

        if(characterIndex > currentText.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent =
        currentText.substring(0, characterIndex);

        characterIndex--;

        if(characterIndex < 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();


/*==================================================
        SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
        NAVBAR SHADOW
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.18)";

        navbar.style.padding =
        "15px 35px";

    }

    else{

        navbar.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.08)";

        navbar.style.padding =
        "18px 35px";

    }

});


/*==================================================
        HERO BUTTON ANIMATION
==================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/*==================================================
        SOCIAL ICON EFFECT
==================================================*/

document.querySelectorAll(".social-icons a").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(360deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0deg)";

    });

});


/*==================================================
            END OF PART 3A
==================================================*/
/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
        ACTIVE NAVIGATION LINK
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const fadeElements = document.querySelectorAll(
".section, .card, .skill-card, .about-text"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < triggerBottom) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==================================================
        SKILL CARD ANIMATION
==================================================*/

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.08)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


/*==================================================
        PROJECT CARD EFFECT
==================================================*/

const projectCards = document.querySelectorAll("#projects .card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(37,99,235,.18),
        rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "";

    });

});


/*==================================================
        LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 1200);

    }

});


/*==================================================
        COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const current = Number(counter.innerText);

        const increment = target / 120;

        if (current < target) {

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(runCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    });

};

runCounter();


/*==================================================
        PARALLAX HERO EFFECT
==================================================*/

window.addEventListener("mousemove", (e) => {

    const image = document.querySelector(".hero-image img");

    if (!image) return;

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    image.style.transform =
    `translate(${x}px, ${y}px)`;

});


/*==================================================
        NAVBAR FADE
==================================================*/

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll &&
        currentScroll > 150) {

        navbar.style.top = "-100px";

    }

    else {

        navbar.style.top = "20px";

    }

    lastScroll = currentScroll;

});


/*==================================================
        RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background =
        "rgba(255,255,255,.4)";

        circle.style.left =
        e.offsetX - diameter / 2 + "px";

        circle.style.top =
        e.offsetY - diameter / 2 + "px";

        circle.style.pointerEvents = "none";

        circle.style.animation =
        "ripple .6s linear";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


/*==================================================
        CONSOLE MESSAGE
==================================================*/

console.log("%cWelcome to Kulasri's Portfolio",
"color:#2563eb;font-size:18px;font-weight:bold;");

console.log(
"Designed & Developed with ❤️ using HTML, CSS & JavaScript."
);

/*==================================================
        END OF PART 3B
==================================================*/
/*==================================================
        CONTACT FORM VALIDATION
==================================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]');
const email=this.querySelector('input[type="email"]');
const message=this.querySelector("textarea");

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.value.trim()===""){

showToast("Please enter your name.","error");
name.focus();
return;

}

if(!emailPattern.test(email.value.trim())){

showToast("Please enter a valid email.","error");
email.focus();
return;

}

if(message.value.trim().length<10){

showToast("Message should contain at least 10 characters.","error");
message.focus();
return;

}

showToast("Message Sent Successfully!","success");

this.reset();

});

}

/*==================================================
        TOAST NOTIFICATION
==================================================*/

function showToast(message,type){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

toast.style.position="fixed";
toast.style.right="30px";
toast.style.top="30px";
toast.style.padding="15px 25px";
toast.style.borderRadius="10px";
toast.style.fontWeight="600";
toast.style.color="#fff";
toast.style.zIndex="9999";
toast.style.transition=".4s";

if(type==="success"){

toast.style.background="#16a34a";

}else{

toast.style.background="#dc2626";

}

document.body.appendChild(toast);

setTimeout(()=>{

toast.style.opacity="0";
toast.style.transform="translateY(-20px)";

},2500);

setTimeout(()=>{

toast.remove();

},3000);

}

/*==================================================
        PROGRESS BAR ANIMATION
==================================================*/

const progressBars=document.querySelectorAll(".progress span");

const animateProgress=()=>{

progressBars.forEach(bar=>{

const value=bar.dataset.width;

const top=bar.getBoundingClientRect().top;

if(top<window.innerHeight-100){

bar.style.width=value;

}

});

};

window.addEventListener("scroll",animateProgress);

animateProgress();

/*==================================================
        CARD FADE STAGGER
==================================================*/

const allCards=document.querySelectorAll(".card");

allCards.forEach((card,index)=>{

card.style.transitionDelay=`${index*0.08}s`;

});

/*==================================================
        IMAGE LAZY EFFECT
==================================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";
img.style.transform="scale(.95)";

imageObserver.observe(img);

});

/*==================================================
        AUTO THEME
==================================================*/

if(localStorage.getItem("theme")==null){

const prefersDark=window.matchMedia("(prefers-color-scheme: dark)");

if(prefersDark.matches){

enableDarkMode();

}

}

/*==================================================
        CURRENT YEAR
==================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*==================================================
        BUTTON CLICK ANIMATION
==================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});

/*==================================================
        DISABLE RIGHT CLICK (OPTIONAL)
==================================================*/

// document.addEventListener("contextmenu",e=>e.preventDefault());

/*==================================================
        DISABLE DRAGGING IMAGES
==================================================*/

images.forEach(img=>{

img.setAttribute("draggable","false");

});

/*==================================================
        PERFORMANCE
==================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*==================================================
        PREVENT EMPTY LINKS
==================================================*/

document.querySelectorAll("a").forEach(link=>{

if(link.getAttribute("href")==="#"){

link.addEventListener("click",e=>{

e.preventDefault();

});

}

});

/*==================================================
        WELCOME MESSAGE
==================================================*/

setTimeout(()=>{

showToast("Welcome to Kulasri Durga Deepika Bora's Portfolio","success");

},800);

/*==================================================
        END OF SCRIPT
==================================================*/