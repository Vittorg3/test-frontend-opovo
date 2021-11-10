window.onload = () => {
    OpenAndCloseMenuMobile();
};

function OpenAndCloseMenuMobile() {
    const menu_mobile_button = document?.getElementById('menu-mobile');
    const menu_mobile_wrapper = document?.getElementById('menu-mobile-wrapper');

    const nav_menu_mobile = document?.getElementById('menu-option');

    menu_mobile_button.addEventListener('click', function() {
       if(menu_mobile_wrapper.style.display === 'flex') {
            menu_mobile_wrapper.style.display = 'none';
       } else {
            menu_mobile_wrapper.style.display = 'flex';
       }
    });
};
