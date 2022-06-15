// Variaveis do projeto
let home = document.getElementById('navHome');
let menu = document.getElementById('navMenu');
let delivery = document.getElementById('navDelivery');
let btn =  document.getElementById('btn-responsive');
let teste = document.getElementById('menuResponsivo')

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
    teste.classList.toggle('active')
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