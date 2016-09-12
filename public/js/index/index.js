$("button").click(function(){

  var datos = $("form").serialize();
  var tipoUsuario = $( "select option:selected" ).text();
  $.ajax({
    type : 'post',
    url : tipoUsuario,
    data : datos,
    success : function(respuesta){
      if ( !respuesta.mensaje ){
        window.location = respuesta.url;
      } else {
        demo.showNotification(respuesta.mensaje);
      }
    }
  });
});
