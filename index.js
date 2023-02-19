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

// import A11yDialog from 'a11y-dialog';
// import A11yDialog from 'a11y-dialog';

// Can always use a cdn instead.. 

import 'a11y-dialog';

//getting error with this import statement: 'cannot use import statement outside of a module'

// added a bundler  - webpack - per recommendations on a11y-dialog instructions page. 
// in order for the bundler to work, created a 'build' script ("build": "webpack") to be run in the command line (npm run build)
// this script will ideally run the webpack and hopefully integrate the a11y-dialog module with index.js and resolve the 'cannot use import statement outside of a module' error from the above import statement. 


// functionally, the build script compiles what is in the index.js file and outputs its own 'main.js' file, which will ultimately be the one holding our 'final' js script..

// which means the index.html needs to reference that main.js file instead of the index.js

// ERROR: When I attempted npm run build (running the script), I got an error. 





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




