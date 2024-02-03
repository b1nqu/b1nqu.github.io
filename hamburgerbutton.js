const topnavmobile = document.querySelector('#topnav-mobile');
const hamburger = document.querySelector('#hamburger');

// On page load

function handleResize() {}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize); 

hamburger.addEventListener('click', () => {
  topnavmobile.classList.toggle('show'); 
});

// Close on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    topnavmobile.classList.remove('show');
  }
});
