const nome = 'luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM);

let anoNascimento;
anoNascimento = 2021 - 30;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`); 
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc}`);
console.log(`Nasceu em ${anoNascimento}`);




