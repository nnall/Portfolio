const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list');
const navBtn = document.querySelector('.nav__btn');
const navSVG = document.querySelector('.nav__svg');


// ALL <a> on page (including in ".nav__list")
const pageLinks = document.querySelectorAll('a');
// const pageLinks = document.querySelectorAll('a:not('nav)');


// All <button> elements except the .nav__btn
const btns = document.querySelectorAll('button:not(.nav__btn)');  /* dont want .nav__btn getting hover class  */ 


console.log(pageLinks);
console.log(btns);


// OPENS AND CLOSES NAV MENU
navBtn.addEventListener('click', function(){
    navList.classList.contains('displayNav') ? 
    navList.classList.remove('displayNav'):
    navList.classList.add('displayNav')
 })

//////////////////////////////////////////////////////////





// use 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)


// function applying add eventListeners for nav links click/touch down and up
const mobileOnClick = function(){

    if(body.clientWidth < 1300){    // first ensure the viewport is below a 1300 at loadup. 
         


        // all <a>
        pageLinks.forEach((link)=>{
            // touch/click DOWN (add class)
            link.addEventListener('ontouchstart', function(){
                link.classList.add('mobileClickEffect')
            });
            // touch/click UP (release) (remove class)
            link.addEventListener('ontouchend', function(){
                link.classList.remove('mobileClickEffect');
            });
        })

        // all <button>
        btns.forEach((btn)=>{
            // touch/click DOWN (add class)
            btn.addEventListener('ontouchstart', function(){
                btn.classList.add('mobileClickEffect')
            });
            // touch/click UP (release) (remove class)
            btn.addEventListener('ontouchend', function(){
                btn.classList.remove('mobileClickEffect')
            });
        })
    }

}


mobileOnClick();




// in CSS, @1300px MIN-width breakpoint, there'll be a mediaquery applying the hover and :active states applying similar styles to .mobileClickEffect class, but with hover state




// still need to know how to have these scale hovering/clicking effects for desktop but possibly not for mobile?


// put these navBtn addEventListeners in a parent function, which is only run once viewport is past a certain width?

// Mean you'd need to also run a function to remove the listeners (simple, navBtn.style.transform = "unset") when viewport goes back below that width, they'd otherwise stay attached (right?)




