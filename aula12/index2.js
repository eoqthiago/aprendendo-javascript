let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const resultado1 = varA.replace(varA,varB) + varB.replace(varB,varC) + varC.replace(varC,varA);

console.log(`${resultado1}`);