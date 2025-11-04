//this is js file
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const videoBoxes = document.querySelectorAll('.project-vidbox');

videoBoxes.forEach(box => {
  const video = box.querySelector('video');
  const hoverSign = box.querySelector('.hover-sign');

  video.addEventListener("mouseover", function () {
    video.play().catch(err => console.log("Autoplay blocked:", err));
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});


// Sidebar elements //
if(menu) {
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});
}

if(closeIcon) {
closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
});
}


// Scroll reveal //
// Smooth scroll fallback for .scroll-down anchors
document.querySelectorAll('.scroll-down').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//popup form submission
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');

contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // prevent default form submission

    fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm)
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            popup.style.display = 'flex'; // show popup
            contactForm.reset();           // reset form
        } else {
            alert("Error sending message!");
        }
    })
    .catch(err => alert("Error sending message!"));
});

// Close popup function
function closePopup(){
    popup.style.display = 'none';
}






// Scroll reveal animations
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".skill .bar div");

  function animateBars() {
    bars.forEach(bar => {
      const percentage = bar.getAttribute("data-percent");
      const barTop = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (barTop < windowHeight - 50) {  
        bar.style.width = percentage;  // animate to percentage
      }
    });
  }

  window.addEventListener("scroll", animateBars);
  animateBars(); // run on load
});


