const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list')
const navBtn = document.querySelector('.nav__btn');


// Open/Close Nav menu w/.nav_btn

 navBtn.addEventListener('click', function(){

    navList.classList.contains('displayNav') ? 
    navList.classList.remove('displayNav'):
    navList.classList.add('displayNav')
 })



