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

let total_func, ativos_total, admissoes_total;

// Soma o total de funcionarios e ativos
function add_total_func(){
  // Total de funcionarios
  const inputs = document.querySelectorAll('.somar-func');
  // Total de ativos
  const inputs_ativos = document.querySelectorAll('.ativosT');

  const total__ativos = Array.from(inputs_ativos).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  const total = Array.from(inputs).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  ativos_total = total__ativos;
  total_func = total;
}

// Soma o total de admissoes do mes de cada departamento
function add_total_adimissoes(){
  const admissoes = document.querySelectorAll('.admissoesT');

  const total_admissoes = Array.from(admissoes).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  admissoes_total = total_admissoes;
}

// Atualiza com os dados somados
function atualizar_board_admissao(){
  const num_mes = Number(document.getElementById('mes').innerText);
  const barra = document.getElementById('barrames');

  let porcentagem_barra = (admissoes_total / total_func) * 100;
  const porcen_segura = isFinite(porcentagem_barra) ? porcentagem_barra : 0;

  document.getElementById('admissao').innerText = porcen_segura.toFixed(1) + '%';
  document.getElementById('barrames').style.width = porcen_segura + '%';
  document.getElementById('mes').innerText = admissoes_total || 0;
}

// Atualiza com os dados somados
document.getElementById('barra-cheia').style.width = 0 + '%';

function atualizar_total_func_board(){
  const total = Number(document.getElementById('total').innerText);
  const barra_func = document.getElementById('barra-cheia').style.width;

  const barra = document.getElementById('barra-cheia').style.width;

  const varios_ativos = Number(document.getElementById('howmany'));
  const porcentagem = (ativos_total * 100) / total_func;
  const porcentagemSegura = isFinite(porcentagem) ? porcentagem : 0;

  document.getElementById('total-%').innerText = porcentagemSegura.toFixed(1) + '%';
  document.getElementById('barra-cheia').style.width = porcentagem + '%';
  document.getElementById('howmany').innerText = ativos_total || 0;
  document.getElementById('total').innerText = total_func || 0;
  
  const larguraAtual = parseFloat(document.getElementById('barra-cheia').style.width);

  if (larguraAtual > 100) {
    document.getElementById('barra-cheia').style.width = '100%';
    document.getElementById('total-%').innerText = "Error % > 100%";
    document.getElementById('howmany').innerText = "Error";

  }
}

// É chamado quando o botão de atualização é apertado
function atualizacoes(){
  add_total_adimissoes();
  add_total_func();
}

// function porcentage_totalF() {
//     const total_txt = document.getElementById('total').innerText;
//     const howmanyvar = document.getElementById('howmany').innerText;
//     let now_porcentage = (howmanyvar * 100) / total_txt;

//     document.getElementById('total-%').innerText = now_porcentage.toFixed(1) + '%';
//     document.getElementById('barra-cheia').style.width = now_porcentage + '%';
// }

// function admissao() {
//   let total = Number(document.getElementById('total').innerText);
//   let mes = Number(document.getElementById('mes').innerText);

//   let resultado = (mes / total) * 100;
//   document.getElementById('admissao').innerText = '+' + resultado.toFixed(1) + '%';
//   let barra = document.getElementById('barrames').style.width = resultado + '%';
// }

// function desligamentos(){
//   let admissoes = Number(document.getElementById('mes').innerText);
//   let desliga = Number(document.getElementById('deslig').innerText);
//   let total = Number(document.getElementById('total').innerText);

//   let saldo = admissoes - desliga;
//   let now_porcen = (desliga / total) * 100;

//   document.getElementById('saldo').innerText = '+' + saldo.toFixed(0);
//   document.getElementById('barradeslig').style.width = now_porcen + '%';
// }

// function editar(i) {
//   const valorAtual = i.textContent;
//   const input = document.createElement('input');
//   input.value = valorAtual;
//   input.className = i.className;

//   input.onblur = () => {
//     const novoValor = input.value || valorAtual;
//     i.textContent = novoValor;
//     input.replaceWith(i);

//     // if (i.id === 'total') {
//     //   total = Number(novoValor); // usa novoValor, não input.value
//     //   porcentage_totalF();               // recalcula depois de atualizar total
//     // }
//     // if (i.id === 'mes') {       // edita 'mes', não 'admissao'
//     //   mes = Number(novoValor);
//     //   admissao();               // recalcula e atualiza o campo admissao
//     // }
//     // if(i.id === 'deslig'){
//     //   desligamentos();
//     // }
//   };


//   input.onkeydown = (e) => {
//       if (e.key === "Enter") input.blur();
//   };

//   i.replaceWith(input);
//   input.focus();
//   input.select();
// }

setInterval(() => {
  atualizar_total_func_board();
  atualizar_board_admissao();
}, 500);

window.onload = function(){
  // admissao();
  // porcentage_totalF();
  // desligamentos();
}