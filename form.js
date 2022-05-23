function validar(){

  var correo = document.formulario.mail.value; 
  var nom = document.formulario.nombre.value;
  var tel = document.formulario.telefono.value;
  var mensaje = document.formulario.asunto.value;
  var coment = document.formulario.comentario.value;
  
  
  var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  
  if ((correo == "") || (nom == "") || (tel == "") || (mensaje == "") || (coment == "")) {  //CAMPOS VACIOS
    alert("Los campos no pueden quedar vacios");
    return 0;
}
  
  else if( !(/^\d{10}$/.test(tel)) ) {
      alert("Número de teléfono inválido.")
      document.formulario.telefono.focus()
      return 0;
    }

    else if (!expr.test(correo) ){                                                            //MAIL
      alert("Error: La dirección de correo " + correo + " es incorrecta.");
      document.formulario.telefono.focus()
      return 0;
  }

    //el formulario se envia
   else alert("Su mensaje ha sido registrado con éxito.");
    document.validar.submit();
}



  //validar que solo se ingresen letras en los campos correspondientes
  function sololetras(e){
  key= e.keyCode || e.which;
  teclado = String.fromCharCode(key).toLowerCase();
    letras="abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-46-164";
    teclado_especial=false;

    for(var i in especiales){
      if (key == especiales[i])
      teclado_especial=true;break;
    }

    if(letras.indexOf(teclado)==-1 && !teclado_especial){
      return false;
    }
  }

  function solonumeros(n){
 
    var code = (n.which) ? n.which : n.keyCode;
    
    if(code==8) { 
      return true;
    } else if(code>=48 && code<=57) { 
      return true;
    } else{ 
      return false;
    }
}