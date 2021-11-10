function sendmessage(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    //form.onsubmit = function (evento){
    //    evento.preventDefault();
    //    alert(`Clique em "OK" Para Enviar`);
    //    console.log('Foi Enviado');
    //};

    const perfil = [];
    


    function recebeEventoForm(evento){
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

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}
         ${peso.value} ${altura.value} </p>`;
    } 

    form.addEventListener('submit', recebeEventoForm);


}
sendmessage();