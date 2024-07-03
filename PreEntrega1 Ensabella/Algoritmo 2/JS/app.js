let usuario = 'gonzalo';
let contraseña = 'coderhouse';

for(let i=0; i<5; i++){
    let entradaUsuario = prompt('Ingrese el usuario');
    let entradaContraseña = prompt('Ingrese el contraseña');
	if(entradaUsuario == usuario && entradaContraseña == contraseña){
	alert('Has iniciado sesión correctamente');
	let i = 5;
	}
	if(entradaUsuario != usuario || entradaContraseña != contraseña){
        if(entradaUsuario != usuario && entradaContraseña != contraseña){
            alert('El usuario y la contraseña son incorrectos');
        }else{
	 	if(entradaUsuario != usuario){
	 	alert('El usuario es incorrecto');
		}else{
	  	alert('La contraseña es incorrecta');
		}   
        }
		if(i==4){
		alert('5 intentos fallidos, intente nuevamente en 5 minutos');
	    } 
	}	
}	
