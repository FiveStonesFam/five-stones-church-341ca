const path = require('path');

function blar() {
    const aboutLink = document.querySelector('[href="about"]')
    console.log( aboutLink )
}

module.exports = {
    blar
};