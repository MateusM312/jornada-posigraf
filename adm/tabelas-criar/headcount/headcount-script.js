function open_sidebar() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("sidebar").style.width = "25%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("openav").style.display = "none";
}

function close_sidebar() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("openav").style.display = "inline-block";
}

function porcentage_totalF() {
    const total_txt = document.getElementById('total').innerText;
    const howmanyvar = document.getElementById('howmany').innerText;
    let now_porcentage = (howmanyvar * 100) / total_txt;

    document.getElementById('total-%').innerText = now_porcentage.toFixed(1) + '%';
    document.getElementById('barra-cheia').style.width = now_porcentage + '%';
}

function admissao() {
  let total = Number(document.getElementById('total').innerText);
  let mes = Number(document.getElementById('mes').innerText);

  let resultado = (mes / total) * 100;
  document.getElementById('admissao').innerText = '+' + resultado.toFixed(1) + '%';
  let barra = document.getElementById('barrames').style.width = resultado + '%';
}

function desligamentos(){
  let admissoes = Number(document.getElementById('mes').innerText);
  let desliga = Number(document.getElementById('deslig').innerText);
  let total = Number(document.getElementById('total').innerText);

  let saldo = admissoes - desliga;
  let now_porcen = (desliga / total) * 100;

  document.getElementById('saldo').innerText = '+' + saldo.toFixed(0);
  document.getElementById('barradeslig').style.width = now_porcen + '%';
}

function editar(i) {
  const valorAtual = i.textContent;
  const input = document.createElement('input');
  input.value = valorAtual;
  input.className = i.className;

  input.onblur = () => {
    const novoValor = input.value || valorAtual;
    i.textContent = novoValor;
    input.replaceWith(i);

    if (i.id === 'total') {
      total = Number(novoValor); // usa novoValor, não input.value
      porcentage_totalF();               // recalcula depois de atualizar total
    }
    if (i.id === 'mes') {       // edita 'mes', não 'admissao'
      mes = Number(novoValor);
      admissao();               // recalcula e atualiza o campo admissao
    }
    if(i.id === 'deslig'){
      desligamentos();
    }
  };


  input.onkeydown = (e) => {
      if (e.key === "Enter") input.blur();
  };

  i.replaceWith(input);
  input.focus();
  input.select();
}

window.onload = function(){
  admissao();
  porcentage_totalF();
  desligamentos();
}