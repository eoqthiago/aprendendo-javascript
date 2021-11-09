const numero = Number(prompt('digite Um Numero: '));
const decimal = numero.toFixed(2);

const numerotitulo = document.getElementById('titulo');
numerotitulo.innerHTML = numero;
texto.innerHTML += `Raiz Quadrada ${Math.pow(numero, 1/2)} <br>`; 
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} <br>`;
texto.innerHTML += `é NaN ? ${Number.isNaN(numero)} <br>`;
texto.innerHTML += ` Arredondando para baixo: ${Math.floor(numero)} <br>`;
texto.innerHTML += ` Arredondando para baixo: ${Math.ceil(numero)} <br>`;
texto.innerHTML += ` Com Duas Casas Decimais ${decimal} <br>`;