const menuBtn = document.querySelector('[data-menuBtn]');
const lista = document.querySelector('#mobile__list');

menuBtn.addEventListener('click', () => {
    abrirMenu();
})

function abrirMenu(){
    if(lista.style.display != "block"){
    lista.style.display = "block";
    menuBtn.src = "./assets/img/menu-open.svg"
    }else{
    lista.style.display = "none";
    menuBtn.src = "./assets/img/menu-close.svg"
    }

    lista.classList.toggle("open");

}