(function () {
    // * UI elements
    const body = document.body
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')
    const menuButtons = document.querySelectorAll('.menu__link')
    const menuIcon = document.querySelector('.header__menu-icon')
    const toTopBtn = document.querySelector('.to-top-btn')
    const pricingBlock = document.querySelector('.pricing-block')

    // ! function calling
    header.addEventListener('click', onClickHandler, false)
    window.addEventListener('scroll', function () { userScroll() }, false)
    toTopBtn.addEventListener('click', onToTopBtnClickHandler, false)
    pricingBlock.addEventListener('click', pricingBlockHandler, false)

    // * header handler
    function onClickHandler({ target }) {
        if (target.classList.contains('menu__link') && menu.classList.contains('menu_active')) {
            menu.classList.remove('menu_active')
            menuIcon.classList.remove('header__menu-icon_active')
            setBodyScroll(menuIcon)
        }
        else if (target.classList.contains('header__menu-icon')) {
            target.classList.toggle('header__menu-icon_active')
            menu.classList.toggle('menu_active')
            setBodyScroll(target)
        }
    }

    // * added to body data attribute
    function setBodyScroll(menuIcon) {
        if (menuIcon.classList.contains('header__menu-icon_active')) {
            body.dataset.bodyScroll = false
        } else {
            body.dataset.bodyScroll = true
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

    // * pricing block
    function pricingBlockHandler(event) {
        if (event.target.classList.contains('pricing-block__button')) {
            event.preventDefault()
        }
    }

    const popupContent = {
        mainText: 'This website uses cookies in order to offer you the most relevant information. Please accept cookies for optimal performance.',
        blueButtonText: 'Yes,accept cookies',
        redButtonText: 'Ignore, and close',
        alertButtontText: 'Ok'
    }

    // !popup template
    function popupTamplate({ mainText, blueButtonText, redButtonText, alertButtontText }, type) {
        let popupContentElements = []

        // perent element
        const popup = document.createElement('div')
        popup.classList.add('popup')
        popup.classList.add('popup_open')

        // popup body
        const popupBody = document.createElement('div')
        popupBody.classList.add('popup__body')

        // popup content
        const popupContent = document.createElement('div')
        popupContent.classList.add('popup__content')

        //  popup text
        const popupText = document.createElement('p')
        popupText.classList.add('popup__text')
        popupText.textContent = mainText
        popupContentElements.push(popupText)

        // popup close btn
        const popupCloseBtn = document.createElement('img')
        popupCloseBtn.classList.add('popup__close-btn')
        popupCloseBtn.src = 'images/icons/x-circle.svg'
        popupContentElements.push(popupCloseBtn)

        // popup buttons
        const popupButtons = document.createElement('div')
        popupButtons.classList.add('popup__buttons')
        popupContentElements.push(popupButtons)

        if (type === 'cookies') {
            const popupBlueButton = document.createElement('button')
            popupBlueButton.classList.add('button')
            popupBlueButton.classList.add('popup__button')
            popupBlueButton.classList.add('popup__button_blue')
            popupBlueButton.textContent = blueButtonText

            const popupRedButton = document.createElement('button')
            popupRedButton.classList.add('button')
            popupRedButton.classList.add('popup__button')
            popupRedButton.classList.add('popup__button_red')
            popupRedButton.textContent = redButtonText

            popupButtons.appendChild(popupBlueButton)
            popupButtons.appendChild(popupRedButton)
        }
        else {
            const popupBlueButton = document.createElement('button')
            popupBlueButton.classList.add('button popup__button popup__button_blue')
            popupBlueButton.textContent = alertButtontText

            popupButtons.appendChild(popupBlueButton)
        }

        popupContentElements.forEach(node => {
            popupContent.appendChild(node)
        })

        popupBody.appendChild(popupContent)
        popup.appendChild(popupBody)

        return popup
    }

    function renderPopupWindow(node = popupTamplate(popupContent, 'cookies')) {
        const page = document.querySelector('.page')
        page.insertAdjacentElement('afterend', node)
        node.addEventListener('click', onPopupClickHandler, false)
        body.dataset.bodyScroll = false
    }

    window.setTimeout(renderPopupWindow, 1000)

    // * popup window handler
    function onPopupClickHandler({ target }) {
        if (target.classList.contains('popup__button') || target.classList.contains('popup__close-btn')) {
            const popup = document.querySelector('.popup')
            popup.classList.remove('popup_open')
            body.dataset.bodyScroll = true
        }
    }

})()