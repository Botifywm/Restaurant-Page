import "./styles.css"
import {containerHome} from "./home.js"
import {containerMenu} from "./menu.js"
import {containerAbout} from "./about.js"


const blankContent = document.querySelector('#content');
const homeNav = document.querySelector('.homeNav');
const menuNav = document.querySelector('.menuNav');
const aboutNav = document.querySelector('.aboutNav');

blankContent.appendChild(containerHome);

homeNav.addEventListener('click', ()=> {
    // blankContent.removeChild(blankContent.firstChild)
    blankContent.innerHTML = '';
    blankContent.appendChild(containerHome);
})

menuNav.addEventListener('click', ()=> {
    // blankContent.removeChild(blankContent.firstChild);
    blankContent.innerHTML = '';
    blankContent.appendChild(containerMenu);
})

aboutNav.addEventListener('click', ()=> {
    // blankContent.removeChild(blankContent.firstChild);
    blankContent.innerHTML = '';
    blankContent.appendChild(containerAbout);
})

