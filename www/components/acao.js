/* ======================== NAVEGAÇÃO ENTRE AS PÁGINAS ==================== */
function inicioA(){
  location.href = "inicioA.html";
}
function servicos(){
  location.href = "servicos.html";
}
function cadServico(){
  location.href = "cadServico.html";
}
function notificacoes(){
  location.href = "notificacoes.html";
}
function abrirChat(){
  location.href = "chatA.html";
}
function avaliacoes(){
  location.href = "avaliacoes.html";
}
function recomendacoes(){
  location.href = "recomendacoes.html";
}
function perfilA(){
  location.href = "perfilAutonomo.html";
}
function cadAutonomo2(){
  location.href = "cadAutonomo2.html";
}
function visualizarServicos(){
  location.href="visualizarServicos.html";
}
function registrar(){
  location.href="registrar.html";
}

/* ===================================================== */

/* ================== PREENCHER PERFIL AUTÔNOMO ================== */
function preencherServico() {
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    data: 'id=' + localStorage.getItem('cdAutonomo'),
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      $("#loginAut").val(data.perfil.login);
      $("#senhaAut").val(data.perfil.senha);
      $("#nomeAut").val(data.perfil.nome);
      $("#sobrenomeAut").val(data.perfil.sobrenome);
      $("#CPFAut").val(data.perfil.cpf);
      $("#telefoneAut").val(data.perfil.telefone);
      $("#emailAut").val(data.perfil.email);
      $("#enderecoAut").val(data.perfil.endereco);
      $("#numeroAut").val(data.perfil.numero);
      $("#bairroAut").val(data.perfil.bairro);
      $("#fotoAut").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);
      $("#img").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);
      $("#perfil").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);

    },
    //se der errado
    error: function (data) {
      alert('Ocorreu um erro!');
    }
  });
}

function desabilita() {
  $('#loginAut').prop('readonly', true);
  $('#senhaAut').prop('readonly', true);
  $('#nomeAut').prop('readonly', true);
  $('#sobrenomeAut').prop('readonly', true);
  $('#CPFAut').prop('readonly', true);
  $('#telefoneAut').prop('readonly', true);
  $('#emailAut').prop('readonly', true);
  $('#enderecoAut').prop('readonly', true);
  $("#numeroAut").prop('readonly', true);
  $("#bairroAut").prop('readonly', true);
  $('#btnEditar').prop('readonly', true);
  $('#btnSalvar').prop('readonly', true);
  $('#btnExcluir').prop('readonly', true);
}

function habilita() {
  $('#loginAut').prop('readonly', false);
  $('#senhaAut').prop('readonly', false);
  $('#nomeAut').prop('readonly', false);
  $('#sobrenomeAut').prop('readonly', false);
  $('#CPFAut').prop('readonly', false);
  $('#telefoneAut').prop('readonly', false);
  $('#emailAut').prop('readonly', false);
  $('#enderecoAut').prop('readonly', false);
  $("#numeroAut").prop('readonly', false);
  $("#bairroAut").prop('readonly', false);  
  $('#btnSalvar').prop('readonly', false);
}
/* ===================================================== */

/* ======== SALVAR ALTERAÇÕES DO AUTÔNOMO ================ */
$(document).on('click', '#btnSalvar', function () {
  var parametros = {
    "codigo": localStorage.getItem('cdAutonomo'),
    "login": $("#login").val(),
    "senha": $("#senha").val(),
    "nome": $("#nomeAut").val(),
    "sobrenome": $("#sobrenomeAut").val(),
    "cpf": $("#CPFAut").val(),
    "telefone": $("#telefoneAut").val(),
    "email": $("#emailAut").val(),
    "rua": $("#enderecoAut").val(),
    "numero": $("#numeroAut").val(),
    "bairro": $("#bairroAut").val()
  };
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php", //para onde enviar
    data: parametros, //o que enviar
    //se der certo
    success: function (data) {
      alert("Perfil atualizado com sucesso!");
    },
    //se der errado
    error: function (data) {
      alert("Ocorreu um erro!");
    }
  });
});
$(document).on('click', '#btnEditar', function () {
  habilita();
})

$(document).on('click', '#btnVoltar', function () {
  desabilita();
})
/* ===================================================== */


