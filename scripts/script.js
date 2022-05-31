(function () {
    // * UI elements
    const body = document.body
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')
    const menuButtons = document.querySelectorAll('.menu__link')

    // ! function calling
    header.addEventListener('click', onClickHandler, false)

    // * header handler
    function onClickHandler({ target }) {
        if (target.classList.contains('menu__link')) {
            target.classList.add('menu__link_active')

            Array.from(menuButtons).forEach(link => {
                if (link !== target) {
                    link.classList.remove('menu__link_active')
                }
            })

        } else if (target.classList.contains('header__menu-icon')) {
            target.classList.toggle('header__menu-icon_active')
            menu.classList.toggle('menu_active')
        }
    }

})()