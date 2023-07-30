const menu = document.querySelector(".navbar--right-side")
const menuButton = document.querySelector(".navbar--container button.menu");


menuButton.addEventListener('click', ()=>{
    var isHidden = menuButton.getAttribute('data-hidden');

    if (isHidden == "true"){
        menu.classList.add('unhide')
        menuButton.setAttribute('data-hidden', 'false')
    } else{
        menu.classList.remove('unhide')
        menuButton.setAttribute('data-hidden', 'true')
    }
})