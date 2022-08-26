const path = require('path');

function jankMenu() {
    const aboutLink = document.querySelector('[href="/about/"]')
    const element = document.createElement('div');
          element.classList.add('blar');
    console.log(aboutLink)

}

module.exports = {
    jankMenu
};