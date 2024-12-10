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
    const images = document.querySelectorAll('.gallery-item img'); // Selectăm toate imaginile

    // Configurare Intersection Observer
    const observerOptions = {
        root: null, // Observăm în interiorul viewport-ului
        threshold: 0.3 // Când 10% din imagine devine vizibilă
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adăugăm clasa pentru animație
                observer.unobserve(entry.target); // Oprim observarea pentru această imagine
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observăm fiecare imagine
    images.forEach(image => observer.observe(image));
});
