function atualizarRankingTurnover() {
  // Nomes dos setores na mesma ordem dos inputs no HTML
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

  // Pega os valores de cada input .turnover-n
  const inputs = document.querySelectorAll(".turnover-n");
  const dados = Array.from(inputs).map((el, i) => ({
    nome: nomes[i],
    valor: Number(el.value),
  }));

  // Ordena do maior para o menor
  dados.sort((a, b) => b.valor - a.valor);

  // Pega os top 5
  const top5 = dados.slice(0, 5);

  // Atualiza os <p> do .setores-turn
  const setoresTurn = document.querySelectorAll(".setores-turn p");
  const valoresTurn = document.querySelectorAll(".both > div:last-child p");

  top5.forEach((item, i) => {
    if (setoresTurn[i]) setoresTurn[i].textContent = item.nome;
    if (valoresTurn[i]) valoresTurn[i].textContent = item.valor + "%";
  });
}

// Expõe globalmente para o botão onclick chamar
window.atualizarRankingTurnover = atualizarRankingTurnover;
