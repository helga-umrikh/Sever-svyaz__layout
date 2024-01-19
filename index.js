document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-menu')
    const navigation = document.querySelector('.header__navigation')

    let clicked = false

    burgerBtn &&
        burgerBtn.addEventListener('click', function () {
            navigation && navigation.classList.toggle('is-active')
            clicked = !clicked
        })
})
