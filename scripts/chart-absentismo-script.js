const ctx = document.getElementById('absentismo-chart');

const setores = document.querySelectorAll('.setores');

const dados = Array.from(setores).map(setor => {
    const inputs = setor.querySelectorAll('input');
    return {
        nome:     setor.querySelector('h4').innerText,
        total:    Number(inputs[0].value),
        ativos:   Number(inputs[1].value),
        deslig:   Number(inputs[2].value),
        admiss:   Number(inputs[3].value),
        turnover: Number(inputs[4].value),
        abs:      Number(inputs[5].value),
        homens:   Number(inputs[6].value),
        mulheres: Number(inputs[7].value),
        pcd:      Number(inputs[8].value),
        apr:      Number(inputs[9].value),
    };
});

const labels  = dados.map(s => s.nome);
const turnover = dados.map(s => s.turnover);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Turnover %',
            data: turnover,
            backgroundColor: '#536DFF',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
    }
});