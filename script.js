document.addEventListener('DOMContentLoaded', () => {

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.error('Lucide library not loaded.');
    }

    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    

    if (mobileMenuButton && mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    icon.setAttribute('data-lucide', 'x');
                }
              
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        ked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        });
    }

    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value : 'Developer';
            
     
            formMessage.classList.remove('hidden', 'bg-red-500/20', 'text-red-400');
            formMessage.classList.add('bg-accent/20', 'text-accent');
            formMessage.innerHTML = `Thank you, <span class="font-bold">${name}</span>! Your message has been received (simulated success). I'll get back to you soon.`;

    
            setTimeout(() => {
                contactForm.reset();
            }, 1000);

 
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 7000);
        });
    }
});
