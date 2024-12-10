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
        { threshold: 0.2 } // Activează când 50% din .cosminmobile este vizibil
    );

    if (cosminMobile) observer.observe(cosminMobile); // Observăm div-ul .cosminmobile
});


document.addEventListener("DOMContentLoaded", () => {
    const cosminMobile = document.querySelector(".eu3"); // Div-ul .cosminmobile
    const children = cosminMobile ? Array.from(document.querySelectorAll("#scrise2 > div")) : []; // Elemente interne din #scrise

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
        { threshold: 0.2 } // Activează când 50% din .cosminmobile este vizibil
    );

    if (cosminMobile) observer.observe(cosminMobile); // Observăm div-ul .cosminmobile
});