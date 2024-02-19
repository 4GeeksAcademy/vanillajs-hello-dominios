let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generadorDeDominios(pronouns, adjectives, nouns) {
    let domainNames = [];
    for (let i = 0; i < pronouns.length; i++) {
        for (let j = 0; j < adjectives.length; j++) {
            for (let k = 0; k < nouns.length; k++) {
                let domainName = pronouns[i] + adjectives[j] + nouns[k] + ".com";
                domainNames.push(domainName);
            }
        }
    }
    return domainNames;
}

let domainNames = generadorDeDominios(pronoun, adj, noun);
console.log(domainNames.join("\n"));
