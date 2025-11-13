document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // --- 1. Theme Switch Logic ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.className = 'dark-mode';
        } else {
            body.className = 'light-mode';
        }
    }

    function updateToggleIcon() {
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️'; // Qorong'i rejimda, Quyosh ikonkasini ko'rsatish
        } else {
            themeToggle.textContent = '🌙'; // Yorug' rejimda, Oy ikonkasini ko'rsatish
        }
    }

    updateToggleIcon();

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
        updateToggleIcon();
    });

    // --- 2. Typing (Klaviatura yozuvi) Animatsiyasi ---
    const textToType = "Salom, men <span class='highlight'>Munisbek Raimjonov</span>, <span class='role'>Web Dasturchi</span>.";
    const typingElement = document.getElementById('typing-text');
    const afterTypingContent = document.getElementById('after-typing-content');
    const cursorElement = document.querySelector('.cursor');
    
    // Agar elementlar mavjud bo'lsa, animatsiyani ishga tushirish
    if (typingElement) {
        let index = 0;
        let htmlContent = '';
        let inTag = false;

        function typeWriter() {
            if (index < textToType.length) {
                const char = textToType.charAt(index);

                if (char === '<') {
                    inTag = true;
                } else if (char === '>') {
                    inTag = false;
                    htmlContent += char; // Tagni qo'shish
                    typingElement.innerHTML = htmlContent;
                    index++;
                    setTimeout(typeWriter, 50); // Tagdan keyin tezroq davom etish
                    return;
                }

                if (inTag) {
                    htmlContent += char;
                } else {
                    htmlContent += char;
                    typingElement.innerHTML = htmlContent;
                }

                index++;
                
                setTimeout(typeWriter, 80); // Harf yozish tezligi
            } else {
                // Animatsiya tugagandan so'ng
                if (cursorElement) {
                    cursorElement.classList.remove('cursor'); // Yonib o'chishni to'xtatish
                    cursorElement.textContent = ''; // Kursorni yashirish
                }
                // Tugmani silliq paydo qilish
                afterTypingContent.style.opacity = '1';
                afterTypingContent.style.transform = 'translateY(0)'; 
            }
        }
        
        // Elementlarni dastlab yashirish
        afterTypingContent.style.opacity = '0';
        afterTypingContent.style.transform = 'translateY(20px)'; 
        
        typeWriter();
    }


    // --- 3. Scroll Animatsiyasi (Elementlar kirganda silliq paydo bo'lishi) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Bir marta ko'ringandan so'ng to'xtatish
            }
        });
    }, {
        threshold: 0.15, // Elementning 15% ko'ringanda ishga tushirish
    });

    // Barcha .scroll-animate klassiga ega bo'lgan elementlarga animatsiya qo'shish
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
    
    
    // --- 4. "Ko'proq ma'lumot" tugmasi uchun silliq skroll (smooth scroll) ---
    const scrollToAboutBtn = document.getElementById('scroll-to-about');
    if (scrollToAboutBtn) {
        scrollToAboutBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Standart harakatni bekor qilish
            const targetId = this.getAttribute('href'); // #about
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Silliq skroll qilish
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
