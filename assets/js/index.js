// Login Dropdown Toggle
const loginBtn = document.getElementById('loginBtn');
const loginDropdown = document.getElementById('loginDropdown');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    loginDropdown.classList.toggle('active');
});

// Cambiar de registro a login
const loginLink = document.querySelector('.side-panel .text-center a');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    // Cerrar panel de registro
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
    // Abrir dropdown de login
    setTimeout(() => {
        loginDropdown.classList.add('active');
    }, 400);
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!loginDropdown.contains(e.target) && !loginBtn.contains(e.target)) {
        loginDropdown.classList.remove('active');
    }
});

// Side Panel Register
const showRegister = document.getElementById('showRegister');
const sidePanel = document.getElementById('sidePanel');
const closePanel = document.getElementById('closePanel');
const overlay = document.getElementById('overlay');

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    sidePanel.classList.add('active');
    overlay.classList.add('active');
    loginDropdown.classList.remove('active');
});

closePanel.addEventListener('click', () => {
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidePanel.classList.remove('active');
    overlay.classList.remove('active');
});

// Mobile Menu Panel
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuPanel = document.getElementById('mobileMenuPanel');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuPanel.classList.add('active');
    overlay.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
    mobileMenuPanel.classList.remove('active');
    overlay.classList.remove('active');
});

mobileLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenuPanel.classList.remove('active');
    overlay.classList.remove('active');
    setTimeout(() => {
        loginDropdown.classList.add('active');
    }, 400);
});

// Cerrar menú mobile al hacer click en overlay
overlay.addEventListener('click', () => {
    mobileMenuPanel.classList.remove('active');
});

// Floating Contact Button
const mainContactBtn = document.getElementById('mainContactBtn');
const contactOptions = document.getElementById('contactOptions');
const whatsappBtn = document.getElementById('whatsappBtn');
const emailBtn = document.getElementById('emailBtn');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');

// Toggle contact options
mainContactBtn.addEventListener('click', () => {
    contactOptions.classList.toggle('active');
    mainContactBtn.style.transform = contactOptions.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
});

// WhatsApp button (sin funcionalidad por ahora)
whatsappBtn.addEventListener('click', () => {
    console.log('WhatsApp clicked - Funcionalidad pendiente');
    contactOptions.classList.remove('active');
    mainContactBtn.style.transform = 'rotate(0deg)';
});

// Email button - Open modal
emailBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
    contactOptions.classList.remove('active');
    mainContactBtn.style.transform = 'rotate(0deg)';
});

// Close modal
closeContactModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
});

// Close modal clicking outside
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// Form submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Te responderemos pronto.');
    contactModal.classList.remove('active');
    e.target.reset();
});