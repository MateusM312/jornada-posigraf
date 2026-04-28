// A Idéia é que com a função de baixo possamos pegas as informaçoes colocadas na pasta tabela-criar e passar para html

function acessTypeInfo(){
    alert("On Progress");
}

// Seletor de Módulo

function activeInfo(index) {
    let modules = document.getElementsByClassName("modules");
    let btns    = document.getElementsByClassName("btns-input");

    // remove active de todos
    for (let i = 0; i < modules.length; i++) {
        modules[i].className = modules[i].className.replace(" active", "");
        btns[i].className    = btns[i].className.replace(" active", "");
    }

    // adiciona active no clicado
    modules[index].className += " active";
    btns[index].className    += " active";
}

// ativa o index 0 ao carregar
window.onload = function() {
    activeInfo(0);
}