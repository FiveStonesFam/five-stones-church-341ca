const path = require('path');

function jankMenu() {
    const aboutLink = document.querySelector('[href="/about/"]')
    const element = document.createElement('div');
          element.classList.add('blar');
          element.textContent
    aboutLink.appendChild(element)

}

module.exports = {
    jankMenu
};