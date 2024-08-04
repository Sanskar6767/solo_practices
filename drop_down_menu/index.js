const button = document.querySelector('.hamburger');
button.addEventListener('click', togglemenu);

function togglemenu() {
    const menuin = document.querySelector('.menuin');
    menuin.classList.toggle('hidden');
    console.log("working");
}
