import data from './data.js'

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

function renderCards(data) {
    const cardsContainer = document.querySelector('.services__cards-container')

    data.forEach((item, index) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('key', index)

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card__container')

        const cardImage = document.createElement('img')
        cardImage.classList.add('card__image')
        cardImage.src = item.src
        cardImage.alt = 'пример камеры'

        const cardTitle = document.createElement('p')
        cardTitle.classList.add('card__title')
        cardTitle.innerText = item.title

        const cardSlogan = document.createElement('p')
        cardSlogan.classList.add('card__slogan')
        cardSlogan.innerText = item.slogan

        const bottomContainer = document.createElement('div')

        const cardPrice = document.createElement('div')
        cardPrice.classList.add('card__price')

        const cardPriceNumber = document.createElement('p')
        cardPriceNumber.classList.add('card__price-number')
        cardPriceNumber.innerText = item.price

        const priceTitleContainer = document.createElement('div')

        const currencyTitle = document.createElement('p')
        currencyTitle.innerText = 'руб'
        const periodTitle = document.createElement('p')
        periodTitle.innerText = 'мес'

        const cardButton = document.createElement('button')
        cardButton.classList.add('card__button');
        cardButton.classList.add('button');
        cardButton.innerText = 'Узнать подробнее'

        cardsContainer.appendChild(card)
        card.appendChild(cardContainer)
        cardContainer.appendChild(cardImage)
        cardContainer.appendChild(cardTitle)
        cardContainer.appendChild(cardSlogan)
        cardContainer.appendChild(bottomContainer)
        bottomContainer.appendChild(cardPrice)
        bottomContainer.appendChild(cardButton)
        cardPrice.appendChild(cardPriceNumber)
        cardPrice.appendChild(priceTitleContainer)
        priceTitleContainer.appendChild(currencyTitle)
        priceTitleContainer.appendChild(periodTitle)

        console.log('cards renred')
    })

    console.log('rendering is finished')
}


document.addEventListener('DOMContentLoaded', function () {
    renderCards(data)
})
