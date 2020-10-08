const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    mobileNavContainer.classList.toggle('mobile-nav--active');
    menuToggle.classList.toggle('#menu-togle');
}
