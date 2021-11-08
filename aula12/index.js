let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const resultado1 = varA.replace(varA,varB);
const resultado2 = varB.replace(varB,varC);
const resultado3 = varC.replace(varC,varA);
console.log(`${resultado1} ${resultado2} ${resultado3}`);
 