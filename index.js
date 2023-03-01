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

// Clicking outside of navList while it's open closes it
 body.addEventListener('click', function(e){
// as long as click is not on the nav__btn, nor is it on a nav__list__link, then we need to remove 'displayNav' class from the navList


    if(!e.target.classList.contains('nav__svg') && !e.target.classList.contains('nav__list__link')){
        // console.log('you did not click the nav button nor the nav link')

        if(navList.classList.contains('displayNav')){
            navList.classList.remove('displayNav');
            navBtn.setAttribute('aria-expanded', 'false')
        }
    } 

 });


//  OPENS/CLOSES PREVIEWER
resumeBtn.addEventListener('click', ()=>{
    previewerComp.classList.add('displayPreviewer');/* <-- display:block class */

})

closeBtn.addEventListener('click', ()=>{
    previewerComp.classList.remove('displayPreviewer');
})


// add event listener to the body, which has an 'if' for 'if' the previewerComp.classList.contains('displayPreviewer'), and if it does, remove it. and if not, return (ternary operator)

// the modal is supposed to have this 'click outside the mdoal to close it' funcitonality built in, as part of its 'data-a11y-dialog-hide' attribute. It may work, but bc the entire a11y-dialog modal has not yet been imported inot my javascript, I don't know for sure whether it works - its not working now, but I havent successfully imported it yet either. 




// body.addEventListener('click', function(e){
        
//     if(!e.classList)

//     if(previewerComp.classList.contains('displayPreviewer')){
//         previewerComp.classList.remove('displayPreviewer')
//     } else{
//         return;
//     }
     
    
// })




 //................................. ACCESSIBILITY ................................//


// using 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)


// 





