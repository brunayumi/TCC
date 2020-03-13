

$(document).on("click","#ButtonPreto",function(){

    var parametros={
      "dsServico":$("#dsServico").val(),
      "dsOrcamento":$("#dsOrcamento").val(),
       "dsFormaPagamento":$("#dsFormaPagamento").val(),
       "dsServicosAnteriores":$("#dsServicosAnteriores").val(),
       "dsMediaTempo":$("#dsMediaTempo").val(),
       "dsTempoServico":$("#dsTempoServico").val(),
       "dsRestricoesExigencias":$("#dsRestricoesExigencias").val(),
       "dsFotoServico":$("#dsFotoServico").val(),
    };
    $.ajax({
      type: post,
      url:"https://tcc3ds2.000webhostapp.com/cadastroAutonomo.php",

    data: parametros,
    success: function(data){
    navigator.notification.alert(data);

    $("dsServico").val("");
    $("dsOrcamento").val("");
    $("dsFormaPagamento").val("");
    $("dsServicosAnteriores").val("");
    $("dsMediaTempo").val("");
    $("dsTempoServico").val("");
    $("dsRestricoesExigencias").val("");
    $("dsFotoServico").val("");
      },
   error: function(data){
   navigator.notification.alert("Erro ao cadastrar");
    }
 })
});
