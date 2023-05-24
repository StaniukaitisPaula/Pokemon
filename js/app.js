"use strict";

import "./router.js";

const createType = (type) => {
    const card = document.createElement('card-pokemon')
    card.titulo = type.name
    card.imagem = `/img/${type.name}.png`

    return card
}


export const loadType = async () => {
    const url = 'https://pokeapi.co/api/v2/type'

    const response = await fetch(url)
    const data = await response.json()
    const type = await data.results
    const container = document.getElementById('container')
    const cards = type.map(createType)
  
    container.replaceChildren(...cards)
}

const createPokemon = (type) => {
    const card = document.createElement('card-pokemon')
    card.titulo = type.name
    card.imagem = `/img/${type.name}.png`

    return card
}


export const loadPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const response = await fetch(url)
    const data = await response.json()
    const type = await data.results
    const container = document.getElementById('container')
    const cards = type.map(createPokemon)
  
    container.replaceChildren(...cards)
}
const createRegion = (type) => {
    const card = document.createElement('card-pokemon')
    card.titulo = type.name
    card.imagem = `/img/${type.name}.png`

    return card
}


export const loadRegion = async () => {
    const url = 'https://pokeapi.co/api/v2/region/'

    const response = await fetch(url)
    const data = await response.json()
    const type = await data.results
    const container = document.getElementById('container')
    const cards = type.map(createRegion)
  
    container.replaceChildren(...cards)
}