const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Rodrigues',
    idade: 17,
    endereco: {
        rua: 'Av feia',
        numero: 222
    }
};
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const { endereco: { numero } } = pessoa;

console.log(numero);