function atualizarRankingDistribuicao() {
  const nomes = [
    "Produção",
    "Rec. Humanos",
    "Financeiro",
    "Logística",
    "Manutenção",
    "Administrativo",
    "TI",
    "Comercial",
  ];

  const inputs = document.querySelectorAll(".somar-func");
  const dados = Array.from(inputs).map((el, i) => ({
    nome: nomes[i],
    valor: Number(el.value),
  }));

  dados.sort((a, b) => b.valor - a.valor);

  const distset = document.querySelectorAll(".setor-dist p");
  const distnum = document.querySelectorAll(".dist-qtd p");
  const barras = document.querySelectorAll(".barra-dist");

  const maximo = dados[0].valor || 1; // evita divisão por zero

  dados.forEach((item, i) => {
    if (distset[i]) distset[i].textContent = item.nome;
    if (distnum[i]) distnum[i].textContent = item.valor;
    if (barras[i]) {
      const proporcao = (item.valor / maximo) * 100;
      barras[i].style.width = proporcao + "%";
    }
  });
}

window.atualizarRankingDistribuicao = atualizarRankingDistribuicao;
