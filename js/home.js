const btnCloseMenu = document.getElementById('btnCloseMenu');
const btnOpenMenu = document.getElementById('btnOpenMenu');
const sectionMenuMobile = document.getElementById('sectionMenuMobile');


btnOpenMenu.addEventListener('click', ()=>{
    sectionMenuMobile.classList.remove('hidden')
    setTimeout(() => {
        sectionMenuMobile.classList.remove('-translate-x-full')
    }, 10);
})

btnCloseMenu.addEventListener('click', ()=>{
    sectionMenuMobile.classList.add('-translate-x-full')
    setTimeout(() => {
        sectionMenuMobile.classList.add('hidden')
    }, 300);
})
