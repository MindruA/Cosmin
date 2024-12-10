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