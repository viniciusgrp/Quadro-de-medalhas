import { Dom } from "./dom.js";
import { Api } from "./requests.js";

class Pagina {
    static async renderMedalhas() {
        const medalhas = await Api.getMedalhas()
        console.log(medalhas)
        medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
    }

    static async procurarPais () {
        const medalhas = await Api.getMedalhas()

        let btnPesquisa = document.getElementById('btnPesquisa')
        btnPesquisa.addEventListener('click', function () {
            const input = document.getElementById('pesquisarPais')

            const pais = medalhas.filter(e => e.country.toLowerCase().includes(input.value.toLowerCase()))
            console.log(pais)
            let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            pais.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
        })
    }

    static async ordenarOuro () {
        const medalhas = await Api.getMedalhas()
        medalhas.sort(function (a, b) {
            return a.medal_gold > b.medal_gold? -1 : 1
        })

        let botao = document.getElementById('btnOuro')
        botao.addEventListener('click', function () {
            let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
            medalhas.reverse()
        })
    }

    static async ordenarPrata () {
        const medalhas = await Api.getMedalhas()
        medalhas.sort(function (a, b) {
            return a.medal_silver > b.medal_silver? -1 : 1
        })

        let botao = document.getElementById('btnPrata')
        botao.addEventListener('click', function () {
            console.log('oi')
            let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
            medalhas.reverse()
        })
    }

    static async ordenarBronze () {
        const medalhas = await Api.getMedalhas()
        medalhas.sort(function (a, b) {
            return a.medal_bronze > b.medal_bronze? -1 : 1
        })

        let botao = document.getElementById('btnBronze')
        botao.addEventListener('click', function () {
            let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
            medalhas.reverse()
        })
    }

    static async ordenarTotal () {
        const medalhas = await Api.getMedalhas()
        medalhas.sort(function (a, b) {
            return a.medal_bronze + a.medal_silver + a.medal_gold > b.medal_bronze + b.medal_silver + b.medal_gold ? -1 : 1
        })
        let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
            medalhas.reverse()

        let botao = document.getElementById('btnTotal')
        botao.addEventListener('click', function () {
            let tabela = document.getElementById('listaPaises')
            tabela.innerHTML = ''
            medalhas.forEach((elem, index) => Dom.renderMedalhas(elem, index+1))
            medalhas.reverse()
        })
    }
}

Pagina.renderMedalhas()
Pagina.procurarPais()
Pagina.ordenarOuro()
Pagina.ordenarPrata()
Pagina.ordenarBronze()
Pagina.ordenarTotal()