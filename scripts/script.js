(function () {
    // * UI elements
    const body = document.body
    const header = document.querySelector('.header')

    // ! function calling
    header.addEventListener('mouseover', onMouseOverHandler, false)
    header.addEventListener('mouseout', onMouseOutHandler, false)
    header.addEventListener('click', onClickHandler, false)

    // * header handler
    function onMouseOverHandler({ target }) {
        if (target.classList.contains('menu__link')) {
            target.classList.add('menu__link_active')
        }
    }

    function onMouseOutHandler({ target }) {
        if (target.classList.contains('menu__link')) {
            target.classList.remove('menu__link_active')
        }
    }

    // * menu icon handler 
    function onClickHandler({ target }) {
        if (target.classList.contains('header__menu-icon')) {
            target.classList.toggle('header__menu-icon_active')
        }
    }

})()