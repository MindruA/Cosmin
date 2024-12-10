const cameraFlash = document.querySelector('.camera-flash'); // Div-ul camera-flash
const flash = document.getElementById('fullscreen-flash');   // Elementul flash

// Eveniment de click pentru activarea flash-ului
cameraFlash.addEventListener('click', () => {
    flash.style.opacity = '1'; // Afișează flash-ul
    setTimeout(() => {
        flash.style.opacity = '0'; // Ascunde flash-ul după 200ms
    }, 200);
});

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const menuIcon = document.getElementById('menu-icon');
    const html = document.documentElement; // Selectăm elementul <html>

    if (sideMenu.classList.contains('open')) {
        // Închide meniul și reactivează scroll-ul
        sideMenu.classList.remove('open');
        menuIcon.classList.remove('open');
        html.style.overflow = ''; // Resetează overflow-ul
    } else {
        // Deschide meniul și dezactivează scroll-ul
        sideMenu.classList.add('open');
        menuIcon.classList.add('open');
        html.style.overflow = 'hidden'; // Dezactivează scroll-ul pe întreaga pagină
    }
}




$(document).ready(function(){
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Rulează codul doar după ce pagina este complet încărcată
    const back4 = document.getElementById("back4"); 

    if (!back4) {
        console.warn("Elementul back4 nu este disponibil. Verifică structura DOM.");
        return; // Oprește execuția dacă back4 nu există
    }

    console.log("Elementul back4 a fost găsit!");

    // Funcție pentru a activa confetti
    function triggerConfetti() {
        const duration = 2000; // Durata confetti-ului (3 secunde)
        const colors = ["#FFD700", "#ffffff", "#FFDF00", "#D4AC0D", "#DAA520"];

        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                zIndex: 10000,
                colors: colors,
            });

            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                zIndex: 10000,
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    // Funcție pentru a verifica dacă centrul unui element este vizibil în viewport
    function isElementCenterVisible(el) {
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2; // Calculează poziția centrului
        return (
            elementCenter >= 0 && // Centrul este peste partea de sus a viewport-ului
            elementCenter <= window.innerHeight // Centrul este sub partea de jos a viewport-ului
        );
    }

    // Eveniment de scroll pentru activarea confetti-ului
    let confettiTriggered = false;
    window.addEventListener("scroll", () => {
        if (isElementCenterVisible(back4) && !confettiTriggered) {
            confettiTriggered = true; // Evită activările multiple
            console.log("Confetti declanșat în centrul lui back4!");
            triggerConfetti();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cos2 = document.getElementById("cos2");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Adaugă clasa `active` când intră în viewport
                    cos2.classList.add("active");
                }
            });
        },
        {
            root: null, // Observă față de viewport-ul întreg
            threshold: 0.5, // Activează când cel puțin 50% din element este vizibil
        }
    );

    observer.observe(cos2);
});




document.addEventListener("DOMContentLoaded", () => {
    const cosminMobile = document.querySelector(".cosminmobile"); // Div-ul .cosminmobile
    const children = cosminMobile ? Array.from(document.querySelectorAll("#scrise > div")) : []; // Elemente interne din #scrise

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Activează animațiile copiilor cu un delay de 1 secundă între ele
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add("animate"); // Adaugă clasa pentru animație
                        }, index * 1000); // Delay de 1 secundă între elemente
                    });
                    observer.unobserve(entry.target); // Dezactivează observarea după activare
                }
            });
        },
        { threshold: 0.5 } // Activează când 50% din .cosminmobile este vizibil
    );

    if (cosminMobile) observer.observe(cosminMobile); // Observăm div-ul .cosminmobile
});

document.addEventListener("DOMContentLoaded", () => {
    const butonServicii = document.getElementById("buton-servicii");

    if (butonServicii) {
        butonServicii.addEventListener("click", (event) => {
            event.preventDefault(); // Previne redirecționarea imediată

            const spanOne = butonServicii.querySelector(".btn-text-one");
            const spanTwo = butonServicii.querySelector(".btn-text-two");

            // Schimbă textul
            spanOne.style.display = "none"; // Ascunde textul inițial
            spanTwo.style.top = "50%"; // Afișează textul "Minunat!"

            // După 1 secundă, redirecționează către link
            setTimeout(() => {
                window.location.href = butonServicii.getAttribute("href");
            }, 1000);
        });
    }
});

// Ascunde pagina la început
document.body.style.visibility = "hidden";
document.body.style.overflow = "hidden";

// Funcție pentru a calcula procentajul de resurse încărcate
function getLoadProgress() {
    const performanceEntries = window.performance.getEntriesByType("resource");
    const totalResources = performanceEntries.length || 1; // Evităm împărțirea la 0
    const loadedResources = performanceEntries.filter(
        (entry) => entry.responseEnd > 0 // Resurse încărcate complet
    ).length;

    return Math.floor((loadedResources / totalResources) * 100);
}

// Interval pentru verificarea progresului
const progressInterval = setInterval(() => {
    const progress = getLoadProgress();

    console.log(`Progresul încărcării: ${progress}%`); // Poți dezactiva acest log în producție

    if (progress >= 70) {
        clearInterval(progressInterval); // Oprește intervalul după atingerea pragului
        document.body.style.visibility = "visible"; // Afișează pagina
        document.body.style.overflow = "auto"; // Permite scroll-ul
    }
}, 200); // Verifică progresul la fiecare 200ms
document.addEventListener("DOMContentLoaded", () => {
    const back3H1 = document.querySelector(".back3 h1");
    const singleItem = document.querySelector(".single-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === back3H1) {
                        back3H1.classList.add("active");
                    } else if (entry.target === singleItem) {
                        singleItem.classList.add("active");
                    }
                }
            });
        },
        { threshold: 0.5 } // Activează când 50% din element este vizibil
    );

    if (back3H1) observer.observe(back3H1);
    if (singleItem) observer.observe(singleItem);
});




