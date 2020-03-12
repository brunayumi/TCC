

$(document).on("click","#ButtonPreto",function(){

    var parametros={
      "nomeServico":$("#nomeServico").val(),
      "":$("#").val(),
       "CPF":$("#CPF").val(),
       "email":$("#email").val(),
       "telefone":$("#telefone").val()
    };
    $.ajax({
      type: post,
      url:"https://tcc3ds2.000webhostapp.com/cadastroAutonomo.php",

    data: parametros,
    success: function(data){
    navigator.notification.alert(data);

    $("nome").val("");
    $("sobrenome").val("");
    $("CPF").val("");
    $("email").val("");
    $("telefone").val("");
      },
   error: function(data){
   navigator.notification.alert("Erro ao cadastrar");
    }
 })
});
