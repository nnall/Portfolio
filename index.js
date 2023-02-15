const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list'); /* <ul> */ 
const navBtn = document.querySelector('.nav__btn');
const navSVG = document.querySelector('.nav__svg');


const previewer = document.querySelector('.previewer__container');
const resumeBtn = document.querySelector('.hero__resumeBtn');
const closeBtn = document.querySelector('.closeBtn');
const printBtn = document.querySelector('.printBtn');



const navListLinks = document.querySelectorAll('.nav__list__link') // All .nav__list__links
const pageLinks = document.querySelectorAll('a:not(.nav__list__link)'); // ALL <a> on page (NOT including NAV <a> <-- see above)
const btns = document.querySelectorAll('button:not(.nav__btn)');  // All <button> elements except the .nav__btn
/* dont want .nav__btn getting .mobileClickEffect settings class when clicked*/ 





// OPENS AND CLOSES NAV MENU
navBtn.addEventListener('click', function(){
    
    if(navList.classList.contains('displayNav')){
        navList.classList.remove('displayNav');
        navBtn.setAttribute('aria-expanded', 'false')
    }  
    else{
        navList.classList.add('displayNav');
        navBtn.setAttribute('aria-expanded', 'true')
    }
 })


//  OPENS/CLOSES PREVIEWER
resumeBtn.addEventListener('click', ()=>{
    previewer.classList.add('displayPreviewer');
})

closeBtn.addEventListener('click', ()=>{
    previewer.classList.remove('displayPreviewer');
})






//////////////////////////////////////////////////////////


// using 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)


// Bootstrap Carousel 
// $('.carousel').carousel({});
// document.addEventListener("DOMContentLoaded", function(){
    
//   });



// $(function () {
//     $('.carousel').carousel({interval: 2000})
// })









