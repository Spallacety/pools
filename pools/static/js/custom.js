$( window ).on( "load", function() {
  var res = window.location.pathname.split("/");
  document.getElementById(res.pop()).className = 'active';
  $('.tooltipped').tooltip({delay: 50});
  $('.datepicker').pickadate({
    selectMonths: false,
    selectYears: 1
  });
});

$(document).ready(function() {
  $('.modal').modal({
    dismissible: false
  });
  $('select').material_select();
  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: true,
    alignment: 'left',
    stopPropagation: false
  });
});

$(document).click(function(event) {
  $(document).click(function(event) {
    if(document.getElementById("notificacoes.html").classList.contains('active')){
      document.getElementById("notificacoes.html").className = '';
    }
  });
});

$('#navbar-index').load("common/navbar-index.html");
$('#navbar-aluno').load("common/navbar-aluno.html");
$('#navbar-professor').load("common/navbar-professor.html");
$('#footer').load("common/footer.html");

function verificarLogin() {
  if(document.getElementById("matricula").value == 'aluno'){
    open("boletim.html", "_self");
  }
  else if(document.getElementById("matricula").value == 'professor'){
    open("chamada.html", "_self");
  }
  else{
    $('#error').modal('open');
    document.getElementById("senha").value = "";
  }
}

function abrirModalSair(){
  $('#logout-modal').modal('open');
}

function abrirModalMatricula(){
  $('#matricula-modal').modal('open');
}

function abrirModalArquivo(){
  $('#arquivo-modal').modal('open');
  document.getElementById("nome-arquivo").value = "";
}

function enviarAviso(){
  $('#aviso-modal').modal('open');
}

function aulaRegistrada(){
  $('#aula-modal').modal('open');
}

function abrirModalAlunoChamada(){
  $('#aluno-chamada').modal('open');
}

function abrirModalAlunoNota(){
  $('#aluno-nota').modal('open');
}

function clickNotificacao(){
  if(!document.getElementById("notificacoes.html").classList.contains('active')){
    document.getElementById("notificacoes.html").className = 'active';
  }
}

function login(){
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('button').style.display = 'none';
}

function escolherTurma(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "Enviar para turma de IHC (ADS IV)";
      document.getElementById('escolher-turma').style.display = 'none';
      document.getElementById('escolher').style.display = 'block';
      break;
    case "tecnico":
      document.getElementById("nome-turma").innerHTML = "Enviar para turma de IHC (Técnico)";
      document.getElementById('escolher-turma').style.display = 'none';
      document.getElementById('escolher').style.display = 'block';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
  }
}

function mandarAviso(){
  document.getElementById('escolher').style.display = 'none';
  document.getElementById('mandar-aviso').style.display = 'block';
}

function mandarMaterial(){
  document.getElementById('escolher').style.display = 'none';
  document.getElementById('mandar-material').style.display = 'block';
}

function escolherTurmaNota(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV)";
      document.getElementById('tabela-edit-nota').style.display = 'block';
      document.getElementById('save-btn').style.display = 'block';
      document.getElementById('escolher-turma').style.display = 'none';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
    }
}

function mostrarMatriz(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById('matriz').style.display = 'block'
      break;
    default:
      $('#curso-modal').modal('open');
      break;
    }
}

function salvarNotas(){
    $('#boletim-modal').modal('open');
}

function escolherDia(){
  var conceptVal = $("#selecionar-turma option:selected").val();

  switch(conceptVal){
    case "ads":
      document.getElementById("nome-turma").innerHTML = "IHC (ADS IV) - Março";
      document.getElementById('mes-chamada').style.display = 'block';
      document.getElementById('reposicao').style.display = 'block';
      document.getElementById('escolher-turma').style.display = 'none';
      break;
    default:
      $('#turma-modal').modal('open');
      break;
  }

}

function aulaNormal(){
  document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV) - DD/MM/AAAA";
  document.getElementById('aula').style.display = 'block';
  document.getElementById('edit-btn').style.display = 'block';
  document.getElementById('mes-chamada').style.display = 'none';
}

function aulaReposicao(){
  aulaNormal();
  document.getElementById("nome-turma").innerHTML = "Turma de IHC (ADS IV) - Aula de Reposição";
  document.getElementById('reposicao-aula').style.display = 'block';
}