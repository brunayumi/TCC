/* =========================== VERIFICA CPF ================================ */
function verificaCPF() {

  var inputCPF = document.getElementById('cpfAut');

  if (verificaCPF(inputCPF.value)) {
    inputCPF.style.border = "3px #red solid";
  }
  else {
    errors = "1";

    if (errors) {
      alert("O CPF é inválido!");
      inputCPF.style.border = "3px red solid";
    }
  }
}

function verificaCPF(cpf) {

  if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")

    return false;

  add = 0;

  for (i = 0; i < 9; i++) {

    add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
  }
  if (rev == 10 || rev == 11) {
    rev = 0;
  }

  if (rev != parseInt(cpf.charAt(9)))
    return false;
  add = 0;

  for (i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
  }
  if (rev == 10 || rev == 11)
    rev = 0;

  if (rev != parseInt(cpf.charAt(10)))
    return false;

  return true;
}
/* ========================================================================= */

/* =========================== LOGIN AUTÔNOMO ============================== */
$(document).on('click', '#btnEntrar', function () {
  var parametros = {
    "login": $("#loginAut").val(),
    "senha": $("#senhaAut").val(),
  };

  $.ajax({
    type: "POST", //como enviar
    url: "https://adatcc.000webhostapp.com/loginAutonomo.php", //para onde enviar
    data: parametros, //o que enviar
    dataType: 'json',
    //se der certo
    success: function (data) {

      let acesso = data.autonomo.nivel;
      var idAutonomo = data.autonomo.codigo;
      localStorage.setItem('cdAutonomo', idAutonomo);

      if (acesso == 1) {
        location.href = "index.html";
      }
      else {
        alert('Autônomo');
      }
    },
    //se der errado
    error: function (data) {
      alert("Login ou senha inválidas!");
    }
  });
});
/* ============================================================================ */

/* =========================== VERIFICA SENHA ================================= */
 function verificaSenha() {
   var senha = document.getElementById('senhaAut').value;
   var confsenha = document.getElementById('confsenhaAut').value;

   if (senha != "" && confsenha != "" && senha != confsenha) {
     alert('Senhas diferentes!');
   }
   if (senha == "" && confsenha == "") {
     alert('Digite uma senha!');
     return false
   }
   if (senha < 8) {
     alert('A senha deve conter no mínimo 8 caracteres e pelo menos 1 letra!');
   }
   else {
     return true
   }
 }
/* ============================================================================== */

/* =========================== CADASTRAR AUTÔNOMO =============================== */
$(document).on("click","#btnFinalizar",function(){
    var parametros={
      "login":$("#loginAut").val(),
      "senha":$("#senhaAut").val(),
      "nome":$("#nomeAut").val(),
      "sobrenome":$("#sobrenomeAut").val(),
       "CPF":$("#CPFAut").val(),
       "telefone":$("#telefoneAut").val(),
       "email":$("#emailAut").val(),
       "endereco":$("#enderecoAut").val(),
       "numero":$("numeroAut").val(),
       "bairro":$("#bairroAut").val(),
       "cidade":$("#cidadeAut").val(),
       "estado":$("#estadoAut").val(),
       "foto":$("#fotoAut").val()
    };

    $.ajax({
      type: "post", //como enviar
      url:"https://adatcc.000webhostapp.com/cadastroAutonomo.php", //para onde enviar
      data: parametros,
      dataType: 'json', //o que enviar
      //se der certo
      success: function(data){
      $("#loginAut").val(""),
      $("#senhaAut").val(""),
      $("#nomeAut").val("");
      $("#sobrenomeAut").val("");
      $("#CPFAut").val("");
      $("#telefoneAut").val("");
      $("#emailAut").val("");
      $("#enderecoAut").val("");
      $("numeroAut").val("");
      $("bairroAut").val("");
      $("#fotoAut").val("");
  },
    //se der errado
   error: function(data){
   navigator.notification.alert("Erro ao cadastrar!");
    }
 })
});
/* ============================================================================= */