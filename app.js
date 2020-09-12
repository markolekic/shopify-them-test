let counter = document.getElementById('counter')
counter.addEventListener('DOMContentLoaded', onLoad);

let count = 18000;
let interval;

function onLoad() {
    interval = setInterval(() => {
        count ++;
        counter.textContent = count;
    }, 1000)
};

onLoad();

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('.nav-list')[0];

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('asctive')
})