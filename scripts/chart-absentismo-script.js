// Espera o DOM carregar antes de inicializar
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("absentismo-chart");

  let chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Prod.",
        "Rec.",
        "Fina.",
        "Logí.",
        "Manu.",
        "Admi.",
        "T.I.",
        "Come.",
      ],
      datasets: [
        {
          label: "Absentismo em %",
          data: [0, 0, 0, 0, 0, 0, 0, 0],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Expõe a função globalmente para o botão onclick conseguir chamar
  window.absentismo = function () {
    const elementos = document.querySelectorAll(".absentismo-n");
    const valores = Array.from(elementos).map((el) => Number(el.value));
    chart.data.datasets[0].data = valores; // sem colchetes!
    chart.update();
  };
});
