document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // --- 0. Lokalizatsiya Lug'ati va Funksiyalari ---
    // =========================================================================

    const translations = {
        'uz': {
            'page_title': "Munisbek Raimjonov | Web Dasturchi",
            // Navigatsiya
            'nav_home': 'Asosiy',
            'nav_about': "Men haqimda",
            'nav_skills': "Ko'nikmalar",
            'nav_contact': "Aloqa",
            'theme_toggle_title': "Yorug'/Qorong'i rejimni almashtirish",
            'lang_selector_title': "Tilni tanlash",
            
            // Hero
            'hero_typing_text': "Salom, men <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>Frontend Dasturchi</span>.",
            'btn_more_info': "Ko'proq ma'lumot",
            
            // Bo'lim Sarlavhalari
            'title_about': "Men haqimda",
            'title_skills': "Ko'nikmalar",
            'title_contact': "Aloqa",
            
            // Men haqimda (Summary)
            'about_summary': "Men <strong>1 yillik tajribaga</strong> ega, dinamik va yuqori ishlashga ega veb-saytlarni yaratishga ixtisoslashgan <strong>Frontend Dasturchiman</strong>. ",
            
            // 🔥🔥🔥 BARCHA 20 FEATURE UCHUN YANGI KALITLAR 🔥🔥🔥
            'feature_team_work_title': "Jamoaviy Ish",
            'feature_team_work_desc': "Jamoada samarali ishlash tajribasi.",
            
            'feature_time_management_title': "Vaqt Boshqaruvi", 
            'feature_time_management_desc': "Muddatlarga qat'iy rioya qilish va rejalashtirish.", 
            
            'feature_detail_attention_title': "Detailga E'tibor", 
            'feature_detail_attention_desc': "Dizayndagi eng mayda detallarni aniq ijro etish.",
            
            'feature_problem_solving_title': "Muammo Yechish",
            'feature_problem_solving_desc': "Mantiqiy va optimallashtirilgan yechimlar topish.", 
            
            'feature_continuous_learning_title': "Doimiy O'rganish",
            'feature_continuous_learning_desc': "Yangi texnologiyalarni o'rganishga yuqori ishtiyoq.",
            
            'feature_ux_priority_title': "UX Ustuvorligi",
            'feature_ux_priority_desc': "Foydalanuvchi tajribasini birinchi o'ringa qo'yish.",
            
            'feature_code_quality_title': "Kod Sifati",
            'feature_code_quality_desc': "Toza, o'qiladigan va qayta ishlatiladigan (reusable) kod.",
            
            'feature_testing_debugging_title': "Testing & Debugging",
            'feature_testing_debugging_desc': "Tizimli sinash va xatolarni tezda bartaraf etish.",
            
            'feature_adaptability_title': "Moslashuvchanlik",
            'feature_adaptability_desc': "Barcha ekranlarda mukammal ishlashni ta'minlash.",
            
            'feature_performance_optimization_title': "Ishlashni Optimizatsiyasi",
            'feature_performance_optimization_desc': "Yuqori yuklanish tezligiga erishish (Performance).",
            
            'feature_self_management_title': "O'z-o'zini boshqarish",
            'feature_self_management_desc': "Topshiriqlarni mustaqil va samarali boshqarish.",
            
            'feature_version_control_title': "Versiya Boshqaruvi",
            'feature_version_control_desc': "Git va GitHub/GitLab yordamida kodni boshqarish.",
            
            'feature_effective_communication_title': "Samarali Aloqa",
            'feature_effective_communication_desc': "G'oyalarni aniq va tushunarli yetkazish qobiliyati.",
            
            'feature_project_analysis_title': "Loyiha Tahlili",
            'feature_project_analysis_desc': "Talablarni texnik yechimlarga aylantirish.",
            
            'feature_cross_browser_title': "Kross-Brauzer Moslik",
            'feature_cross_browser_desc': "Barcha asosiy brauzerlarda bir xil ishlash.",
            
            'feature_design_principles_title': "Dizayn Prinsiplari",
            'feature_design_principles_desc': "UI/UX dizayn prinsiplarini amalda qo'llash.",
            
            'feature_api_integration_title': "API Integratsiyasi",
            'feature_api_integration_desc': "RESTful API va ma'lumotlar bilan ishlash tajribasi.",
            
            'feature_accessibility_title': "Veb Erkinligi (A11y)",
            'feature_accessibility_desc': "Barcha foydalanuvchilar uchun qulaylikni ta'minlash.",
            
            'feature_security_concept_title': "Xavfsizlik Tushunchasi",
            'feature_security_concept_desc': "Frontend darajasidagi asosiy xavfsizlik amaliyotlari.",
            
            'feature_animation_interactivity_title': "Animatsiya & Interaktivlik",
            'feature_animation_interactivity_desc': "Samarali CSS va JS animatsiyalarini yaratish.",
            
            'feature_component_approach_title': "Komponentli Yondashuv",
            'feature_component_approach_desc': "Katta loyihalarda komponent asosida ishlash.",
            
            'feature_syntax_cleanliness_title': "Sintaktik Tozalik",
            'feature_syntax_cleanliness_desc': "Kodni Linting va Formatting vositalari bilan ishlash.",
            
            'feature_build_tools_title': "Build Tools (Webpack/Vite)",
            'feature_build_tools_desc': "Loyihalarni optimallashtirish va to'plash (bundling).",
            
            'feature_i18n_title': "I18n (Lokalizatsiya)",
            'feature_i18n_desc': "Ko'p tilli veb-saytlarni yaratish tajribasi.",
            
            'feature_modularity_title': "Modullik Dizayni",
            'feature_modularity_desc': "Kodni kichik, bog'liq bo'lmagan modullarga ajratish.",
            
            'feature_refactoring_title': "Kodni Refaktorlash",
            'feature_refactoring_desc': "Mavjud kod bazasini yaxshilash va tozalash.", 

            // Ko'nikmalar (Skills) - Namuna kalitlari saqlanadi
            'skill_group_frontend_title': "Frontend (Interfeys)",
            'skill_group_backend_title': "Backend (Server)", 
            'skill_group_tools_title': "Asboblar", 
            'skill_html_title': "HTML & CSS", 
            'skill_js_title': "JavaScript (ES6+)", 
            
            // Aloqa (Contact)
            'contact_phone_text': "Murojaat uchun:",
            'contact_link_text': "Bog'lanish",
            'contact_email_text': "Email:",
            'contact_form_name_placeholder': "Ism", 
            'contact_form_message_placeholder': "Xabar", 
            'contact_form_btn': "Yuborish", 
            
            // Footer
            'footer_text': "Saytlar arzon va hamyonbop narxlarda yasab beramiz."
        },
        'ru': {
            'page_title': "Мунисбек Раимжонов | Веб-Разработчик",
            // Navigatsiya
            'nav_home': 'Главная',
            'nav_about': "Обо мне",
            'nav_skills': "Навыки",
            'nav_contact': "Контакты",
            'theme_toggle_title': "Переключить светлый/темный режим",
            'lang_selector_title': "Выбрать язык",
            
            // Hero
            'hero_typing_text': "Здравствуйте, я <span class='highlight'>Мунисбек Раимжонов</span><br><span class='role'>Frontend Разработчик</span>.",
            'btn_more_info': "Подробнее",
            
            // Bo'lim Sarlavhalari
            'title_about': "Обо мне",
            'title_skills': "Навыки",
            'title_contact': "Контакты",
            
            // Men haqimda (Summary)
            'about_summary': "Я <strong>Frontend Разработчик</strong> с <strong>1-летним опытом</strong>, специализирующийся на создании динамичных и высокопроизводительных веб-приложений. ",
            
            // 🔥🔥🔥 BARCHA 20 FEATURE UCHUN YANGI KALITLAR 🔥🔥🔥
            'feature_team_work_title': "Командная работа",
            'feature_team_work_desc': "Опыт эффективной работы в команде.",
            
            'feature_time_management_title': "Тайм-менеджмент", 
            'feature_time_management_desc': "Строгое соблюдение сроков и планирование.", 
            
            'feature_detail_attention_title': "Внимание к деталям", 
            'feature_detail_attention_desc': "Точное выполнение мельчайших деталей дизайна.",
            
            'feature_problem_solving_title': "Решение проблем",
            'feature_problem_solving_desc': "Поиск логичных и оптимизированных решений.", 
            
            'feature_continuous_learning_title': "Постоянное обучение",
            'feature_continuous_learning_desc': "Высокое стремление к изучению новых технологий.",
            
            'feature_ux_priority_title': "Приоритет UX",
            'feature_ux_priority_desc': "Постановка пользовательского опыта на первое место.",
            
            'feature_code_quality_title': "Качество Кода",
            'feature_code_quality_desc': "Чистый, читаемый и повторно используемый (reusable) код.",
            
            'feature_testing_debugging_title': "Тестирование и отладка",
            'feature_testing_debugging_desc': "Системное тестирование и быстрое устранение ошибок.",
            
            'feature_adaptability_title': "Адаптивность",
            'feature_adaptability_desc': "Обеспечение идеальной работы на всех экранах.",
            
            'feature_performance_optimization_title': "Оптимизация Производительности",
            'feature_performance_optimization_desc': "Достижение высокой скорости загрузки (Performance).",
            
            'feature_self_management_title': "Самоуправление",
            'feature_self_management_desc': "Самостоятельное и эффективное управление задачами.",
            
            'feature_version_control_title': "Контроль Версий",
            'feature_version_control_desc': "Управление кодом с помощью Git и GitHub/GitLab.",
            
            'feature_effective_communication_title': "Эффективная Коммуникация",
            'feature_effective_communication_desc': "Способность четко и понятно доносить идеи.",
            
            'feature_project_analysis_title': "Анализ Проектов",
            'feature_project_analysis_desc': "Преобразование требований в технические решения.",
            
            'feature_cross_browser_title': "Кроссбраузерная Совместимость",
            'feature_cross_browser_desc': "Единообразная работа во всех основных браузерах.",
            
            'feature_design_principles_title': "Принципы Дизайна",
            'feature_design_principles_desc': "Применение принципов UI/UX дизайна на практике.",
            
            'feature_api_integration_title': "Интеграция API",
            'feature_api_integration_desc': "Опыт работы с RESTful API и данными.",
            
            'feature_accessibility_title': "Веб-Доступность (A11y)",
            'feature_accessibility_desc': "Обеспечение удобства для всех пользователей.",
            
            'feature_security_concept_title': "Понимание Безопасности",
            'feature_security_concept_desc': "Основные практики безопасности на уровне Frontend.",
            
            'feature_animation_interactivity_title': "Анимация и Интерактивность",
            'feature_animation_interactivity_desc': "Создание эффективных CSS и JS анимаций.",
            
            'feature_component_approach_title': "Компонентный Подход",
            'feature_component_approach_desc': "Работа на основе компонентов в больших проектах.",
            
            'feature_syntax_cleanliness_title': "Синтаксическая Чистота",
            'feature_syntax_cleanliness_desc': "Работа с инструментами Linting и Formatting.",
            
            'feature_build_tools_title': "Инструменты Сборки (Webpack/Vite)",
            'feature_build_tools_desc': "Оптимизация и сборка проектов (bundling).",
            
            'feature_i18n_title': "I18n (Локализация)",
            'feature_i18n_desc': "Опыт создания многоязычных веб-сайтов.",
            
            'feature_modularity_title': "Модульный Дизайн",
            'feature_modularity_desc': "Разделение кода на небольшие, независимые модули.",
            
            'feature_refactoring_title': "Рефакторинг Кода",
            'feature_refactoring_desc': "Улучшение и очистка существующей кодовой базы.", 

            // Ko'nikmalar (Skills) - Namuna kalitlari saqlanadi
            'skill_group_frontend_title': "Frontend (Интерфейс)",
            'skill_group_backend_title': "Backend (Сервер)", 
            'skill_group_tools_title': "Инструменты", 
            'skill_html_title': "HTML & CSS", 
            'skill_js_title': "JavaScript (ES6+)", 
            
            // Aloqa (Contact)
            'contact_phone_text': "Для связи:",
            'contact_link_text': "Связаться",
            'contact_email_text': "Электронная почта:",
            'contact_form_name_placeholder': "Имя", 
            'contact_form_message_placeholder': "Сообщение", 
            'contact_form_btn': "Отправить", 
            
            // Footer
            'footer_text': "Мы создаем сайты по недорогим и доступным ценам."
        },
        'en': {
            'page_title': "Munisbek Raimjonov | Web Developer",
            // Navigatsiya
            'nav_home': 'Home',
            'nav_about': "About Me",
            'nav_skills': "Skills",
            'nav_contact': "Contact",
            'theme_toggle_title': "Toggle Light/Dark Mode",
            'lang_selector_title': "Select Language",
            
            // Hero
            'hero_typing_text': "Hello, I am <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>Frontend Developer</span>.",
            'btn_more_info': "More Info",
            
            // Bo'lim Sarlavhalari
            'title_about': "About Me",
            'title_skills': "Skills",
            'title_contact': "Contact",
            
            // Men haqimda (Summary)
            'about_summary': "I am a <strong>Frontend Developer</strong> with <strong>1 year of experience</strong>, specializing in creating dynamic and high-performance web applications. ",
            
            // 🔥🔥🔥 BARCHA 20 FEATURE UCHUN YANGI KALITLAR 🔥🔥🔥
            'feature_team_work_title': "Teamwork",
            'feature_team_work_desc': "Experience working effectively in a team environment.",
            
            'feature_time_management_title': "Time Management", 
            'feature_time_management_desc': "Strict adherence to deadlines and planning.", 
            
            'feature_detail_attention_title': "Attention to Detail", 
            'feature_detail_attention_desc': "Accurate execution of the smallest design details.",
            
            'feature_problem_solving_title': "Problem Solving",
            'feature_problem_solving_desc': "Finding logical and optimized solutions.", 
            
            'feature_continuous_learning_title': "Continuous Learning",
            'feature_continuous_learning_desc': "High enthusiasm for learning new technologies.",
            
            'feature_ux_priority_title': "UX Priority",
            'feature_ux_priority_desc': "Putting the user experience first.",
            
            'feature_code_quality_title': "Code Quality",
            'feature_code_quality_desc': "Clean, readable, and reusable code.",
            
            'feature_testing_debugging_title': "Testing & Debugging",
            'feature_testing_debugging_desc': "Systematic testing and quick bug fixing.",
            
            'feature_adaptability_title': "Adaptability (Responsiveness)",
            'feature_adaptability_desc': "Ensuring perfect functionality across all screens.",
            
            'feature_performance_optimization_title': "Performance Optimization",
            'feature_performance_optimization_desc': "Achieving high loading speed.",
            
            'feature_self_management_title': "Self-Management",
            'feature_self_management_desc': "Independent and efficient task management.",
            
            'feature_version_control_title': "Version Control",
            'feature_version_control_desc': "Managing code using Git and GitHub/GitLab.",
            
            'feature_effective_communication_title': "Effective Communication",
            'feature_effective_communication_desc': "Ability to convey ideas clearly and understandably.",
            
            'feature_project_analysis_title': "Project Analysis",
            'feature_project_analysis_desc': "Translating requirements into technical solutions.",
            
            'feature_cross_browser_title': "Cross-Browser Compatibility",
            'feature_cross_browser_desc': "Consistent performance across all major browsers.",
            
            'feature_design_principles_title': "Design Principles",
            'feature_design_principles_desc': "Applying UI/UX design principles in practice.",
            
            'feature_api_integration_title': "API Integration",
            'feature_api_integration_desc': "Experience working with RESTful API and data.",
            
            'feature_accessibility_title': "Web Accessibility (A11y)",
            'feature_accessibility_desc': "Ensuring usability for all users.",
            
            'feature_security_concept_title': "Security Awareness",
            'feature_security_concept_desc': "Basic frontend-level security practices.",
            
            'feature_animation_interactivity_title': "Animation & Interactivity",
            'feature_animation_interactivity_desc': "Creating effective CSS and JS animations.",
            
            'feature_component_approach_title': "Component-Based Approach",
            'feature_component_approach_desc': "Working component-based in large projects.",
            
            'feature_syntax_cleanliness_title': "Syntax Cleanliness",
            'feature_syntax_cleanliness_desc': "Working with Linting and Formatting tools.",
            
            'feature_build_tools_title': "Build Tools (Webpack/Vite)",
            'feature_build_tools_desc': "Optimizing and bundling projects.",
            
            'feature_i18n_title': "I18n (Localization)",
            'feature_i18n_desc': "Experience creating multi-language websites.",
            
            'feature_modularity_title': "Modularity Design",
            'feature_modularity_desc': "Splitting code into small, decoupled modules.",
            
            'feature_refactoring_title': "Code Refactoring",
            'feature_refactoring_desc': "Improving and cleaning up the existing codebase.", 

            // Ko'nikmalar (Skills) - Namuna kalitlari saqlanadi
            'skill_group_frontend_title': "Frontend (Interface)",
            'skill_group_backend_title': "Backend (Server)", 
            'skill_group_tools_title': "Tools", 
            'skill_html_title': "HTML & CSS", 
            'skill_js_title': "JavaScript (ES6+)", 
            
            // Aloqa (Contact)
            'contact_phone_text': "For Contact:",
            'contact_link_text': "Connect",
            'contact_email_text': "Email:",
            'contact_form_name_placeholder': "Name", 
            'contact_form_message_placeholder': "Message", 
            'contact_form_btn': "Send", 
            
            // Footer
            'footer_text': "We create websites at cheap and affordable prices."
        }
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
                
                // Atributlarni yangilash (title, placeholder)
                if (element.hasAttribute('title')) {
                    element.setAttribute('title', dictionary[key]);
                } 
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', dictionary[key]);
                }
                
                // Kontentni yangilash (innerHTML)
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

    // Lokal xotiradan mavzuni yuklash va sozlash
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

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
        
        laptopModel.style.transform = `
            perspective(1000px) 
            rotateX(20deg) 
            rotateY(-15deg) 
            scale(0.9)
        `;

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
                perspective(1000px) 
                rotateX(20deg) 
                rotateY(-15deg) 
                scale(0.9)
            `;
        });
    }
});
