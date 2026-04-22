// Carrega do localStorage ou começa vazio
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

function salvar() {
    const index = parseInt(document.getElementById('editIndex').value);
    const nome  = document.getElementById('inputNome').value.trim();
    const curso = document.getElementById('inputCurso').value.trim();
    const email = document.getElementById('inputEmail').value.trim();

    if (!nome || !curso || !email) {
        alert('Preencha todos os campos!');
        return;
    }

    if (index === -1) {
        // Adicionar
        alunos.push({ nome, curso, email });
    } else {
        // Editar
        alunos[index] = { nome, curso, email };
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
    document.getElementById('inputNome').value  = a.nome;
    document.getElementById('inputCurso').value = a.curso;
    document.getElementById('inputEmail').value = a.email;
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function cancelar() {
    limparForm();
}

function limparForm() {
    document.getElementById('editIndex').value  = -1;
    document.getElementById('inputNome').value  = '';
    document.getElementById('inputCurso').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('btnCancelar').style.display = 'none';
}

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
                <td>${a.nome}</td>
                <td>${a.curso}</td>
                <td>${a.email}</td>
                <td>
                    <button class="btn-editar" onclick="editar(${i})">✏️ Editar</button>
                    <button class="btn-excluir" onclick="excluir(${i})">🗑️ Excluir</button>
                </td>
            </tr>`;
    });
}

// Renderiza ao carregar a página
renderTabela();