let Nav_Toggle = document.querySelector('.Nav_Toggle');
let Nav_Toggle_Icon = document.querySelector('.Nav_Toggle ion-icon');
let Nav_Menu = document.querySelector('.Nav_Menu');
let Nav_Links = document.querySelectorAll('.Nav_Link');

Nav_Toggle.addEventListener('click', () => {    
    Nav_Menu.classList.toggle('active');
    Nav_Toggle_Icon.setAttribute('name', 
     Nav_Menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
    );
});

Nav_Links.forEach(link => {
    link.addEventListener('click', () => {
        Nav_Menu.classList.remove('active');
        Nav_Toggle_Icon.setAttribute('name', 'menu-outline');
    });
});

document.onclick = function(e){
    if(!Nav_Toggle.contains(e.target) && !Nav_Menu.contains(e.target)){
        Nav_Menu.classList.remove('active');    
        Nav_Toggle_Icon.setAttribute('name', 'menu-outline');     
    }    
};