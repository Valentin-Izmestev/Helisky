"user strict"
document.addEventListener('DOMContentLoaded', function(){
    //Работа модальных окон 

    function showModal(modalId, modalTitle, modalText, managerMessage){
        let modal = document.querySelector('#'+modalId);
        // let greatShadow = document.querySelector('.great-shadow');
        let greatShadow = modal.closest('.great-shadow');
        modal.setAttribute('aria-hidden', 'false');
        greatShadow.classList.add('show');
        setTimeout(function(){
            modal.classList.add('show');
        }, 200);
    }


    //потребуется если нужен буде переход из одной модалки в другую. Сейчас не испольуется.
    function toggleModal(modalId){
        let modal = document.querySelector('#'+modalId);
        let allModal = document.querySelectorAll('.modal');
        allModal.forEach(item=>{
            item.classList.remove('show');
            item.setAttribute('aria-hidden', 'true');
        });

        setTimeout(function(){
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('show');
        }, 200);


    }

    function hideModal(){
        let greatShadow = document.querySelectorAll('.great-shadow');
        let nlModals = document.querySelectorAll('.modal');
        let nlModalMessage = document.querySelectorAll('.modal__message');

        nlModals.forEach(item=>{
            item.classList.remove('show');
            item.setAttribute('aria-hidden', 'true');
            ;
        });
        nlModalMessage.forEach(item=>{
            item.classList.remove('show');
        });
        setTimeout(function(){
            greatShadow.forEach(gh=>{
                gh.classList.remove('show');
            })
        }, 200);

    }


    let nlShowModalBtn = document.querySelectorAll('.show-modal-btn'); 
    if(nlShowModalBtn.length > 0){
        nlShowModalBtn.forEach(item=>{
            item.addEventListener('click', function(){ 
                showModal(this.getAttribute('data-modal-id'))
            });
        });
    }

    let greatShadow = document.querySelectorAll('.great-shadow');
    if(greatShadow.length > 0){
        greatShadow.forEach(gh=>{
            gh.addEventListener('click', function(e){
                console.log(e.target.className)
                if(e.target.className == 'great-shadow show'){
                    hideModal();
                }
            });
        });
    }

    let closeModalBtn = document.querySelectorAll('.modal__close-btn');

    if(closeModalBtn.length > 0){
        closeModalBtn.forEach(btn=>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                hideModal();
            })
        })
    }



})
