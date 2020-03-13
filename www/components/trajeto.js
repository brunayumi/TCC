$(document).ready(function(){
  var internet;
  var networkState = navigator.connection.type;
  $("#map").show();
  $("#voltar").hide();

  document.addEventListener("offline",onOffline,false);
  function onOffline(){
    internet = true;
  }

$(document).on("click","#abrirMapa",function(){
  if(internet == false){
    navigator.vibrate([6050]);
    navigator.notification.beep(3);
    alert("Nenhuma Rede Detectada!");
  }
  else if (internet != false){
    $("#map").show();
    $("#voltar").hide();
    navigator.notification.beep(1);
    var onSucess = function(position){
      L.mapquest.key = 'ZWOPZh9GQroj1mpc8EGwcRGE654RB0P2';
      L.mapquest.map('map',{
        center:[position.coords.latitude,position.coords.longitude],
        layers:L.mapquest.titleLayer('map'),
        zoom:12
      });
    };
    navigator.geolocation.getCurrentPosition(onSucess);
  };
   $(document).on("click", "#voltar", function(){document.location.reload(true);
});
});
});

