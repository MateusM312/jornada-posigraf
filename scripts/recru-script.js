// Carrega do localStorage ou começa vazio
let recrutamento = JSON.parse(localStorage.getItem('recrutamento')) || [];

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

function salvar() {
    const index = parseInt(document.getElementById('editIndex').value);
    const vaga  = document.getElementById('inputVaga').value.trim();
    const setor = document.getElementById('inputSetor').value.trim();
    const salario = document.getElementById('inputSalario').value.trim();
    const turno = document.getElementById('inputTurno').value.trim();
    const gestor = document.getElementById('inputGestor').value.trim();
    const status = document.getElementById('inputStatus').value.trim();
    const abertura = document.getElementById('inputAbertura').value.trim();

    if (!vaga || !setor || !salario || !turno || !gestor || !status || !abertura) {
        alert('Preencha todos os campos!');
        return;
    }

    if (index === -1) {
        // Adicionar
        recrutamento.push({ vaga, setor, salario, turno, gestor, status, abertura });
    } else {
        // Editar
        recrutamento[index] = { vaga, setor, salario, turno, gestor, status, abertura };
    }

    localStorage.setItem('recrutamento', JSON.stringify(recrutamento));
    limparForm();
    renderTabela();
}

function excluir(index) {
    if (!confirm('Deseja excluir este aluno?')) return;
    recrutamento.splice(index, 1);
    localStorage.setItem('recrutamento', JSON.stringify(recrutamento));
    renderTabela();
}

// vaga, setor, salario, turno, gestor, status, abertura

function editar(index) {
    const a = recrutamento[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('inputVaga').value  = a.vaga;
    document.getElementById('inputSetor').value = a.setor;
    document.getElementById('inputSalario').value = a.salario;
    document.getElementById('inputTurno').value = a.turno;
    document.getElementById('inputGestor').value = a.gestor;
    document.getElementById('inputStatus').value = a.status;
    document.getElementById('inputAbertura').value = a.abertura;
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function cancelar() {
    limparForm();
}

// vaga, setor, salario, turno, gestor, status, abertura

function limparForm() {
    document.getElementById('editIndex').value  = -1;
    document.getElementById('inputVaga').value  = '';
    document.getElementById('inputSetor').value = '';
    document.getElementById('inputSalario').value = '';
    document.getElementById('inputTurno').value = '';
    document.getElementById('inputGestor').value = '';
    document.getElementById('inputStatus').value = '';
    document.getElementById('inputAbertura').value = '';
    document.getElementById('btnCancelar').style.display = 'none';
}

function renderTabela() {
    const corpo = document.getElementById('corpoTabela');
    corpo.innerHTML = '';

    if (recrutamento.length === 0) {
        corpo.innerHTML = '<tr><td colspan="5" style="text-align:center">Nenhum aluno cadastrado</td></tr>';
        return;
    }

    // vaga, setor, salario, turno, gestor, status, abertura

    recrutamento.forEach((a, i) => {
        corpo.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${a.vaga}</td>
                <td>${a.setor}</td>
                <td>${a.salario}</td>
                <td>${a.turno}</td>
                <td>${a.gestor}</td>
                <td>${a.status}</td>
                <td>${a.abertura}</td>
                <td>
                    <button class="btn-editar" onclick="editar(${i})"><i class="fa-solid fa-pencil"></i> Editar</button>
                    <button class="btn-excluir" onclick="excluir(${i})"><i class="fa-solid fa-trash"></i> Excluir</button>
                </td>
            </tr>`;
    });
}

// Renderiza ao carregar a página
renderTabela();