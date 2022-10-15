export class Api {
    static async getMedalhas () {
        let medalhas = await fetch('https://kenzie-olympics.herokuapp.com/paises')
        .then(resp => resp.json())
        console.log(medalhas)
        return medalhas
    }
}