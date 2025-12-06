// Login Dropdown Toggle
const loginBtn = document.getElementById('loginBtn');
const loginDropdown = document.getElementById('loginDropdown');

if (loginBtn && loginDropdown) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        loginDropdown.classList.toggle('active');
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!loginDropdown.contains(e.target) && !loginBtn.contains(e.target)) {
            loginDropdown.classList.remove('active');
        }
    });
}

// Side Panel Register
const showRegister = document.getElementById('showRegister');
const sidePanel = document.getElementById('sidePanel');
const closePanel = document.getElementById('closePanel');
const overlay = document.getElementById('overlay');

if (showRegister && sidePanel) {
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        sidePanel.classList.add('active');
        overlay.classList.add('active');
        if (loginDropdown) loginDropdown.classList.remove('active');
    });
}

if (closePanel) {
    closePanel.addEventListener('click', () => {
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// Cambiar de registro a login
const loginLink = document.getElementById('loginLink');
if (loginLink) {
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => {
            if (loginDropdown) loginDropdown.classList.add('active');
        }, 400);
    });
}

// Overlay click - cierra todo
if (overlay) {
    overlay.addEventListener('click', () => {
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
        const mobileMenuPanel = document.getElementById('mobileMenuPanel');
        const contactModal = document.getElementById('contactModal');
        if (mobileMenuPanel) mobileMenuPanel.classList.remove('active');
        if (contactModal) contactModal.classList.remove('active');
    });
}

// Mobile Menu Panel
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');

if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuPanel.classList.add('active');
        overlay.classList.add('active');
    });
}

if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', () => {
        mobileMenuPanel.classList.remove('active');
        overlay.classList.remove('active');
    });
}

if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenuPanel.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => {
            if (loginDropdown) loginDropdown.classList.add('active');
        }, 400);
    });
}

// Floating Contact Button
const mainContactBtn = document.getElementById('mainContactBtn');
const contactOptions = document.getElementById('contactOptions');
const whatsappBtn = document.getElementById('whatsappBtn');
const emailBtn = document.getElementById('emailBtn');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');

if (mainContactBtn && contactOptions) {
    mainContactBtn.addEventListener('click', () => {
        contactOptions.classList.toggle('active');
        mainContactBtn.style.transform = contactOptions.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
    });
}

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        // Aquí puedes agregar el número de WhatsApp cuando lo tengas
        // window.open('https://wa.me/51999999999', '_blank');
        console.log('WhatsApp clicked - Funcionalidad pendiente');
        contactOptions.classList.remove('active');
        if (mainContactBtn) mainContactBtn.style.transform = 'rotate(0deg)';
    });
}

if (emailBtn) {
    emailBtn.addEventListener('click', () => {
        if (contactModal) contactModal.classList.add('active');
        contactOptions.classList.remove('active');
        if (mainContactBtn) mainContactBtn.style.transform = 'rotate(0deg)';
    });
}

if (closeContactModal) {
    closeContactModal.addEventListener('click', () => {
        contactModal.classList.remove('active');
    });
}

if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });
}

// Form submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado con éxito! Te responderemos pronto.');
        contactModal.classList.remove('active');
        e.target.reset();
    });
}

// Mobile contact button
const mobileContactBtn = document.getElementById('mobileContactBtn');
if (mobileContactBtn) {
    mobileContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactModal) contactModal.classList.add('active');
        if (mobileMenuPanel) mobileMenuPanel.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    });
}

// Navbar contact button
const navContactBtn = document.getElementById('navContactBtn');
if (navContactBtn) {
    navContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactModal) contactModal.classList.add('active');
    });
}

// Hero contact button (solo existe en index)
const heroContactBtn = document.getElementById('heroContactBtn');
if (heroContactBtn) {
    heroContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactModal) contactModal.classList.add('active');
    });
}

// CTA contact button (solo existe en nosotros)
const ctaContactBtn = document.getElementById('ctaContactBtn');
if (ctaContactBtn) {
    ctaContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contactModal) contactModal.classList.add('active');
    });
}