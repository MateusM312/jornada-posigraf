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

// --------------------------------------------------------------SOMAS-------------------------------------------------

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

// --------------------------------------------------------------Atualizaçoes-------------------------------------------------

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

// --------------------------------------------------------------Outros-------------------------------------------------

// É chamado quando o botão de atualização é apertado
function atualizacoes(){
  add_total_adimissoes();
  add_total_func();
}

setInterval(() => {
  atualizar_total_func_board();
  atualizar_board_admissao();
}, 500);

window.onload = function(){
  console.log('Page Loaded!');
}