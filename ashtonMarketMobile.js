const hamburger = document.querySelector ('header .nav-hamburger .hamburger');
const nav = document.querySelector ('header .nav-hamburger nav');
hamburger.addEventListener('click',  ()=> {
    nav.classList.toggle('nav-toggle');
    hamburger.classList.toggle('close');
});





/* const hamburger is the variable, then have to select the devlopment and write class name('header .nav-hamburger .hamburger') which then has to be followed by a document selector which will select the class.
The same is applied to the nav variable.

Then add event listener. As the first argument we have to pass the name of the event, which is 'click' in this case, then pass the function arrow(=>).

The property class list ('nav-toggle') allows the user to click the icon, which then will be transferred to the X symbol and clicking it again, the icon will be turned into it's default state.In order to make the effect on CSS , the transition will be added to the line class to smooth the animation.
s
refrence:
https://www.youtube.com/watch?v=BN6fH1nRDxA
*/