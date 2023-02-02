const nav = document.querySelector('nav');
const navBtn = document.querySelector('.nav__btn');


// Open/Close Nav menu w/.nav_btn

 navBtn.addEventListener('click', function(){

    nav.classList.contains('displayNav') ? 
    nav.classList.remove('displayNav'):
    nav.classList.add('displayNav')
 })



