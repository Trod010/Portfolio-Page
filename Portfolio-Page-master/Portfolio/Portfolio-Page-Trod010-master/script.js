// basis for light and dark theme. It removes the light theme and adds in the dark after clicking the button.
document.querySelector('.js-change-theme').addEventListener('click', () => {
    const body = document.querySelector('body');
    
    if (body.classList.contains('t--light')) {
        body.classList.remove('t--light');
        body.classList.add('t--dark');
    }
    else {
        body.classList.remove('t--dark');
        body.classList.add('t--light');
    }
});
