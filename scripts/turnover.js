const ctx = document.getElementById("chart-turnover");

let chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Prod.",
      "Rec.",
      "Fina.",
      "Logí",
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

function turnOver_Dep() {
  const elementos = document.querySelectorAll(".turnover-n");

  const valores = Array.from(elementos).map((el) => Number(el.value));

  chart.data.datasets[0].data = valores;
  chart.update();
}
