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

let total_func, ativos_total, admissoes_total, desligamentos_total;

// Soma o total de funcionarios e ativos
function add_total_func() {
  // Total de funcionarios
  const inputs = document.querySelectorAll(".somar-func");
  // Total de ativos
  const inputs_ativos = document.querySelectorAll(".ativosT");

  const total__ativos = Array.from(inputs_ativos).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  const total = Array.from(inputs).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  ativos_total = total__ativos;
  total_func = total;
}

let total_pcd, total_aprendizes, total_ambos_pcdapr;

// Soma o total de PCD com Aprendizes e te apresenta o resultado
function add_pcd_aprendizes() {
  const pcd = document.querySelectorAll(".pcdT");
  const aprendizes = document.querySelectorAll(".aprendizesT");

  const pcd_total = Array.from(pcd).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  const aprendizes_total = Array.from(aprendizes).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  total_pcd = pcd_total;
  total_aprendizes = aprendizes_total;
  total_ambos_pcdapr = pcd_total + aprendizes_total;
}

// Soma o total de admissoes do mes de cada departamento
function add_total_adimissoes() {
  const admissoes = document.querySelectorAll(".admissoesT");

  const total_admissoes = Array.from(admissoes).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  admissoes_total = total_admissoes;
}

// Add total desligamento por departamento
function add_total_desligamentos() {
  const desligamentos = document.querySelectorAll(".desligamentosT");

  const total_desligamentos = Array.from(desligamentos).reduce((sum, input) => {
    return sum + (Number(input.value) || 0);
  }, 0);

  desligamentos_total = total_desligamentos;
}

// --------------------------------------------------------------Atualizaçoes-------------------------------------------------

// Atualiza com os dados de pcd e desligamentos
function atualizar_board_pcd() {
  const barra = (total_ambos_pcdapr * 100) / total_func;
  const barra_segura = isFinite(barra) ? barra : 0;

  document.getElementById("barrapcd").style.width = barra_segura + "%";
  document.getElementById("NPcds").innerText = total_ambos_pcdapr || 0;
  document.getElementById("pcd-span").innerText = total_pcd || 0;
  document.getElementById("aprendizes-span").innerText = total_aprendizes || 0;
}

// Atualiza com os dados somados admissoes
function atualizar_board_admissao() {
  let porcentagem_barra = (admissoes_total / total_func) * 100;
  let saldo = admissoes_total - desligamentos_total;
  const porcen_segura = isFinite(porcentagem_barra) ? porcentagem_barra : 0;
  const saldo_seguro = isFinite(saldo) ? saldo : 0;

  document.getElementById("admissao").innerText = "+" + saldo_seguro;
  document.getElementById("barrames").style.width = porcen_segura + "%";
  document.getElementById("mes").innerText = admissoes_total || 0;
}

// Atualiza com dados somados desligamentos
function atualizar_board_desligamentos() {
  let porcentagem_abrra = (desligamentos_total / total_func) * 100;
  const porcen_segura = isFinite(porcentagem_abrra) ? porcentagem_abrra : 0;
  const total_seguro = isFinite(desligamentos_total) ? desligamentos_total : 0;

  document.getElementById("deslig").innerText = desligamentos_total || 0;
  document.getElementById("saldo").innerText = "+" + total_seguro + "%";
  document.getElementById("barradeslig").style.width = porcen_segura + "%";
}

// Atualiza com os dados somados funcionarios
document.getElementById("barra-cheia").style.width = 0 + "%";

function atualizar_total_func_board() {
  const porcentagem = (ativos_total * 100) / total_func;
  const porcentagemSegura = isFinite(porcentagem) ? porcentagem : 0;

  document.getElementById("total-%").innerText =
    porcentagemSegura.toFixed(1) + "%";
  document.getElementById("barra-cheia").style.width = porcentagem + "%";
  document.getElementById("howmany").innerText = ativos_total || 0;
  document.getElementById("total").innerText = total_func || 0;

  const larguraAtual = parseFloat(
    document.getElementById("barra-cheia").style.width,
  );

  if (larguraAtual > 100) {
    document.getElementById("barra-cheia").style.width = "100%";
    document.getElementById("total-%").innerText = "Error % > 100%";
    document.getElementById("howmany").innerText = "Error";
  }
}

// --------------------------------------------------------------Outros-------------------------------------------------

// É chamado quando o botão de atualização é apertado
function atualizacoes() {
  add_total_adimissoes();
  add_total_func();
  add_total_desligamentos();
  add_pcd_aprendizes();

  atualizar_board_pcd();
  atualizar_total_func_board();
  atualizar_board_admissao();
  atualizar_board_desligamentos();
}

// setInterval(() => {

// }, 500);

window.onload = function () {
  atualizar_total_func_board();
  atualizar_board_admissao();
  atualizar_board_desligamentos();
  atualizar_board_pcd();
  console.log("Page Loaded!");
};
