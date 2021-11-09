const numero = prompt('digite Um Numero: ');
const decimal = Math.round(numero).toFixed(2);

document.body.innerHTML += `Raiz Quadrada ${Math.pow(numero, 1/2)} <br>`; 
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} <br>`;
document.body.innerHTML += `é NaN ? ${Number.isNaN(numero)} <br>`;
document.body.innerHTML += ` Arredondando para baixo: ${Math.floor(numero)} <br>`;
document.body.innerHTML += ` Arredondando para baixo: ${Math.ceil(numero)} <br>`;
document.body.innerHTML += ` Com Duas Casas Decimais ${decimal} <br>`;