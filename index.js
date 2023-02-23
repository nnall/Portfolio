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


// import {multiply} from './math.js';

// export function square(x) {
//   return multiply(x, x);
// }


// a11y-dialog does not import because js has no idea where 'a11y-dialog' is located.. even though it is installed in the package.json file.

// so i needed to add a 'bundler'.. webpack was too complicated, so I deleted and now have parcel. 




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



 //................................. ACCESSIBILITY ................................//

// start the 'parcel' dev server in terminal 


// import A11yDialog from 'a11y-dialog' /*<-- import */

// const container = document.querySelector('#my-dialog-container');
// const dialog = new A11yDialog(container);






// using 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)








