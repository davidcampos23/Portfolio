// Escrever Text --------------------------------------------------------------
function ativarTitulo(element, textToWrite) {
    const typingSpeed = 75;
    const deletingSpeed = 50;

    let currentIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textToWrite[currentIndex];
        
        if (isDeleting) {
            element.textContent = currentText.slice(0, element.textContent.length - 1);
        } else {
            element.textContent = currentText.slice(0, element.textContent.length + 1);
        }

        if (!isDeleting && element.textContent === currentText) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && element.textContent === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % textToWrite.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();
}

const titulo = document.querySelector('#digitando');
ativarTitulo(titulo, ["Full-Stack Developer", "Game Developer"]);




// Hidden NavBar ----------------------------------------------------------------
const nav = document.querySelector('#navbar');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY && !navClicked){
        nav.classList.add("nav--hidden");
    }
    else{
        nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
});

let navClicked = false;

// Navbar color Section --------------------------------------------------------------
addEventListener("scroll", () =>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar a');

    const windowCenter = window.innerHeight / 2; // Centro da janela de visualização

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        if (sectionTop <= windowCenter && sectionBottom >= windowCenter) {
            navLinks.forEach(link => {
                link.style.color = 'black'; // Resetar as cores dos links
            });

            // Define a cor do link da navbar correspondente à seção atual
            navLinks[index].style.color = '#FFB3B3'; // Altere para a cor desejada
        }
    });
});


// NavBar Hover links -----------------------------------------------------------------------
const navItens = document.querySelectorAll('#navbar a');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    navClicked = true;
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 100;
    nativeScroll(distanceFromTheTop);

    setTimeout(() => {
        navClicked = false;
    }, 800);
}

navItens.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

const ativarMenu = document.getElementById("buttonMenu");
const navMenu = document.getElementById("navegacao")

ativarMenu.addEventListener('click', () => {
    navMenu.classList.toggle('ativado')
});