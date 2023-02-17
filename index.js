const body = document.querySelector('body');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const navList = document.querySelector('.nav__list'); /* <ul> */ 
const navBtn = document.querySelector('.nav__btn');
const navSVG = document.querySelector('.nav__svg');

// const previewerCont = document.querySelector('.previewer__container');
const previewerComp = document.querySelector('.previewer__component');
const resumeBtn = document.querySelector('.hero__resumeBtn');
const closeBtn = document.querySelector('.closeBtn');
const printBtn = document.querySelector('.printBtn');



const navListLinks = document.querySelectorAll('.nav__list__link') // All .nav__list__links
const pageLinks = document.querySelectorAll('a:not(.nav__list__link)'); // ALL <a> on page (NOT including NAV <a> <-- see above)
const btns = document.querySelectorAll('button:not(.nav__btn)');  // All <button> elements except the .nav__btn
/* dont want .nav__btn getting .mobileClickEffect settings class when clicked*/ 



// function for changing aria attb's while modal is open
const aria = function(){

    //make <main> inaccessible and <.previewer__container> accessible. 
    main.setAttribute('aria-hidden', 'true');
    previewerCont.setAttribute('aria-hidden', 'false');


// .hero__resumeBtn get an aria-expanded = "true"

// Upon clicking the closeBtn, the aria settings need to be put back to the way the html has them. 

// .hero__resumeBtn goes back to aria-expanded = "false". 
// .previewer__container's aria-hidden = "true"
}





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
    previewerComp.classList.add('displayPreviewer');/* <-- display:block class */

})

closeBtn.addEventListener('click', ()=>{
    previewerComp.classList.remove('displayPreviewer');
})






// using 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)


// Bootstrap Carousel 
// $('.carousel').carousel({});
// document.addEventListener("DOMContentLoaded", function(){
    
//   });



// $(function () {
//     $('.carousel').carousel({interval: 2000})
// })


 //................................. ACCESSIBILITY ................................//




