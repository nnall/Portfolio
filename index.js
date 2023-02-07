const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list'); /* <ul> */ 
const navBtn = document.querySelector('.nav__btn');
const navSVG = document.querySelector('.nav__svg');

// All .nav__list__links
const navListLinks = document.querySelectorAll('.nav__list__link') 

// ALL <a> on page (NOT including NAV <a> <-- see above)
const pageLinks = document.querySelectorAll('a:not(.nav__list__link)');
// console.log(pageLinks);

// All <button> elements except the .nav__btn
const btns = document.querySelectorAll('button:not(.nav__btn)');  /* dont want .nav__btn getting .mobileClickEffect settings class when clicked*/ 

/*
console.log(pageLinks);
console.log(btns);
*/

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

//////////////////////////////////////////////////////////


// use 1300px 'desktop breakpoint bc just after the widest horizontal tablet width (smallest laptop widths start @ ~2300px)


// APPLY CLICK EVENT LISTENERS (FOR MOBILE 'CLICK' CLASS)
const mobileOnClick = function(){

    if(body.clientWidth < 1300){    // first ensure the viewport is below a 1300 at loadup. 
        
        const addRemoveLoop = function(linkArray){

            /*, {capture:false, passive:true}*/

            // .nav__list__links only
            if(linkArray == navListLinks){ /*<-- gets a different styling class (.navLinkEffect)*/
                console.log(linkArray)
                linkArray.forEach((link)=>{
                    // touch/click DOWN (add class)
                    link.addEventListener('touchstart', function(){
                        link.classList.add('navLinkEffect')
                    })
                    // touch/click UP (release) (remove class)
                    link.addEventListener('touchend', function(){
                        link.classList.remove('navLinkEffect');
                    });
                })
            } 
            
            // <button> and <a>
            else {
                console.log(linkArray)
                linkArray.forEach((link)=>{
                    // touch/click DOWN (add class)
                    link.addEventListener('touchstart', function(){
                        link.classList.add('mobileClickEffect')
                    });
                    // touch/click UP (release) (remove class)
                    link.addEventListener('touchend', function(){
                        link.classList.remove('mobileClickEffect');
                    });
                })
            }
        }
        
        // Adding touchstart/touchend event listeners to..

        //.nav__list__link <a> elements
        addRemoveLoop(navListLinks);

        //non-nav <a> elements
        addRemoveLoop(pageLinks);
    
        //<button> elements
        addRemoveLoop(btns); /*<--- this one's not working.. */
     
    }

}


mobileOnClick();




// in CSS, @1300px MIN-width breakpoint, there'll be a mediaquery applying the hover and :active states applying similar styles to .mobileClickEffect class, but with hover state






