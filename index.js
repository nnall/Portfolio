const nav = document.querySelector('nav');
const navList = document.querySelector('.nav__list');



const navBtn = document.querySelector('.nav__btn');

const navSVG = document.querySelector('.nav__svg')

// Open/Close Nav menu w/.nav_btn

 navBtn.addEventListener('click', function(){

    navList.classList.contains('displayNav') ? 
    navList.classList.remove('displayNav'):
    navList.classList.add('displayNav')
 })



/*

//  Clicking the Nav button

 navBtn.addEventListener('mouseover', ()=>{
    navBtn.style.transform = "scale(1.1)"      //enlarge with hover
 })

 navBtn.addEventListener('mousedown', ()=>{
    navBtn.style.transform = "scale(.9)"        //shrink with down click
 })

 navBtn.addEventListener('mouseup', ()=>{
    navBtn.style.transform = "scale(1.1)"       //back to enlarge with unclick
 })

 navBtn.addEventListener('mouseout', ()=>{
    navBtn.style.transform = "scale(1)"            //back to normal mouse off
 })

*/

// still need to know how to have these scale hovering/clicking effects for desktop but possibly not for mobile?


// put these navBtn addEventListeners in a parent function, which is only run once viewport is past a certain width?

// Mean you'd need to also run a function to remove the listeners (simple, navBtn.style.transform = "unset") when viewport goes back below that width, they'd otherwise stay attached (right?)