/* ================== PREENCHER SERVIÇO ================== */
function preencherServico() {
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    data: 'id=' + localStorage.getItem('cdServico'),
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      $("#nomeServico").val(data.perfil.nome);
      $("#descrServico").val(data.perfil.descricao);
      $("#orcamentoServico").val(data.perfil.orcamento);
      $("#pagamentoServico").val(data.perfil.pagamento);
      $("#servRealizados").val(data.perfil.realizados);
      $("#tempoServico").val(data.perfil.tempo);
      $("#tempoRamo").val(data.perfil.ramo);

    },
    //se der errado
    error: function (data) {
      alert('Ocorreu um erro!');
    }
  });
}

function desabilita() {
  $('#nomeServico').prop('readonly', true);
  $('#descrServico').prop('readonly', true);
  $('#orcamentoServico').prop('readonly', true);
  $('#pagamentoServico').prop('readonly', true);
  $('#servRealizados').prop('readonly', true);
  $('#indicaServico').prop('readonly', true);
  $('#tempoServico').prop('readonly', true);
  $('#tempoRamo').prop('readonly', true);
  $('#btnEditar').prop('readonly', true);
  $('#btnSalvar').prop('readonly', true);
  $('#btnExcluir').prop('readonly', true);
}

function habilita() {
  $('#nomeServico').prop('readonly', false);
  $('#descrServico').prop('readonly', false);
  $('#orcamentoServico').prop('readonly', false);
  $('#pagamentoServico').prop('readonly', false);
  $('#servRealizados').prop('readonly', false);
  $('#indicaServico').prop('readonly', false);
  $('#tempoServico').prop('readonly', false);
  $('#tempoRamo').prop('readonly', false);
  $('#btnSalvar').prop('readonly', false);
}
/* ===================================================== */

/* ======== SALVAR ALTERAÇÕES DO SERVIÇO ================ */
$(document).on('click', '#btnSalvar', function () {
  var parametros = {
    "codigo": localStorage.getItem('cdServico'),
    "nome": $("#nomeServico").val(),
    "descrição": $("#descrServico").val(),
    "orçamento": $("#orcamentoServico").val(),
    "forma de pagamento": $("#pagamentoServico").val(),
    "serviços realizados anteriormente": $("#servRealizados").val(),
    "indicações de clientes": $("#indicaServico").val(),
    "tempo para executar o serviço": $("#tempoServico").val(),
    "quanto tempo atua no ramo": $("#tempoRamo").val(),
  };
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php", //para onde enviar
    data: parametros, //o que enviar
    //se der certo
    success: function (data) {
      alert("Serviço atualizado com sucesso!");
    },
    //se der errado
    error: function (data) {
      alert("Ocorreu um erro!");
    }
  });
});
$(document).on('click', '#btnEditar', function () {
  habilita();
})

$(document).on('click', '#btnVoltar', function () {
  desabilita();
})
/* ===================================================== */

/* ============ VISUALIZAR SERVIÇOS =========================*/
function visualizarServicos() {

  $.ajax({
    type: "POST", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      var itemlista = "";
      $.each(data.autonomo, function (i, dados) {
        itemlista += '<labeL>Nome:</labeL> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5; font-weight: bold;  background-color: #e7e9eb;" disabled value="' + dados.nome + '"> </div> <div class="col-xs-12"> <labeL>Descrição:</labeL> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5; font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.descricao + '"> </div> <div class="col-xs-12"> <labeL>Orçamento:</labeL> <br> <input type="number" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.orcamento + '"> </div> <div class="col-xs-12"> <labeL>Forma de pagamento:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.pagamento + '"> </div> </div> <br><div class="row"> <div class="col-xs-4"> <img src="img/joiaa.png" onclick="var codigo = ' + dados.realizados + '"> </div> <div class="col-xs-12"> <labeL>Serviços realizados anteriormente:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.indicacoes + '"> </div> <div class="col-xs-12"> <labeL>Indicações de clientes:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="'+ dados.tempo + '"> </div> <div class="col-xs-12"> <labeL>Tempo para executar o serviço:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.ramo + '"> </div> <div class="col-xs-12"> <labeL>Quanto tempo atua no ramo:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="';
      });

      $("#servicos").html(itemlista);

    },
    //se der errado
    error: function (data) {
      alert(data);
      navigator.notification.alert(data);
    }
  });

}
/* ===================================================== */


