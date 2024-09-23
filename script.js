var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = opennav;
closeBtn.onclick = closenav;

function opennav(){
    sidenav.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closenav(){
    sidenav.classList.remove("active");
    document.body.style.overflow = '';
}

window.addEventListener('scroll', function() {
    var portrait = document.querySelector('.portrait-show-on-scroll');
    var position = portrait.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        portrait.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    var textElement = document.querySelector('.presentation-show-on-scroll');
    var position = textElement.getBoundingClientRect();


    if (position.top < window.innerHeight && position.bottom >= 0) {
        textElement.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    var textElement = document.querySelector('.competences-show-on-scroll');
    var position = textElement.getBoundingClientRect();


    if (position.top < window.innerHeight && position.bottom >= 0) {
        textElement.classList.add('visible');
    }
});

window.addEventListener('scroll', function() {
    var textElement = document.querySelector('.mes-projets-show-on-scroll');
    var position = textElement.getBoundingClientRect();


    if (position.top < window.innerHeight && position.bottom >= 0) {
        textElement.classList.add('visible');
    }
});



