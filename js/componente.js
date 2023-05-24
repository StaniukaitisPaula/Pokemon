'use strict'

class card extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.imagem = null
    this.titulo = 'Nome'




  }

  static get observedAttributes() {
    return [
      'imagem',
      'titulo'

    ]
  }


  attributeChangedCallback(nameAttr, oldValue, newValue) {
    this[nameAttr] = newValue
  }

  connectedCallback() {
    this.shadow.appendChild(this.component())
    this.shadow.appendChild(this.styles())
  }

  styles() {
    const css = document.createElement('style')
    css.textContent = `

    .card {
      margin: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 200px;
      cursor: pointer;
      transition: all 0.5s;
      position: relative;
      overflow: hidden;
      color: #fff;
      border-radius: 20px;
    }
    
    .card-cover {
      position: absolute;
      height: 200px;
      width: 300px;
      z-index: -1;
      filter: brightness(80%);
    }
    
    .card__title {
      letter-spacing: 0.25rem;
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;

    }

   
 
      
        `

    return css
  }

  component() {
    const card = document.createElement('div')
    card.classList.add('card')

    const card__cover = document.createElement('img')
    card__cover.classList.add('card-cover')
    card__cover.src = this.imagem

    const card__text = document.createElement('div')
    card__text.classList.add('text')

    const text__title = document.createElement('span')
    text__title.classList.add('card__title')
    text__title.textContent = this.titulo

  

    card__text.append(text__title)
    card.append(card__cover, card__text)

    return card
  }
}

customElements.define('card-pokemon', card)