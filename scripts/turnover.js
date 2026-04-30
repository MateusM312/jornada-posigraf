document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("chart-turnover");

  let chartTurnover = new Chart(ctx, {
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
          label: "Turnovers em %",
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

  window.turnOver_Dep = function () {
    const elementos = document.querySelectorAll(".turnover-n");
    const valores = Array.from(elementos).map((el) => Number(el.value));
    chartTurnover.data.datasets[0].data = valores; // chart.data sem colchetes
    chartTurnover.update();
  };
});
