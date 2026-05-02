'use strict';

const navLinks = document.querySelectorAll( 'header nav a' );
const logoLink = document.querySelector( '.logo' );
const sections = document.querySelectorAll( 'section' );

const activePage = () =>
{
  const header = document.querySelector( 'header' );
  const barsBox = document.querySelector( '.bars_box' );

  header.classList.remove( 'active' );
  setTimeout( () =>
  {
    header.classList.add( 'active' );
  }, 1100 );

  navLinks.forEach( link =>
  { 
    link.classList.remove( 'active' );
  } );

  barsBox.classList.remove( 'active' );
  setTimeout( () =>
  {
    barsBox.classList.add( 'active' );
  }, 1100 );

  sections.forEach( section =>
  {
    section.classList.remove( 'active' );
  } );
};

navLinks.forEach( ( link, idx ) =>
{ 
  link.addEventListener( 'click', () =>
  { 
    if ( !link.classList.contains( 'active' ) )
    {
      activePage();

      link.classList.add( 'active' );

      setTimeout( () =>
      { 
        sections[idx].classList.add( 'active' );
      } , 1100 );
    }
  } );
} );


logoLink.addEventListener( 'click', () =>
{ 
  if ( !navLinks[0].classList.contains( 'active' ) )
  {
    activePage();
    navLinks[0].classList.add( 'active' );
    setTimeout( () =>
    {
      sections[0].classList.add( 'active' );
    }, 1100 );
  }
} );

const roles = [
    "Junior Frontend Developer",
    "UI Designer & Frontend Developer",
    "Web Developer",
  "UI-Focused Frontend Developer",
    "UI/UX Developer ",

];

const roleEl = document.querySelector(".role");
let i = roles.indexOf(roleEl.dataset.text);
if (i < 0) i = 0;

const cycleMs = 4000;

setInterval(() => {
  i = (i + 1) % roles.length;
  roleEl.textContent = roles[i];
  roleEl.dataset.text = roles[i];
}, cycleMs);


const root = document.documentElement;
const buttons = document.querySelectorAll(".accent_btn");
const STORAGE_KEY = "accentColour";

function setAccent(colour){
  root.style.setProperty("--main-colour", colour);
  localStorage.setItem(STORAGE_KEY, colour);

  buttons.forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.accent === colour);
  });
}

// Load saved accent (or default)
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) setAccent(saved);
else {
  // mark the first as active by default (optional)
  const first = buttons[0]?.dataset.accent;
  if (first) setAccent(first);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => setAccent(btn.dataset.accent));
} );


document.querySelectorAll(".services_box").forEach(card => {
  const btn = card.querySelector(".more");
  const more = card.querySelector(".service_more");
  if (!btn || !more) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    more.hidden = isOpen;
  });
} );


const resumeBtns = document.querySelectorAll( '.resume_btn' );

resumeBtns.forEach( ( btn, idx ) =>
{ 
  btn.addEventListener( 'click', () =>
  {
    const resumeDetails = document.querySelectorAll( '.resume_details' );
    resumeBtns.forEach( btn =>
    {
      btn.classList.remove( 'active' );
    } )
    btn.classList.add( 'active' );
    resumeDetails.forEach( detail =>
    {
      detail.classList.remove( ( 'active' ) );
    } )
    resumeDetails[idx].classList.add( 'active' );
  } );
} ); 


const arrowRight = document.querySelector( '.portfolio_box .navigation .arrow_right' );
const arrowLeft = document.querySelector( '.portfolio_box .navigation .arrow_left' );

let index = 0;

const activePortfolio = () =>
{ 
  const imgSlide = document.querySelector( ' .portfolio_carousel .img_slide' );
  const portfolioDetails = document.querySelectorAll( '.portfolio_details' );

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
  portfolioDetails.forEach( detail =>
  {
    detail.classList.remove( 'active' );
  } )
  portfolioDetails[index].classList.add( 'active' );
};

arrowRight.addEventListener( 'click', () =>
{ 
  if ( index < 4 )
  {
    index++;
    arrowLeft.classList.remove( 'disabled' );
  }
  else
  {
    index = 5;
    arrowRight.classList.add( 'disabled' );
  }

  activePortfolio();
} );

arrowLeft.addEventListener( 'click', () =>
{ 
  if ( index > 1 )
  {
    index--;
    arrowRight.classList.remove( 'disabled' );
  }
  else
  {
    index = 0;
    arrowLeft.classList.add( 'disabled' );
  }

  activePortfolio();
} );

function sendEmail(){
  // Implementation for sending email
  const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    const serviceID = "service_fuqtuzb";
    const templateID = "template_aph6lwn";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log("Email sent:", res);

        contactForm.reset();

        // alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Message failed. Check the console.");
      });
  });
}
}

