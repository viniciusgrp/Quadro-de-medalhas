export class Dom {
    static renderMedalhas (data, index) {
        let tabela = document.getElementById('listaPaises')
        console.log(tabela, data)

        let linha = document.createElement('tr')

        let posicao = document.createElement('td')
        posicao.classList.add('tabelaPosicao')
        let textPosicao = document.createElement('p')
        textPosicao.innerText = index
        posicao.appendChild(textPosicao)

        let pais = document.createElement('td')
        pais.classList.add('tabelaPais')
        let bandeira = document.createElement('img')
        bandeira.classList.add('bandeira')
        bandeira.src = data.flag_url
        pais.appendChild(bandeira)
        let textPais = document.createElement('p')
        textPais.innerText = data.country
        pais.appendChild(textPais)

        let medalha = document.createElement('td')
        medalha.classList.add('tabelaMedalha')
        let textMedalha = document.createElement('p')
        textMedalha.innerText = data.medal_gold
        medalha.appendChild(textMedalha)

        let medalhaPrata = document.createElement('td')
        medalhaPrata.classList.add('tabelaMedalha')
        let textMedalhaPrata = document.createElement('p')
        textMedalhaPrata.innerText = data.medal_silver
        medalhaPrata.appendChild(textMedalhaPrata)

        let medalhaBronze = document.createElement('td')
        medalhaBronze.classList.add('tabelaMedalha')
        let textMedalhaBronze = document.createElement('p')
        textMedalhaBronze.innerText = data.medal_bronze
        medalhaBronze.appendChild(textMedalhaBronze)

        let total = document.createElement('td')
        total.classList.add('tabelaMedalha')
        let totalText = document.createElement('p')
        totalText.innerText = data.medal_gold + data.medal_gold + data.medal_silver
        total.appendChild(totalText)

        linha.append(posicao, pais, medalha, medalhaPrata, medalhaBronze, total)
        tabela.appendChild(linha)
    }
}