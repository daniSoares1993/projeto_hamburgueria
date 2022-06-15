// Variaveis do projeto
let home = document.getElementById('navHome');
let menu = document.getElementById('navMenu');
let delivery = document.getElementById('navDelivery');
let btn =  document.getElementById('btn-responsive');
let teste = document.getElementById('menuResponsivo');
let bannerLeft1 = document.getElementById('bannerLeftTopo1');
let bannerLeft2 = document.getElementById('bannerLeftTopo2');
let bannerLeft3 = document.getElementById('bannerLeftTopo3');
let body = document.getElementById('indexHtml');

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
    teste.classList.toggle('active')
    bannerLeft1.classList.toggle('active');
    bannerLeft2.classList.toggle('active');
    bannerLeft3.classList.toggle('active');
    body.classList.toggle('active');
})




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