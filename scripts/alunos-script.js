// Carrega do localStorage ou começa vazio
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

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
    const documento  = document.getElementById('inputDoc').value.trim();
    const funcionario  = document.getElementById('inputFuncionario').value.trim();
    const cargo  = document.getElementById('inputCargo').value.trim();
    const setor  = document.getElementById('inputSetor').value.trim();
    const salario  = document.getElementById('inputSalario').value.trim();
    const gestor  = document.getElementById('inputGestor').value.trim();
    const geracao = document.getElementById('inputGeracao').value.trim();
    const status = document.getElementById('inputStatus').value.trim();

    if (!documento || !funcionario || !cargo || !setor || !salario || !gestor || !geracao || !status) {
        alert('Preencha todos os campos!');
        return;
    }

    if (index === -1) {
        // Adicionar
        alunos.push({ documento, funcionario, cargo, setor, salario, gestor, geracao, status });
    } else {
        // Editar
        alunos[index] = { documento, funcionario, cargo, setor, salario, gestor, geracao, status };
    }

    localStorage.setItem('alunos', JSON.stringify(alunos));
    limparForm();
    renderTabela();
}

function excluir(index) {
    if (!confirm('Deseja excluir este aluno?')) return;
    alunos.splice(index, 1);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    renderTabela();
}

function editar(index) {
    const a = alunos[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('inputDoc').value  = a.documento;
    document.getElementById('inputFuncionario').value  = a.funcionario;
    document.getElementById('inputCargo').value  = a.cargo;
    document.getElementById('inputSetor').value  = a.setor;
    document.getElementById('inputSalario').value  = a.salario;
    document.getElementById('inputGestor').value  = a.gestor;
    document.getElementById('inputGeracao').value  = a.geracao;
    document.getElementById('inputStatus').value  = a.status;
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function cancelar() {
    limparForm();
}

function limparForm() {
    document.getElementById('editIndex').value  = -1;
    document.getElementById('inputDoc').value  = '';
    document.getElementById('inputFuncionario').value  = '';
    document.getElementById('inputCargo').value = '';
    document.getElementById('inputSetor').value = '';
    document.getElementById('inputSalario').value = '';
    document.getElementById('inputGestor').value = '';
    document.getElementById('inputGeracao').value = '';
    document.getElementById('inputStatus').value = '';
    document.getElementById('btnCancelar').style.display = 'none';
}

// documento, funcionario, cargo, setor, salario, gestor, geracao, status

function renderTabela() {
    const corpo = document.getElementById('corpoTabela');
    corpo.innerHTML = '';

    if (alunos.length === 0) {
        corpo.innerHTML = '<tr><td colspan="5" style="text-align:center">Nenhum aluno cadastrado</td></tr>';
        return;
    }

    alunos.forEach((a, i) => {
        corpo.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${a.documento}</td>
                <td>${a.funcionario}</td>
                <td>${a.cargo}</td>
                <td>${a.setor}</td>
                <td>${a.salario}</td>
                <td>${a.gestor}</td>
                <td>${a.geracao}</td>
                <td>${a.status}</td>
                <td>
                    <button class="btn-editar" onclick="editar(${i})"><i class="fa-solid fa-pencil"></i> Editar</button>
                    <button class="btn-excluir" onclick="excluir(${i})"><i class="fa-solid fa-trash"></i> Excluir</button>
                </td>
            </tr>`;
    });
}

// Renderiza ao carregar a página
renderTabela();