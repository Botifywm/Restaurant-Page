

const containerAbout = document.createElement('div');
containerAbout.classList.add('containerAbout');

const location = document.createElement('div');
location.classList.add('location');

const locationsList = ['New York', 'China', 'Singapore'];

locationsList.forEach(loc => {
    const city = document.createElement('div');
    city.classList.add('city');
    city.textContent = loc;
    location.appendChild(city);
})

containerAbout.appendChild(location);

export {containerAbout};