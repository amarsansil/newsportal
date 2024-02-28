const openButton = document.getElementById('open-popup');
const openButton1 = document.getElementById('open-popup1');
const openButton2 = document.getElementById('open-popup3');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');
const animationSpeed = 300;
openButton.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.classList.add('fadeIn');
});
openButton1.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.classList.add('fadeIn');
});
openButton2.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.classList.add('fadeIn');
});
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('fadeIn');
        setTimeout(() => { popup.style.display = 'none'; }, animationSpeed);
    }
});
closeButton.addEventListener('click', () => {
    popup.classList.remove('fadeIn');
    setTimeout(() => { popup.style.display = 'none'; }, animationSpeed);
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.style.display !== 'none') {
        popup.classList.remove('fadeIn');
        setTimeout(() => { popup.style.display = 'none'; }, animationSpeed);
    }
});