document.addEventListener('DOMContentLoaded', function(){
     
   
    setTimeout(function(){
        window.scrollTo(0,0);
        let preloader = document.querySelector('.preloader'); 
        preloader.classList.add('preloader-hide');
        setTimeout(function(){
            preloader.remove();
        }, 1000)

    let windowWidth = window.innerWidth;
    
    window.addEventListener('resize', function(){
        windowWidth = window.innerWidth; 
    });

    gsap.registerPlugin(ScrollTrigger); 
    
    const aboutTL = gsap.timeline();
    
    
    // about-section
    gsap.fromTo('.about-us-container',{y: 200},{scrollTrigger: ".about-section ", y: 0, ease:  "power1.out", duration: 0.6});  
    gsap.fromTo('.partners-inner',{y: 200},{scrollTrigger: ".about-us-container", y: 0, ease:  "power1.out", duration: 0.6}, '-=0.5'); 
    
    
    // news-section
    gsap.fromTo('.news-section .section-title',{y: 200},{scrollTrigger: ".news-section .section-title", y: 0, ease:  "power1.out", duration: 0.7});
    if(windowWidth > 950){
        gsap.fromTo('.news-section .news-box',{y: 200},{scrollTrigger: ".news-section .section-title", y: 0, ease:  "power1.out", duration: 0.7}, '-=0.2'); 
        gsap.fromTo('.news-item', {y: 200}, {scrollTrigger: ".news-section .section-title", y: 0, ease:  "power1.out", duration: 0.5, stagger: 0.3, delay: 0}, '-=0.2');
    } else{
        let nlNewsItem = document.querySelectorAll('.news-item');
        if(nlNewsItem.length > 0){
            nlNewsItem.forEach(elem=>{
                console.log(elem)
                gsap.fromTo(elem, {y: 200}, {scrollTrigger: elem, y: 0, ease:  "power1.out", duration: 0.4,  delay: 0}, );
            })
            
        } 
    }
    
    // services-section
    const servicesTL = gsap.timeline();
    let servicesTrigger = '';
    if(windowWidth > 600 && windowWidth <= 1100){ 
        servicesTL.fromTo('.services-section .section-title',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.6})
        .fromTo('.services-section .world-map-img',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.5}, '-=0.5')
        .fromTo('.services-section .hely-spoiler-box',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.5}, '-=0.5'); 
        servicesTrigger = '.services-section .section-title';       
    }else if(windowWidth <= 600){
        servicesTL.fromTo('.services-section .world-map-img',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.6})
        .fromTo('.services-section .section-title',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.7}, '-=0.5') 
        .fromTo('.services-section .hely-spoiler-box',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.5}, '-=0.5'); 
        servicesTrigger = '.services-section'; 
    }else{
        servicesTL.fromTo('.services-section .section-title',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.6})
        .fromTo('.services-section .hely-spoiler-box',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.5}, '-=0.5') 
        .fromTo('.services-section .world-map-img',{y: 200},{ y: 0, ease:  "power1.out", duration: 0.5}, '-=0.5'); 
        servicesTrigger = '.services-section .section-title';
    }
    
    ScrollTrigger.create({
        trigger: servicesTrigger, 
        animation:  servicesTL
    });
    
    
    // our-fleet-section
    gsap.fromTo('.our-fleet-section .section-title',{y: 300},{scrollTrigger: ".our-fleet-section", y: 0, ease:  "power1.out", duration: 0.7}); 
    gsap.fromTo('.our-fleet-section .subtitle',{y: 300},{scrollTrigger: ".our-fleet-section", y: 0, ease:  "power1.out", duration: 0.7, delay: 0.3}); 
    gsap.fromTo('.our-fleet-section .section-description',{y: 300},{scrollTrigger: ".our-fleet-section", y: 0, ease:  "power1.out", duration: 0.7,  delay: 0.6}); 
    
    gsap.fromTo('.our-fleet-section .heli-slider-box',{y: 300},{scrollTrigger: ".our-fleet-section .section-title", y: 0, ease:  "power1.out", duration: 0.7}); 
    gsap.fromTo('.our-fleet-section .heli-slider-box',{y: 300},{scrollTrigger: ".our-fleet-section .section-title", y: 0, ease:  "power1.out", duration: 0.7});
    
    gsap.fromTo('.our-fleet-section .heli-ttx__caption',{y: 300},{scrollTrigger: ".our-fleet-section .heli-ttx", y: 0, ease:  "power1.out", duration: 0.7}); 
    gsap.fromTo('.our-fleet-section .heli-ttx__left-col',{y: 300},{scrollTrigger: ".our-fleet-section .heli-ttx", y: 0, ease:  "power1.out", duration: 0.7, delay: 0.2}); 
    gsap.fromTo('.our-fleet-section .heli-ttx__right-col',{y: 300},{scrollTrigger: ".our-fleet-section .heli-ttx", y: 0, ease:  "power1.out", duration: 0.7, delay: 0.4}); 
    
    // help-section
    if(windowWidth > 950){
        gsap.fromTo('.help-section-main-img',{width: '0%'},{scrollTrigger: ".help-section", width: '100%', ease:  "power1.out", duration: 0.7, delay: 0.4}); 
    }
    
    
    
    
     
    
    
    
     
    let headerDecorLogo = document.querySelector('.header-decor-logo');
    let headerDecorLogoGroup = headerDecorLogo.querySelector('.header-decor-logo__group');
    let decorLogoMini = document.querySelector('.decor-logo');
    
    // функция отвечающаяя за анимацию логотипа в шапке и за анимацию скольжения логотипа вниз при скролле
    function showLogoFromHeader() { 
        //  определяю позицию большого логотипа и body
        var bodyRect = document.body.getBoundingClientRect(),
            headerDecorLogoRect = headerDecorLogo.getBoundingClientRect(),
            offsetDecorLogo = Math.floor(headerDecorLogoRect.top - bodyRect.top);
    
        //  определяю позицию маленького логотипа
        var decorLogoMiniRectRect = decorLogoMini.getBoundingClientRect(),
            offsetDecorLogoMini = Math.floor(decorLogoMiniRectRect.top - bodyRect.top);
    
        let headerDecorLogoGroupRect = headerDecorLogoGroup.getBoundingClientRect();
    
        if (bodyRect.top == 0) {
            let decorLogoMiniTopPosition = offsetDecorLogo - offsetDecorLogoMini + 76;
    
            decorLogoMini.style.top = decorLogoMiniTopPosition + 'px';
    
            decorLogoMini.style.width = headerDecorLogoGroupRect.width + 'px';
            console.log(headerDecorLogoGroupRect.width + 'px')
    
            decorLogoMini.style.height = headerDecorLogoGroupRect.height + 'px';
    
    
            setTimeout(function () {
                decorLogoMini.classList.remove('decor-logo--scale');
                // decorLogoMini.style.transform = 'translateX(-50%) scale(1.15)';
                decorLogoMini.style.opacity = '0.1';
            }, 400)
            setTimeout(function () {
                decorLogoMini.classList.remove('decor-logo--separation');
            }, 501)
        }
    }
    /**фуркция отменяющая анимацию появления логотипа в header и последующее его скольжение в секцию abut-section при скроле. Применять можно, если перезагрузка страницы была, а в экране браузера была не секция header */
    function revokeShowLogoFromHeader(){
        headerDecorLogo.classList.add('header-decor-logo--show');
        decorLogoMini.removeAttribute('style');
        decorLogoMini.classList.remove('decor-logo--transition-only-transform');
        decorLogoMini.classList.remove('decor-logo--scale'); 
        decorLogoMini.classList.remove('decor-logo--separation');
    }
    // появление верталета
    let helicopterImg = document.querySelector('.helicopter');
    if(helicopterImg){
       setTimeout(function(){
        helicopterImg.classList.remove('helicopter--hide');
       }, 400);
    }
    
    
    
    
    
    // фукнция отмечает пункт меню по попавшему в её атрибуты id (строка с id должна содержать #)
    function markCurrentMenuItem(idSection) {
        let nlMMItems = document.querySelectorAll('.main-menu li a');
        nlMMItems.forEach(item => {
            if (item.getAttribute('href') == idSection) {
                item.classList.add('current');
            } else {
                item.classList.remove('current');
            }
        });
    } 
    
    let stopMenuMarker = true; // переменная нужна, что бы был отмечен пункт меню, по которому кликнули, а не соседний ниже или выше появившийся в экране браузера.
    
    // переходы при клике на пункт меню
    let nlMainMenuItems = document.querySelectorAll('.main-menu li a');
    if (nlMainMenuItems.length > 0) {
        nlMainMenuItems.forEach(mItem => {
            mItem.addEventListener('click', function (e) {
                if(windowWidth > 950){
                    e.preventDefault();
                    let sectionId = this.getAttribute('href');
                    markCurrentMenuItem(sectionId)
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: sectionId,
                        ease: "power1"
                    }); 
                    stopMenuMarker  = false;
                    setTimeout(function(){
                        stopMenuMarker  = true;
                    }, 800);
                }else{
                    let burgerBtn = document.querySelector('.burger-btn');
                    let nav = document.querySelector('nav');  
                    setTimeout(function(){
                        burgerBtn.classList.remove('burger-btn--active');
                        nav.classList.remove('show-main-menu');
                    }, 300)
                    
                }
                
            })
        });
        
        
    }
    
    function scrollTrigger(selector) {
        let nlEls = document.querySelectorAll(selector)
        if (nlEls.length > 0) {
            nlEls.forEach(el => {
                addObserver(el)
            });
        }
    }
    
    let headerStoped = false;
    let aboutStoped = false;
    
    function addObserver(el) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // `entry.isIntersecting` will be true if the element is visible
                // console.log(entry.isIntersecting)
                // console.log(entry.target) 
                // console.log('------------');
    
                if (entry.isIntersecting && stopMenuMarker) { 
                    markCurrentMenuItem('#' + entry.target.id);
    
                    let st = document.querySelectorAll('.section-teset');
                    st.forEach(item => {
                        item.classList.remove('active');
                    });
                    entry.target.classList.add('active'); 
    
                    if(entry.target.classList.contains('header')){
                        showLogoFromHeader(); 
                        aboutStoped = true;
                    }
                    
                    if (entry.target.classList.contains('about-section')) { 
                        // если перезагрузка была в секции about-section, то сработает нижнее условие
                        if(aboutStoped){
                            if(!headerStoped){
                                decorLogoMini.removeAttribute('style');
                                decorLogoMini.classList.remove('decor-logo--transition-only-transform'); 
                                gsap.to(window, {
                                    duration: 0.8,
                                    scrollTo: ".about-section",
                                    ease: "power1"
                                });
                                setTimeout(function(){
                                    headerDecorLogo.classList.add('header-decor-logo--show');
                                }, 1500);
                            }
                            headerStoped = true;
                        }else{
                            revokeShowLogoFromHeader();
                        }  
                        
                    }
    
                } 
    
            })
        })
        // Adding the observer to the element
        observer.observe(el)
    }
    scrollTrigger('.section-trigger');
    }, 1000);
});
