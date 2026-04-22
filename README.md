# 🖨️ POSIGRAF — Sistema de Gestão RH

> Projeto acadêmico em desenvolvimento. Sistema web para gestão de Recursos Humanos da Posigraf.

---

## 📋 Sobre o Projeto

Interface web para gerenciamento interno de RH da Posigraf, permitindo o controle de cursos, alunos e funcionários por meio de um painel administrativo e uma área de usuário.

O projeto está em fase inicial de desenvolvimento e ainda não conta com todas as funcionalidades planejadas.

---

## 🖥️ Páginas

| Página | Descrição |
|--------|-----------|
| `index.html` | Tela de login com CPF e senha |
| `adm/adm.html` | Painel administrativo com slideshow |
| `user/user.html` | Área do usuário com tabelas de cursos, alunos e funcionários |

---

## ✨ Funcionalidades Implementadas

- [x] Tela de login com campos de CPF e senha
- [x] Slideshow de imagens no painel administrativo
- [x] Tabela de dados com abas (Cursos, Alunos, Funcionários)
- [x] Header fixo com logo e botão de sair
- [x] Footer com links de política e créditos
- [x] Layout responsivo base

## 🚧 Em Desenvolvimento

- [ ] Autenticação real de usuários
- [ ] CRUD completo de cursos, alunos e funcionários
- [ ] Backend e banco de dados
- [ ] Validação de formulários
- [ ] Controle de permissões (admin vs usuário)
- [ ] Responsividade mobile

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 📁 Estrutura de Arquivos

```
posigraf-site/
├── index.html          # Página de login
├── style.css
├── script.js
├── posigraf.png
├── icone-posigraf.png
├── adm/
│   ├── adm.html        # Painel administrativo
│   ├── adm-style.css
│   ├── adm-script.js
│   └── trabalhando.jpg
└── user/
    ├── user.html       # Área do usuário
    ├── user-style.css
    └── user-script.js
```

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/MateusM312/jornada-posigraf.git
   ```
2. Abra o arquivo `index.html` no navegador.

> Não requer instalação de dependências — projeto front-end puro.

---

📦 jornada-posigraf — Guia de Contribuição com Git
Tutorial para quem acabou de instalar o VSCode e quer colaborar com o projeto.

🛠️ Pré-requisitos

VSCode instalado
Git instalado

Para confirmar que o Git está instalado, abra o terminal do VSCode (Ctrl + ') e rode:
bashgit --version
# exemplo de saída: git version 2.44.0

⚙️ Configuração inicial (só uma vez)
Configure seu nome e e-mail — isso aparece no histórico de commits do GitHub.
Use o mesmo e-mail da sua conta do GitHub.
bashgit config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

📥 Clonar o repositório
Clonar baixa o projeto do GitHub para sua máquina.
No terminal, navegue até a pasta onde quer salvar o projeto e rode:
bashgit clone https://github.com/MateusM312/jornada-posigraf.git
Isso vai criar uma pasta jornada-posigraf/. Abra ela no VSCode:

File → Open Folder → seleciona a pasta jornada-posigraf


🔄 Fluxo de trabalho do dia a dia
Toda vez que for trabalhar no projeto, siga essa sequência:
1. Atualizar o projeto antes de começar
Pega as atualizações mais recentes do GitHub antes de editar qualquer coisa:
bashgit pull
2. Verificar o que foi alterado
Depois de editar os arquivos, veja o status:
bashgit status

🔴 Vermelho = arquivo modificado mas não adicionado
🟢 Verde = arquivo pronto para commit

3. Adicionar os arquivos
Adiciona todos os arquivos alterados de uma vez:
bashgit add .
Ou apenas arquivos específicos:
bashgit add index.html adm/adm.html
4. Fazer o commit
Salva um "checkpoint" com uma mensagem descrevendo o que você fez:
bashgit commit -m "adiciona página de login"

✅ Mensagem boa: descreve o que mudou — "corrige bug no slideshow"
❌ Mensagem ruim: "update", "fix", "aaa"

5. Enviar para o GitHub
Manda tudo para o repositório remoto:
bashgit push

🔑 Problema com senha no git push?
O GitHub não aceita mais senha comum. Você precisa de um Personal Access Token:

Acesse GitHub → Settings → Developer Settings
Clique em Personal Access Tokens → Generate new token
Marque a permissão repo
Copie o token gerado e use ele no lugar da senha


📋 Resumo rápido
bashgit pull                        # atualiza antes de começar
git status                      # vê o que mudou
git add .                       # adiciona tudo
git commit -m "sua mensagem"    # salva o checkpoint
git push                        # envia pro GitHub

## 👨‍💻 Autor

Desenvolvido por **Mateus, Caio, Nicolas e Fernando** como projeto acadêmico na **UniSENAI Paraná**.
