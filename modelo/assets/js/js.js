function message(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    const perfil = [];

    function recebeEvento(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        perfil.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(perfil);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`

    }
    form.addEventListener('submit', recebeEvento);
}