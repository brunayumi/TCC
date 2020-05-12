$(document).on("click","#btnEscuro",function(){

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

$(document).on("click","#btnEscuro",function(){
   var senhaAut
   var confsenhaAut

    if (senhaAut != confsenhaAut) 
    alert("SENHAS DIFERENTES!\\nFAVOR DIGITAR SENHAS IGUAIS.");
});
