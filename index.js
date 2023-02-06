const body = document.querySelector('body');


const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__list__link');
const navBtn = document.querySelector('.nav__btn');
const navSVG = document.querySelector('.nav__svg')
const heroBtns = document.querySelectorAll('.hero__btn');





// Open/Close Nav menu w/.nav__btn  KEEP THIS LEAVE THIS ALONE - OPENS AND CLOSES NAV MENU
navBtn.addEventListener('click', function(){

    navList.classList.contains('displayNav') ? 
    navList.classList.remove('displayNav'):
    navList.classList.add('displayNav')
 })


// On and off-click effects for mobile nav links, & hero btns

// USe a resize() funciton? to check page width and apply mobileOnCLick as a callback function?

// 

// use 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (laptops not until ~2300px)



// function applying add eventListeners
const mobileOnClick = function(){

    // first test whether viewport is below a certain vw. 


    if(body.clientWidth < 1300){
        navLinks.forEach((link)=>{
            link.addEventListener('ontouchstart', function(){
                link.classList.add('mobileClickEffect')
            });
            link.addEventListener('ontouchend', function(){
                link.classList.remove('mobileClickEffect');
            });
        })
    
        heroBtns.forEach((btn)=>{
            btn.addEventListener('ontouchstart', function(){
                btn.classList.add('mobileClickEffect')
            });
            btn.addEventListener('ontouchend', function(){
                btn.classList.remove('mobileClickEffect')
            });
        })
    }

}


mobileOnClick();




// at that exact breakpoint, there'll be a mediaquery changing applying the hover and :active states in lieu of these .onclick settings. 




// still need to know how to have these scale hovering/clicking effects for desktop but possibly not for mobile?


// put these navBtn addEventListeners in a parent function, which is only run once viewport is past a certain width?

// Mean you'd need to also run a function to remove the listeners (simple, navBtn.style.transform = "unset") when viewport goes back below that width, they'd otherwise stay attached (right?)