/* ======================== NAVEGAÇÃO ENTRE AS PÁGINAS ==================== */
function inicioU(){
  location.href = "inicioA.html";
}
function servicos(){
  location.href = "servicos.html";
}
function cadServico(){
  location.href = "cadServico.html";
}
function notificacoes(){
  location.href = "notificacoes.html";
}
function abrirChat(){
  location.href = "chatA.html";
}
function avaliacoes(){
  location.href = "avaliacoes.html";
}
function recomendacoes(){
  location.href = "recomendacoes.html";
}
function perfilA(){
  location.href = "perfilAutonomo.html";
}
function cadUsuario2(){
  location.href = "cadUsuario2.html";
}
function visualizarServicos(){
  location.href="visualizarServicos.html";
}
function registrar(){
  location.href="registrar.html";
}

/* ===================================================== */

/* ================== PREENCHER PERFIL AUTÔNOMO ================== */
function preencherServico() {
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    data: 'id=' + localStorage.getItem('cdUsuario'),
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      $("#loginAut").val(data.perfil.login);
      $("#senhaAut").val(data.perfil.senha);
      $("#nomeAut").val(data.perfil.nome);
      $("#sobrenomeAut").val(data.perfil.sobrenome);
      $("#CPFAut").val(data.perfil.cpf);
      $("#telefoneAut").val(data.perfil.telefone);
      $("#emailAut").val(data.perfil.email);
      $("#enderecoAut").val(data.perfil.endereco);
      $("#numeroAut").val(data.perfil.numero);
      $("#bairroAut").val(data.perfil.bairro);
      $("#fotoAut").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);
      $("#img").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);
      $("#perfil").attr('src', 'https://adatcc.000webhostapp.com/' + data.perfil.foto);

    },
    //se der errado
    error: function (data) {
      alert('Ocorreu um erro!');
    }
  });
}

function desabilita() {
  $('#loginAut').prop('readonly', true);
  $('#senhaAut').prop('readonly', true);
  $('#nomeAut').prop('readonly', true);
  $('#sobrenomeAut').prop('readonly', true);
  $('#CPFAut').prop('readonly', true);
  $('#telefoneAut').prop('readonly', true);
  $('#emailAut').prop('readonly', true);
  $('#enderecoAut').prop('readonly', true);
  $("#numeroAut").prop('readonly', true);
  $("#bairroAut").prop('readonly', true);
  $('#btnEditar').prop('readonly', true);
  $('#btnSalvar').prop('readonly', true);
  $('#btnExcluir').prop('readonly', true);
}

function habilita() {
  $('#loginAut').prop('readonly', false);
  $('#senhaAut').prop('readonly', false);
  $('#nomeAut').prop('readonly', false);
  $('#sobrenomeAut').prop('readonly', false);
  $('#CPFAut').prop('readonly', false);
  $('#telefoneAut').prop('readonly', false);
  $('#emailAut').prop('readonly', false);
  $('#enderecoAut').prop('readonly', false);
  $("#numeroAut").prop('readonly', false);
  $("#bairroAut").prop('readonly', false);  
  $('#btnSalvar').prop('readonly', false);
}
/* ===================================================== */

/* ======== SALVAR ALTERAÇÕES DO USUÁRIO ================ */
$(document).on('click', '#btnSalvar', function () {
  var parametros = {
    "codigo": localStorage.getItem('cdUsuario'),
    "login": $("#login").val(),
    "senha": $("#senha").val(),
    "nome": $("#nomeUsu").val(),
    "sobrenome": $("#sobrenomeUsu").val(),
    "cpf": $("#CPFUsu").val(),
    "telefone": $("#telefoneUsu").val(),
    "email": $("#emailUsu").val(),
    "rua": $("#enderecoUsu").val(),
    "numero": $("#numeroUsu").val(),
    "bairro": $("#bairroUsu").val()
  };
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php", //para onde enviar
    data: parametros, //o que enviar
    //se der certo
    success: function (data) {
      alert("Perfil atualizado com sucesso!");
    },
    //se der errado
    error: function (data) {
      alert("Ocorreu um erro!");
    }
  });
});
$(document).on('click', '#btnEditar', function () {
  habilita();
})

$(document).on('click', '#btnVoltar', function () {
  desabilita();
})
/* ===================================================== */


/* ================== PREENCHER SERVIÇO ================== */
function preencherServico() {
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    data: 'id=' + localStorage.getItem('cdServico'),
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      $("#nomeServico").val(data.perfil.nome);
      $("#descrServico").val(data.perfil.descricao);
      $("#orcamentoServico").val(data.perfil.orcamento);
      $("#pagamentoServico").val(data.perfil.pagamento);
      $("#servRealizados").val(data.perfil.realizados);
      $("#tempoServico").val(data.perfil.tempo);
      $("#tempoRamo").val(data.perfil.ramo);

    },
    //se der errado
    error: function (data) {
      alert('Ocorreu um erro!');
    }
  });
}

