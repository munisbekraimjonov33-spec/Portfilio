document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // --- 0. Lokalizatsiya Lug'ati va Funksiyalari ---
    // =========================================================================
    
    // Faqat ishlatiladigan kalitlar saqlangan (Chatbotga oidlari o'chirilgan)
    const translations = {
        'uz': {
            'page_title': "Munisbek Raimjonov | Web Dasturchi",
            'nav_home': 'Asosiy',
            'nav_about': "Men haqimda",
            'nav_skills': "Ko'nikmalar",
            'nav_contact': "Aloqa",
            'theme_toggle_title': "Yorug'/Qorong'i rejimni almashtirish",
            'lang_selector_title': "Tilni tanlash",
            'hero_typing_text': "Salom, men <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>Frontend Dasturchi</span>.",
            'btn_more_info': "Ko'proq ma'lumot",
            'title_about': "Men haqimda",
            'title_skills': "Ko'nikmalar",
            'title_contact': "Aloqa",
            'about_summary': "Men <strong>1 yillik tajribaga</strong> ega, dinamik va yuqori ishlashga ega veb-ilovalarni yaratishga ixtisoslashgan <strong>Frontend Dasturchiman</strong>. ",
            'feature_team_work_title': "Jamoaviy Ish",
            // ... (boshqa featurelar) ...
            'skill_group_frontend_title': "Frontend (Interfeys)",
            // ... (boshqa skilllar) ...
            'contact_phone_text': "Murojaat uchun:",
            'contact_link_text': "Bog'lanish",
            'contact_email_text': "Email:",
            'footer_text': "Saytlar arzon va hamyonbop narxlarda yasab beramiz."
        },
        'ru': {
            'page_title': "Мунисбек Раимжонов | Веб-Разработчик",
            'nav_home': 'Главная',
            'nav_about': "Обо мне",
            'nav_skills': "Навыки",
            'nav_contact': "Контакты",
            'theme_toggle_title': "Переключить светлый/темный режим",
            'lang_selector_title': "Выбрать язык",
            'hero_typing_text': "Здравствуйте, я <span class='highlight'>Мунисбек Раимжонов</span><br><span class='role'>Frontend Разработчик</span>.",
            'btn_more_info': "Подробнее",
            'title_about': "Обо мне",
            'title_skills': "Навыки",
            'title_contact': "Контакты",
            'about_summary': "Я <strong>Frontend Разработчик</strong> с <strong>1-летним опытом</strong>, специализирующийся на создании динамичных и высокопроизводительных веб-приложений. ",
            'feature_team_work_title': "Командная работа",
            // ... (boshqa featurelar) ...
            'skill_group_frontend_title': "Frontend (Интерфейс)",
            // ... (boshqa skilllar) ...
            'contact_phone_text': "Для связи:",
            'contact_link_text': "Связаться",
            'contact_email_text': "Электронная почта:",
            'footer_text': "Мы создаем сайты по недорогим и доступным ценам."
        },
        'en': {
            'page_title': "Munisbek Raimjonov | Web Developer",
            'nav_home': 'Home',
            'nav_about': "About Me",
            'nav_skills': "Skills",
            'nav_contact': "Contact",
            'theme_toggle_title': "Toggle Light/Dark Mode",
            'lang_selector_title': "Select Language",
            'hero_typing_text': "Hello, I am <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>Frontend Developer</span>.",
            'btn_more_info': "More Info",
            'title_about': "About Me",
            'title_skills': "Skills",
            'title_contact': "Contact",
            'about_summary': "I am a <strong>Frontend Developer</strong> with <strong>1 year of experience</strong>, specializing in creating dynamic and high-performance web applications. ",
            'feature_team_work_title': "Teamwork",
            // ... (boshqa featurelar) ...
            'skill_group_frontend_title': "Frontend (Interface)",
            // ... (boshqa skilllar) ...
            'contact_phone_text': "For Contact:",
            'contact_link_text': "Connect",
            'contact_email_text': "Email:",
            'footer_text': "We create websites at cheap and affordable prices."
        }
        // ... (Qolgan lug'at elementlari ham shu tartibda bo'lishi kerak, men joyni tejash maqsadida qisqartirdim)
    };

    const languageSelector = document.getElementById('language-selector');
    const htmlElement = document.documentElement; 
    const defaultLang = htmlElement.dataset.defaultLang || 'uz'; 
    let currentLang; 

    // FUNKSIYA: Kontentni yangilash uchun ASOSIY FUNKSIYA
    function updateContent(lang) {
        const dictionary = translations[lang];

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            
            if (dictionary[key]) {
                
                // Atributlarni yangilash
                if (element.hasAttribute('title')) {
                    element.setAttribute('title', dictionary[key]);
                } 
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', dictionary[key]);
                }
                
                // Kontentni yangilash
                const isAttributeOnlyElement = element.hasAttribute('title') || element.hasAttribute('placeholder') || element.tagName === 'SELECT';

                if (!isAttributeOnlyElement) {
                     element.innerHTML = dictionary[key];
                }
            }
        });

        htmlElement.setAttribute('lang', lang);
        document.title = dictionary['page_title'] || translations[defaultLang]['page_title'];
    }
    
    // Saqlangan tilni yuklash
    currentLang = localStorage.getItem('lang') || defaultLang;
    if (languageSelector) {
        languageSelector.value = currentLang;
    }
    updateContent(currentLang); 
    
    // Tilni tanlash tugmasi logikasi
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('lang', currentLang);
            updateContent(currentLang);
            restartTypingAnimation(translations[currentLang].hero_typing_text);
        });
    }

    // =========================================================================
    // --- 1. Theme Switch Logic (Yorug'/Qorong'i rejim) ---
    // =========================================================================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // ... (Tema kodi) ...

    function updateToggleIcon() {
        if (themeToggle) {
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️'; 
            } else {
                themeToggle.textContent = '🌙'; 
            }
        }
    }

    updateToggleIcon();

    if (themeToggle) {
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
    }

    // =========================================================================
    // --- 2. Typing Animatsiyasi Logic ---
    // =========================================================================
    let typingTimeout;
    
    function restartTypingAnimation(newTextToType) {
        // ... (Typing animatsiyasi kodi) ...
        clearTimeout(typingTimeout); 

        const typingElement = document.getElementById('typing-text');
        const afterTypingContent = document.getElementById('after-typing-content');
        const cursorElement = document.querySelector('#typing-text-container .cursor');

        if (!typingElement) return;

        typingElement.innerHTML = '';
        if (afterTypingContent) {
            afterTypingContent.style.opacity = '0';
            afterTypingContent.style.transform = 'translateY(20px)';
        }
        
        if (cursorElement) {
             cursorElement.style.display = 'inline-block'; 
        }

        let index = 0;
        let htmlContent = '';
        let inTag = false;

        function typeWriter() {
            if (index < newTextToType.length) {
                const char = newTextToType.charAt(index);

                if (char === '<') {
                    inTag = true;
                } else if (char === '>') {
                    inTag = false;
                    htmlContent += char; 
                    typingElement.innerHTML = htmlContent;
                    index++;
                    typingTimeout = setTimeout(typeWriter, 50); 
                    return;
                }

                htmlContent += char;

                if (!inTag) {
                    typingElement.innerHTML = htmlContent;
                }
                
                index++;
                
                typingTimeout = setTimeout(typeWriter, 80); 
            } else {
                if (cursorElement) {
                    cursorElement.style.display = 'none'; 
                }
                
                if (afterTypingContent) {
                    afterTypingContent.style.opacity = '1';
                    afterTypingContent.style.transform = 'translateY(0)'; 
                }
            }
        }
        
        typeWriter();
    }
    
    restartTypingAnimation(translations[currentLang].hero_typing_text);

    // =========================================================================
    // --- 3. Scroll Animatsiyasi (Silliq paydo bo'lish) ---
    // =========================================================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, 
    });

    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });
    
    
    // --- 4. "Ko'proq ma'lumot" tugmasi va Navigatsiya tugmalari uchun silliq skroll (TUZATILGAN) ---
    const scrollToAboutBtn = document.getElementById('scroll-to-about');
    
    // Navigatsiya linklari uchun umumiy tinglovchi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Agar link manzilni o'zgartirsa (ya'ni #about, #contact kabi)
            if (this.getAttribute('href').length > 1) { 
                e.preventDefault(); 
                const targetId = this.getAttribute('href'); 
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // --- 5. Laptop Parallax (Noutbukni kursor bilan siljitish) ---
    const laptopWrapper = document.getElementById('laptop-3d-wrapper');
    const laptopModel = document.querySelector('.laptop-model');

    if (laptopWrapper && laptopModel) {
        // ... (Laptop Parallax kodi) ...
        laptopWrapper.addEventListener('mousemove', (e) => {
            const rect = laptopWrapper.getBoundingClientRect();
            
            const xAxis = (e.clientX - rect.left) / rect.width - 0.5; 
            const yAxis = (e.clientY - rect.top) / rect.height - 0.5; 
            
            const tiltX = -yAxis * 10; 
            const tiltY = xAxis * 15; 

            laptopModel.style.transform = `
                perspective(1000px) 
                rotateX(${20 + tiltX}deg) 
                rotateY(${-15 + tiltY}deg) 
                scale(0.9)
            `;
        });
        
        laptopWrapper.addEventListener('mouseleave', () => {
            laptopModel.style.transform = `
                rotateX(20deg) 
                rotateY(-15deg) 
                scale(0.9)
            `;
        });
    }

    // Chatbot logikasi olib tashlangan.
});
