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
function handleBlurEffect() {
    const packages = document.querySelectorAll('.p1, .p2, .p3');
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    packages.forEach(package => {
        const rect = package.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (Math.abs(elementCenter - viewportCenter) < rect.height / 2) {
            // Aplicați efectul de focus
            if (package.classList.contains('blurred')) {
                package.classList.remove('blurred');
            }
        } else {
            // Aplicați efectul de blur
            if (!package.classList.contains('blurred')) {
                package.classList.add('blurred');
            }
        }
    });
}

// Ascultăm evenimentul de scroll
window.addEventListener('scroll', () => {
    setTimeout(handleBlurEffect, 100); // Introducem un delay pentru efecte mai line
});


