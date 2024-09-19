import menu1 from "./images/menu1.jpg";
import menu2 from "./images/menu2.jpg";
import menu3 from "./images/menu3.jpg";
import menu4 from "./images/menu4.jpg";
import menu5 from "./images/menu5.jpg";
import menu6 from "./images/menu6.jpg";
import menu7 from "./images/menu7.jpg";
import menu8 from "./images/menu8.jpg";
import menu9 from "./images/menu9.jpg";


const containerMenu = document.createElement('div');
containerMenu.classList.add('container');

const chefMenu = document.createElement('div');
chefMenu.classList.add('chefMenu');
chefMenu.textContent = "Chef's Menu";
containerMenu.appendChild(chefMenu);

const allMenu = document.createElement('div');
allMenu.classList.add('allMenu');

const menuSrc = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9];
const menuTitle = [
    `King of Prawns with Lemon Sauce <p>$199</p>`, 
    `King of Lobster with Lemon Sauce <p>$299</p>`,
    `Fresh Seafood Roll <p>$99</p>`,
    `Cut Royal Dragon Prawn <p>$199</p>`, 
    `Oysters with Wasabi and Lemon <p>$199</p>`,
    `King of Seafood Platter <p>$399</p>`,
    `Royal Carribean <p>$199</p>`, 
    `Mediterrenean Platter <p>$299</p>`,
    `Scallops and Prawn <p>$199</p>`
]

menuSrc.forEach((src, index) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuDiv');
    const image = document.createElement('img');
    image.classList.add('menu');
    image.src = src;
    menuDiv.appendChild(image);
    const menuText = document.createElement('div');
    menuText.classList.add('menuText');
    menuText.innerHTML = menuTitle[index];
    menuDiv.appendChild(menuText);
    allMenu.appendChild(menuDiv);
})

containerMenu.appendChild(allMenu);

export {containerMenu};
