
// função que pega o nome da pessoa e deixa apenas as duas primeiras letras e coloca na ft de perfil
function splitName(){
    const name = document.getElementById('s-name').innerText || 'Sem nome';
    let iniciais = name.slice(0, 2).toUpperCase();

    document.getElementById('nome-pic').innerText = iniciais;
}

splitName();