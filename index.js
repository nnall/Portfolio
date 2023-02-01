const nav = document.querySelector('nav');


 const navBtn = document.querySelector('.nav__btn');



 navBtn.addEventListener('click', function(){

    nav.classList.contains('displayNav') ? 
    nav.classList.remove('displayNav'):
    nav.classList.add('displayNav')
 })



//  nav <li> 