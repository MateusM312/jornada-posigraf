
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
    const lembrar = document.getElementById("lembrarsenha").checked;

    if (lembrar){
        localStorage.setItem('cpfSalvo', cpf);
        localStorage.setItem('senhaSalvo', senha);
    }else{
        localStorage.removeItem('cpfSalvo');
        localStorage.removeItem('senhaSalvo');
    }

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

window.onload = function(){
    const cpfSalvo = localStorage.getItem("cpfSalvo");
    const senhaSalvo = localStorage.getItem("senhaSalvo");

    if (cpfSalvo && senhaSalvo){
        document.getElementById('inputCPF').value = cpfSalvo;
        document.getElementById('inputSenha').value = senhaSalvo;
        document.getElementById('lembrarsenha').checked = true;
    }
}