// Variaveis do projeto
let home = document.getElementById('navHome');
let menu = document.getElementById('navMenu');
let delivery = document.getElementById('navDelivery');
let btn =  document.getElementById('btn-responsive');
let menuResponsivo = document.getElementById('menu-responsivo');


// interatividade do menu com a pagina

home.addEventListener('click',()=>{
    document.getElementById('sessaoTopo').scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})

menu.addEventListener('click',()=>{
    document.getElementById('sessao4Cardapio').scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})

delivery.addEventListener('click',()=>{
    document.getElementById('deliveryContainer').scrollIntoView({behavior:"smooth"});
    event.preventDefault();
})

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')

    if(menuResponsivo.style.display != 'block'){
        menuResponsivo.style.display = 'block';
        menuResponsivo.style.zIndex = '0'
        btn.style.zIndex = '1'
    }
    else{
        alert("erro")
    }
})