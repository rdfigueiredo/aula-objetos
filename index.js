//Aula 07 Objetos
/* Exercício 01
● Crie um objeto que represente um filme. Ele deve ter
dados da direção, o nome, o ano de lançamento, uma
lista com o elenco e uma propriedade que diga se você já
viu ou não.
● Acesse e imprima no console cada uma das
propriedades: metade usando notação do ponto e a outra
metade com notação de colchetes */


const filme = {
    nome: "O Senhor dos Anéis: A Sociedade do Anel",
    diretor: "Peter Jackson",
    anoDeLançamento: 2001,
    elenco: ["Elijah Wood", "Ian McKellen", "Sean Astin", "Orlando Bloom", "Viggo Mortensen", "Cate Blanchett", "Sean Bean"],
    assistido: function() {
        console.log("Já assistido")
    }
}

console.log(filme.nome)
console.log(filme.diretor)
console.log(filme["anoDeLançamento"])
console.log(filme["elenco"])
console.log(filme["assistido"])



/* Exercício 02
● Crie um objeto que represente uma pessoa. Essa pessoa
precisa ter nome, idade, gênero musical preferido.
● Acesse e imprima no console as propriedades desse
objeto, seguindo o modelo abaixo:
"O nome da pessoa é ___, ela tem ___ anos e gosta muito de ___." */


const pessoa = {
    nome: "Rodrigo",
    idade: 32,
    generoMusical: "R&B"
}

console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)



/* Exercício 03
● Adicione ao objeto do exercício 1 uma lista com os nomes
dos personagens do filme.
● Acesse e imprima no console cada pessoa do elenco junto
com seu respectivo personagem
● Altere a primeira pessoa do elenco por "Xuxa".
● Imprima no console todas as propriedades do objeto. */

//retirar exercício 01 dos 'comentários' para que funcione


filme.personagens = ["Frodo", "Gandalf", "Sam", "Legolas", "Aragorn", "Galadriel", "Boromir"]

console.log(filme.elenco[0], filme.personagens[0])
console.log(filme.elenco[1], filme.personagens[1])
console.log(filme.elenco[2], filme.personagens[2])
console.log(filme.elenco[3], filme.personagens[3])
console.log(filme.elenco[4], filme.personagens[4])
console.log(filme.elenco[5], filme.personagens[5])
console.log(filme.elenco[6], filme.personagens[6])

filme.personagens[0] = "Xuxa"

console.log(filme.personagens)



/* Exercício 04 
● Crie uma função que receba um objeto de pessoa (Exercício 2) e
crie um novo objeto mantendo as propriedades originais e
acrescentando:
○ Uma propriedade com a lista de suas comidas preferidas;
○ Uma propriedade que seja um objeto, com nome e idade, para
representar o melhor amigo da pessoa.
● Ainda na função, imprima no console as propriedades desse objeto
seguindo o modelo abaixo:
"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu melhor amigo se chama ___ e tem ___ anos" */


function pessoas(pessoa, novaPessoa) {
    return pessoa[novaPessoa]
}

const pessoa = {
    nome: "Rodrigo",
    idade: 32,
    generoMusical: "R&B",
    comidasPreferidas: ["arroz", "bife", "batata-frita"],
}

const novaPessoa = {
    ...pessoa,
    nome: "Marcelo",
    idade: 34,
}

console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa.comidasPreferidas[0]}, ${pessoa.comidasPreferidas[1]} e ${pessoa.comidasPreferidas[2]}. 
Seu melhor amigo se chama ${novaPessoa.nome} e tem ${novaPessoa.idade} anos.`)



// Exercício de Interpretação de código 01


const filme = {
    nome: "Auto da Compadecida", 
    ano: 2000, 
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        "Virginia Cavendish"
        ], 
    transmissoesHoje: [
        {canal: "Telecine", horario: "21h"}, 
        {canal: "Canal Brasil", horario: "19h"}, 
        {canal: "Globo", horario: "14h"}
        ]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish (lenght total 4 - 1 = 3, portanto imprime nome da posição 3 (Virginia))
console.log(filme.transmissoesHoje[2]) //canal: "Globo", horario: "14h"



// Exercício de Interpretação de código 02


const cachorro = {
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //Juca
console.log(gato) //Juba
console.log(tartaruga) //Jubo
//a sintaxe dos 3 pomtos copia o objeto referido



// Exercício de Interpretação de código 03


function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) //undefined 


// Exercício de escrita de código 01
/* a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: ["Vitinho", "Vitão", "Vit"]
}

Exemplo de saída
"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit" */


const nomeApelidos = {
    nome: "Jurema", 
    apelidos: ["Ju", "Juju", "Jujuba"],
}

function fraseImpressao(pessoal) {
    const imprimirFrase = console.log(`Eu sou ${pessoal.nome}, mas pode me chamar de ${pessoal.apelidos[0]}, ${pessoal.apelidos[1]} ou ${pessoal.apelidos[2]}.`)
    return imprimirFrase
}

fraseImpressao(nomeApelidos)


/* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. 
Depois, chame a função feita no item anterior passando como argumento o novo objeto */


const nomeApelidoDiferente = { 
    ...nomeApelidos,
    apelidos: ["Jure", "Ema", "Mana"]
}

fraseImpressao(nomeApelidoDiferente)


// Exercício de escrita de código 02
/* a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. */

/* b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão` */


const pessoaUm = {
    nome: "Rodrigo", 
    idade: 32, 
    profissao: "Mecanico"
}
const pessoaDois = {
    nome: "Bruna",
    idade: 30,
    profissao: "Nail Designer"
}

function dados(pessoa) {
    const impressao = [
        pessoa.nome,
        pessoa.nome.length,
        pessoa.idade,
        pessoa.profissao,
        pessoa.profissao.length,
    ]
    return impressao
}

console.log(dados(pessoaUm))
console.log(dados(pessoaDois))


// Exercício de escrita de código 03
/* a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho` */

/* b) Crie três novos objetos que representem frutas de um sacolão. 
Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`) */

/* c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
Invoque essa função passando os três objetos criados. */

/* d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** */


let carrinho = []

const frutaUm = {
    nome: "uva",
    disponibilidade: true
}

const frutaDois = {
    nome: "maçã",
    disponibilidade: true
}

const frutaTres = {
    nome: "laranja",
    disponibilidade: true
}

function meuCarrinho(frutas) {
    carrinho.push(frutas)
}

meuCarrinho(frutaUm)
meuCarrinho(frutaDois)
meuCarrinho(frutaTres)

console.log(carrinho)