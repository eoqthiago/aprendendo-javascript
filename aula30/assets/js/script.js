/* 
const data = new Date();
const h1 = document.querySelector('.container h1');


function datehours(diaSemana) {
    let diaSeman;

    switch(diaSemana) {
    case 0: diaSeman = 'Domingo'; return diaSeman;
    case 1: diaSeman = 'segunda'; return diaSeman;
    case 2: diaSeman = 'terça'; return diaSeman;
    case 3: diaSeman = 'quarta'; return diaSeman;
    case 4: diaSeman = 'quinta'; return diaSeman;
    case 5: diaSeman = 'sexta'; return diaSeman;
    case 6: diaSeman = 'sabado'; return diaSeman;

    default:
        diaSeman = '';
        return diaSeman;
            
    }
    
    

}

function dateMes(numeroMes) {
    let nomeMes;

    switch(numeroMes) {
    case 0: nomeMes = 'janeiro'; return nomeMes;
    case 1: nomeMes = 'fevereiro'; return nomeMes;
    case 2: nomeMes = 'março'; return nomeMes;
    case 3: nomeMes = 'abril'; return nomeMes;
    case 4: nomeMes = 'maio'; return nomeMes;
    case 5: nomeMes = 'junho'; return nomeMes;
    case 6: nomeMes = 'julho'; return nomeMes;
    case 7: nomeMes = 'agosto'; return nomeMes;
    case 8: nomeMes = 'setembro'; return nomeMes;
    case 9: nomeMes = 'outubro'; return nomeMes;
    case 10: nomeMes = 'novembro'; return nomeMes;
    case 11: nomeMes = 'dezembro'; return nomeMes;
    }
   

    
    

}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = datehours(diaSemana);
    const nomeMes = dateMes(numeroMes);

    return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`+
    ` Horario: ${data.getHours()}:${data.getMinutes()}`
     
     );
}

h1.innerHTML = criaData(data); */


const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    //timeStyle: 'short'
    
    
};


h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);




