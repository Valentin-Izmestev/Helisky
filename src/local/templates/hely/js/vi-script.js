document.addEventListener('DOMContentLoaded', function () {
    function slideDown(el){
        el.style.height = 'auto';
        let elHeight = el.offsetHeight;
        el.style.height = '0px';
        setTimeout(function(){
            el.style.height = elHeight + 'px';
        }, 50);
        let interval = setInterval(function(){
            if(el.offsetHeight == elHeight){
               clearInterval(interval);
               el.style.height = 'auto';
               el.style.overflow = 'visible';
            }
        }, 300);
    }
    function slideUp(el){
        el.style.height = el.offsetHeight + 'px';
        el.style.overflow = 'hidden';
        setTimeout(function(){
            el.style.height = '0px';
        }, 100);
        let interval = setInterval(function(){
            if(el.offsetHeight == 0){
                clearInterval(interval);
                el.removeAttribute('style');
            }
        }, 300);
    };
    function toggleSlider(el){
        if(el.offsetHeight > 0){
            slideUp(el);
        }else{
            slideDown(el);
        }
    }

// мобильное меню
let burgerBtn = document.querySelector('.burger-btn');
let nav = document.querySelector('nav'); 
// let body = document.querySelector('body');
let scrollPosition = 0;
let body = document.body;

if(burgerBtn){
    burgerBtn.addEventListener('click', function(){ 
        burgerBtn.classList.toggle('burger-btn--active');
        nav.classList.toggle('show-main-menu'); 

        // if(body.classList.contains('fixed')){ 
        //     body.classList.remove('fixed');
        //     window.scrollTo(0, scrollPosition);
        // }else{
        //     scrollPosition = window.pageYOffset;
        //     setTimeout(function(){
        //         body.classList.add('fixed');
        //     }, 400);
        // } 

    })
}

// подключение слайдеров
    let parentSlider = document.querySelector('.partner-slider');
    const swiper = new Swiper(parentSlider, {
        // Optional parameters  
        slidesPerView: 5,
        loop: false,
        speed: 1000,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        watchOverflow: false,
        spaceBetween: 20,
        breakpoints: {
            300: {
                spaceBetween: 10,
                slidesPerView: 3,
                loop: true,
            },
            835: {
                spaceBetween: 20,
                slidesPerView: 3,
                loop: true,
            },
            1120: {
                spaceBetween: 20,
                slidesPerView: 4,
                loop: true,
            },
            1394: {
                spaceBetween: 20,
                slidesPerView: 5,
            }
        }

    });

    let heliSlider = document.querySelector('.heli-slider');
    const hSl = new Swiper(heliSlider, {
        // Optional parameters  
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        loopAdditionalSlides: 1,
        slidesPerGroup: 1,
        watchOverflow: false,
        spaceBetween: 10,
        breakpoints: { 
            310: {
                spaceBetween: 10,
                slidesPerView: 2, 
            },
            850: {
                spaceBetween: 10,
                slidesPerView: 3,
            }
        }

    });

    // работа спойлеров
    let nlSpoilerTrigger = document.querySelectorAll('.hely-spoiler__trigger');
    if(nlSpoilerTrigger.length > 0){
        nlSpoilerTrigger.forEach(item=>{
            item.addEventListener('click', function(){
                this.classList.toggle('hely-spoiler-trigger--active');
                let spoilerBody = this.nextElementSibling;
                toggleSlider(spoilerBody);
            });
        });
    }

    // подключаю choices
    let nlPCCoices = document.querySelectorAll('.choices-phone-key');
    let nlPCCoicesArr = [];
    if(nlPCCoices.length > 0){
        nlPCCoices.forEach(select=>{ 
            let currentSelect = new Choices(select, {
                noResultsText: 'Значение не найдено',
                loadingText: 'Загрузка...',
                placeholder: false, 
                searchEnabled: false,
                allowHTML: true,
            });
            nlPCCoicesArr.push(currentSelect)
        })
        
    }

    // подключаю маски
    let nlMaskTel = document.querySelectorAll('.mask-tel'); 
    if(nlMaskTel.length > 0){
        nlMaskTel.forEach(item=>{
            let mask = IMask(item, {  mask: '000 000 000' });
        });
    } 
    
});