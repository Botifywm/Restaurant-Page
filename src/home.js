import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
import menu4 from "./images/menu4.jpg";
import menu5 from "./images/menu5.jpg";
import menu6 from "./images/menu6.jpg";

import award1 from "./images/award1.png";
import award2 from "./images/award2.png";
import award3 from "./images/award3.png";
import award4 from "./images/award4.png";


const containerHome = document.createElement('div');
containerHome.classList.add('container');


const intro = document.createElement('div');
const chefSpecs = document.createElement('div');
const specialties = document.createElement('div');
const awardHeader = document.createElement('div');
const awards = document.createElement('div');

intro.setAttribute('id', 'intro');
intro.textContent = 
"Zeo's Kitchen is where it all started! This is where the sea meets the soul! Born from a passion for fresh seafood and coastal flavors, our restaurant offers a unique dining experience that celebrates the ocean’s bounty. At Zeo’s, we believe in sourcing the finest, freshest ingredients, prepared with care and creativity to bring you dishes that are both comforting and inspired. Founded by a team of food lovers and seasoned chefs, we set out to create a place where friends and family can gather over great food and even better memories. We are proud to be currently holding a two-starred michelin restaurant!";
containerHome.appendChild(intro);

chefSpecs.classList.add('chefSpecs')
chefSpecs.textContent = "Chefs' Specialties"
containerHome.appendChild(chefSpecs);

specialties.classList.add('specialties');

const menuSrc = [menu1, menu2, menu3, menu4, menu5, menu6];

menuSrc.forEach((src) => {
    const image_menu = document.createElement('img');
    image_menu.classList.add('menu');
    image_menu.src = src;
    specialties.appendChild(image_menu);
})
containerHome.appendChild(specialties)

awardHeader.classList.add("awardHeader");
awardHeader.textContent = "Featured Press & ACCOLADES";
containerHome.appendChild(awardHeader);

const awardsSrc = [award1, award2, award3, award4];
awardsSrc.forEach((src) => {
    const award = document.createElement('img');
    award.classList.add('award');
    award.src = src;
    awards.appendChild(award);
})
awards.classList.add('awards');
containerHome.appendChild(awards);

export {containerHome};