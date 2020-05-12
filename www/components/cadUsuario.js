$(document).on("click","#ButtonBranco",function(){

    var parametros={
      "nome":$("#nome").val(),
      "sobrenome":$("#sobrenome").val(),
       "CPF":$("#CPF").val(),
       "email":$("#email").val(),
       "telefone":$("#telefone").val()
    };
    $.ajax({
      type: post,
      url:"https://tcc3ds2.000webhostapp.com/cadastroUsuario.php",

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


$(document).on("click","#ButtonPreto",function(){
   var senhaUsu
   var confsenhaUsu

    if (senhaUsu != confsenhaUsu) 
    alert("SENHAS DIFERENTES!\\nFAVOR DIGITAR SENHAS IGUAIS");
});





