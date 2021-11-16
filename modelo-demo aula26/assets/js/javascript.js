// caputurar evento dde submit do form

const form = document.querySelector('#form');

// "e" de evento

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altuta');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    

    console.log(peso, altura);

});

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

}