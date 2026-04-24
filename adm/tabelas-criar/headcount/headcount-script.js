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

function porcentage_totalF() {
    const total = document.getElementById('total').innerText;
    const howmanyvar = document.getElementById('howmany').innerText;
    let now_porcentage = (howmanyvar * 100) / total;

    document.getElementById('total-%').innerText = now_porcentage.toFixed(1) + '%';
    document.getElementById('barra-cheia').style.width = now_porcentage + '%';
}

function editar(i){
  const valorAtual = i.textContent;
  const input = document.createElement('input');
  input.value = valorAtual;
  input.className = i.className;

  input.onblur = () =>{
      i.textContent = input.value || valorAtual;
      input.replaceWith(i);
      porcentage_totalF();
  };

  input.onkeydown = (e) => {
      if (e.key === "Enter") input.blur();
  };

  i.replaceWith(input);
  input.focus();
  input.select();
}

window.onload = function(){
  porcentage_totalF();
}