(function () {
    // * UI elements
    const body = document.body
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')
    const menuButtons = document.querySelectorAll('.menu__link')
    const toTopBtn = document.querySelector('.to-top-btn')

    // ! function calling
    header.addEventListener('click', onClickHandler, false)
    window.addEventListener('scroll', function () { userScroll() }, false)
    toTopBtn.addEventListener('click', onToTopBtnClickHandler, false)

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

    // * render to top button
    function userScroll() {
        if (body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTopBtn.classList.add('to-top-btn_active')
        } else {
            toTopBtn.classList.remove('to-top-btn_active')
        }
    }

    // * to top button handler
    function onToTopBtnClickHandler(e) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


})()