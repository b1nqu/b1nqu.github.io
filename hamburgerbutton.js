const topnav = document.querySelector('#topnav');
const hamburger = document.querySelector('#hamburger');

// On page load

function handleResize() {
  if (window.innerWidth <= 700) {
    topnav.classList.remove('show'); // hide menu if mobile
  } else {
    topnav.classList.add('show'); // show menu if desktop
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize); 

hamburger.addEventListener('click', () => {
  topnav.classList.toggle('show'); 
});

// Close on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    topnav.classList.remove('show');
  }
});
