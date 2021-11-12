/*

&& -> VERDADEIRO

|| -> FALSO

*/

const hora = 1;

if (hora > 0 && hora <= 11) {
    console.log('Bom Dia.');
} else if (hora >= 12 && hora <= 17 ) {
    console.log('boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}