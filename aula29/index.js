
function getdat (diaSemana) {
    let diaSemanaT;

    switch(diaSemana) {
    case 0: diaSemanaT = 'Domingo'; return diaSemanaT;
    case 1: diaSemanaT = 'segunda'; return diaSemanaT;
    case 2: diaSemanaT = 'terça'; return diaSemanaT;
    case 3: diaSemanaT = 'quarta'; return diaSemanaT;
    case 4: diaSemanaT = 'quinta'; return diaSemanaT;
    case 5: diaSemanaT = 'sexta'; return diaSemanaT;
    case 6: diaSemanaT = 'sabado'; return diaSemanaT;

    default:
        diaSemanaT = '';
        return diaSemanaT;
            
    }

    
}


const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();

const diaSemanaT = getdat(diaSemana);

console.log(diaSemana, diaSemanaT);







