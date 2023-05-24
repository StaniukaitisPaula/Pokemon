"use strict";
import './app.js'
import { loadType } from './app.js'
import { loadPokemon } from './app.js'
import { loadRegion } from './app.js'


const routes = {

    "/home": "/pages/home.html",
    "/type": "/pages/type.html",
    "/pokemons": "/pages/pokemons.html"

};

const route = async() => {
    window.event.preventDefault();
    window.history.pushState({}, "", window.event.target.href);
    const path = window.location.pathname;
    console.log(window.event.target.href);
    const route = routes[path];


    const response = await fetch(route);
    const html = await response.text();


    document.getElementById("root").innerHTML = html;



 
    if (path == '/type') {
        loadType()
    }else if (path == '/pokemons') {
        loadPokemon()
    }else if (path == '/home') {
        loadRegion()
    }

};

window.route = route;