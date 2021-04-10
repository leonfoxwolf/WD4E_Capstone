function expandMessage(){
    document.getElementById("welcoming_message_short").classList.add('index_paragraph_hidden');
    document.getElementById("welcoming_message_long").classList.remove('index_paragraph_hidden');  
}

function collapseMessage(){
    document.getElementById("welcoming_message_long").classList.add('index_paragraph_hidden');
    document.getElementById("welcoming_message_short").classList.remove('index_paragraph_hidden');  
}

function expandFooterMenu(){

    document.getElementById("footer_menu").classList.replace('footer_menu_collapsed', 'footer_menu_expanded');
    document.getElementById("footer_menu_button").setAttribute('onclick','collapseFooterMenu()');
    document.getElementById("footer_menu_button").style.backgroundImage = "url('img/nav/additional_icon_active.svg')";
}

function expandFooterMenuChild(){

    document.getElementById("footer_menu").classList.replace('footer_menu_collapsed', 'footer_menu_expanded');
    document.getElementById("footer_menu_button").setAttribute('onclick','collapseFooterMenuChild()');
    document.getElementById("footer_menu_button").style.backgroundImage = "url('../img/nav/additional_icon_active.svg')";
}

function expandFooterMenuOld(){

    document.getElementById("footer_menu").classList.replace('footer_menu_collapsed', 'footer_menu_expanded');
    document.getElementById("footer_menu_button").setAttribute('onclick','collapseFooterMenuOld()');
    document.getElementById("footer_menu_button").style.backgroundImage = "url('../../img/nav/additional_icon_active.svg')";
}

function collapseFooterMenu(){
    document.getElementById("footer_menu").classList.replace('footer_menu_expanded', 'footer_menu_collapsed');

    document.getElementById("footer_menu_button").setAttribute('onclick','expandFooterMenu()');
    document.getElementById("footer_menu_button").removeAttribute("style");
}

function collapseFooterMenuChild(){
    document.getElementById("footer_menu").classList.replace('footer_menu_expanded', 'footer_menu_collapsed');
    document.getElementById("footer_menu_button").setAttribute('onclick','expandFooterMenuChild()');
    document.getElementById("footer_menu_button").removeAttribute("style");
}

function collapseFooterMenuOld(){
    document.getElementById("footer_menu").classList.replace('footer_menu_expanded', 'footer_menu_collapsed');
    document.getElementById("footer_menu_button").setAttribute('onclick','expandFooterMenuOld()');
    document.getElementById("footer_menu_button").removeAttribute("style");
}

function expandNavMenu(){
    document.getElementById("nav_menu").classList.replace('nav_menu_collapsed', 'nav_menu_expanded');
    document.getElementById("menu_icon").setAttribute('onclick','collapseNavMenu()');
    document.getElementById("menu_icon").style.backgroundImage = "url('../img/nav/menu_button_activated.svg')";
    document.getElementById("menu_icon").style.filter = "drop-shadow(0px -5px 3px rgba(0, 0, 0, 0.25))";
    document.getElementById("menu_icon").style.transform = "rotate(180deg)";
}

function collapseNavMenu(){
    document.getElementById("nav_menu").classList.replace('nav_menu_expanded', 'nav_menu_collapsed');
    document.getElementById("menu_icon").setAttribute('onclick','expandNavMenu()');
    document.getElementById("menu_icon").removeAttribute("style");
}


