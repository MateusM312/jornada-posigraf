
const USUARIO ={
    cpf:"123.456.789-01",
    senha: "1234"
};

const N_USUARIO ={
    cpf:"321.456.789-01",
    senha: "4321"
};

function fazerLogin(){
    const cpf = document.getElementById("inputCPF").value.trim();
    const senha = document.getElementById("inputSenha").value.trim();

    if (!cpf || !senha){
        alert('Preencha todos os campos!');
        return;
    }

    if (cpf === USUARIO.cpf && senha === USUARIO.senha) {
        localStorage.setItem('logado', 'true');
        window.location.href = 'adm/adm.html';
    } else if (cpf === N_USUARIO.cpf && senha === N_USUARIO.senha) {
        localStorage.setItem('logado', 'true');
        window.location.href = 'user/user.html';
    } else {
        alert("CPF ou senha incorreta!");
    }
}