function desabilita() {
  $('#nomeServico').prop('readonly', true);
  $('#descrServico').prop('readonly', true);
  $('#orcamentoServico').prop('readonly', true);
  $('#pagamentoServico').prop('readonly', true);
  $('#servRealizados').prop('readonly', true);
  $('#indicaServico').prop('readonly', true);
  $('#tempoServico').prop('readonly', true);
  $('#tempoRamo').prop('readonly', true);
  $('#btnEditar').prop('readonly', true);
  $('#btnSalvar').prop('readonly', true);
  $('#btnExcluir').prop('readonly', true);
}

function habilita() {
  $('#nomeServico').prop('readonly', false);
  $('#descrServico').prop('readonly', false);
  $('#orcamentoServico').prop('readonly', false);
  $('#pagamentoServico').prop('readonly', false);
  $('#servRealizados').prop('readonly', false);
  $('#indicaServico').prop('readonly', false);
  $('#tempoServico').prop('readonly', false);
  $('#tempoRamo').prop('readonly', false);
  $('#btnSalvar').prop('readonly', false);
}
/* ===================================================== */

/* ======== SALVAR ALTERAÇÕES DO SERVIÇO ================ */
$(document).on('click', '#btnSalvar', function () {
  var parametros = {
    "codigo": localStorage.getItem('cdServico'),
    "nome": $("#nomeServico").val(),
    "descrição": $("#descrServico").val(),
    "orçamento": $("#orcamentoServico").val(),
    "forma de pagamento": $("#pagamentoServico").val(),
    "serviços realizados anteriormente": $("#servRealizados").val(),
    "indicações de clientes": $("#indicaServico").val(),
    "tempo para executar o serviço": $("#tempoServico").val(),
    "quanto tempo atua no ramo": $("#tempoRamo").val(),
  };
  $.ajax({
    type: "post", //como enviar
    url: "https://adatcc.000webhostapp.com/.php", //para onde enviar
    data: parametros, //o que enviar
    //se der certo
    success: function (data) {
      alert("Serviço atualizado com sucesso!");
    },
    //se der errado
    error: function (data) {
      alert("Ocorreu um erro!");
    }
  });
});
$(document).on('click', '#btnEditar', function () {
  habilita();
})

$(document).on('click', '#btnVoltar', function () {
  desabilita();
})
/* ===================================================== */

/* ============ VISUALIZAR SERVIÇOS =========================*/
function visualizarServicos() {

  $.ajax({
    type: "POST", //como enviar
    url: "https://adatcc.000webhostapp.com/.php",//para onde enviar
    dataType: 'json',//o que enviar
    //se der certo
    success: function (data) {
      var itemlista = "";
      $.each(data.autonomo, function (i, dados) {
        itemlista += '<labeL>Nome:</labeL> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5; font-weight: bold;  background-color: #e7e9eb;" disabled value="' + dados.nome + '"> </div> <div class="col-xs-12"> <labeL>Descrição:</labeL> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5; font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.descricao + '"> </div> <div class="col-xs-12"> <labeL>Orçamento:</labeL> <br> <input type="number" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.orcamento + '"> </div> <div class="col-xs-12"> <labeL>Forma de pagamento:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.pagamento + '"> </div> </div> <br><div class="row"> <div class="col-xs-4"> <img src="img/joiaa.png" onclick="var codigo = ' + dados.realizados + '"> </div> <div class="col-xs-12"> <labeL>Serviços realizados anteriormente:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.indicacoes + '"> </div> <div class="col-xs-12"> <labeL>Indicações de clientes:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="'+ dados.tempo + '"> </div> <div class="col-xs-12"> <labeL>Tempo para executar o serviço:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="' + dados.ramo + '"> </div> <div class="col-xs-12"> <labeL>Quanto tempo atua no ramo:</labeL> <br> <input type="text" style="border: none;border-bottom: solid 3px #0e97a5;  font-weight: bold; background-color: #e7e9eb;" disabled value="';
      });

      $("#servicos").html(itemlista);

    },
    //se der errado
    error: function (data) {
      alert(data);
      navigator.notification.alert(data);
    }
  });

}
/* ===================================================== */



