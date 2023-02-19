var function1;
var function2;
var function3;
var function4;



function validarTodos(){
	 validarNombre();
	 validarEmail();
	 validarClave();
	 ComprobarClaves();
	 FormularioCorrecto()

}





function validarNombre() {
	var campo = document.getElementById("nombre");
	var Contenidocampo = campo.value;

	var textoError = document.getElementById("textoNombre");
	

	if(Contenidocampo.length == 0)
	{
		campo.style.borderColor = "#D74B4B";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/error-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
	

		textoError.innerHTML = "Rellene este campo";
		textoError.style.fontFamily="Poppins";
		textoError.style.fontSize="small";
		textoError.style.color="#CC5658";

		function1 = false;
	}
	else{
		campo.style.borderColor = "#52CC7A";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/success-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
		textoError.innerHTML = "";

		function1 = true;
		

	}
}





function validarEmail() {
	var campo = document.getElementById("email");
	var Contenidocampo = campo.value;

	var textoError = document.getElementById("textoEmail");
	

	if(Contenidocampo.length == 0)
	{
		campo.style.borderColor = "#D74B4B";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/error-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
	

		textoError.innerHTML = "Rellene este campo";
		textoError.style.fontFamily="Poppins";
		textoError.style.fontSize="small";
		textoError.style.color="#CC5658";

		function2 =  false;
	}
	else{
		campo.style.borderColor = "#52CC7A";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/success-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
		textoError.innerHTML = "";
		
		function2 = true;

	}

	for (var i = 0; i < Contenidocampo.length ; i++) {
		if(Contenidocampo[i] !== "@")
		{
			campo.style.borderColor = "#D74B4B";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/error-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";

			textoError.innerHTML = "Email invalido";
			textoError.style.fontFamily="Poppins";
			textoError.style.fontSize="small";
			textoError.style.color="#CC5658";

			function2 = false;
		}
		else 
		{
			campo.style.borderColor = "#52CC7A";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/success-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";
			textoError.innerHTML = "";

			function2 = true;
			
			break;
		}
	}

}







function validarClave() {
	var campo = document.getElementById("password");
	var Contenidocampo = campo.value;


	var textoError = document.getElementById("textoPassword");
	

	if(Contenidocampo.length == 0)
	{
		campo.style.borderColor = "#D74B4B";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/error-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
	

		textoError.innerHTML = "Rellene este campo";
		textoError.style.fontFamily="Poppins";
		textoError.style.fontSize="small";
		textoError.style.color="#CC5658";

		function3 = false;
	}
	else{
		campo.style.borderColor = "#52CC7A";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/success-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
		textoError.innerHTML = "";
		
		function3 = true;
	}

	for (var i = 0; i < Contenidocampo.length ; i++) {
		if(Contenidocampo.length < 8)
		{
			campo.style.borderColor = "#D74B4B";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/error-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";

			textoError.innerHTML = "No debe tener mas de 8 caracteres";
			textoError.style.fontFamily="Poppins";
			textoError.style.fontSize="small";
			textoError.style.color="#CC5658";

			function3 = false;
		}
		else 
		{
			campo.style.borderColor = "#52CC7A";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/success-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";
			textoError.innerHTML = "";

			function3 = true;
			
			break;
		}
	}


}





function ComprobarClaves() {
	var campo = document.getElementById("confirme");
	var campo1 = document.getElementById("password");

	var Contenidocampo = campo.value;
	var Contenidocampo1 = campo1.value;



	var textoError = document.getElementById("textoConfirme");
	var textoError1 = document.getElementById("textoPassword");
	

	if(Contenidocampo.length == 0)
	{
		campo.style.borderColor = "#D74B4B";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/error-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
	

		textoError.innerHTML = "Rellene este campo";
		textoError.style.fontFamily="Poppins";
		textoError.style.fontSize="small";
		textoError.style.color="#CC5658";

		function4 = false;
	}
	else{
		campo.style.borderColor = "#52CC7A";
		campo.style.borderWidth = "2px";
		campo.style.backgroundImage = "url('./images/success-icon.svg')";
		campo.style.backgroundRepeat = "no-repeat";
		campo.style.backgroundPosition = "right";
		textoError.innerHTML = "";

		function4 = true;
		
	}

	for (var i = 0; i < Contenidocampo.length ; i++) {
		if(Contenidocampo.length < 8)
		{
			campo.style.borderColor = "#D74B4B";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/error-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";

			textoError.innerHTML = "No debe tener mas de 8 caracteres";
			textoError.style.fontFamily="Poppins";
			textoError.style.fontSize="small";
			textoError.style.color="#CC5658";

			function4 = false;

		}
		else 
		{
			campo.style.borderColor = "#52CC7A";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/success-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";
			textoError.innerHTML = "";
			
			function4 = true;
			break;
		}
	}



	if(Contenidocampo.length !== 0 && Contenidocampo1.length !== 0 && Contenidocampo.length > 8 && Contenidocampo1.length > 8)
		{
			if(Contenidocampo1.length === Contenidocampo.length && object.is(Contenidocampo, Contenidocampo1) )
			{
			campo.style.borderColor = "#52CC7A";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/success-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";
			textoError.innerHTML = "";


			campo1.style.borderColor = "#52CC7A";
			campo1.style.borderWidth = "2px";
			campo1.style.backgroundImage = "url('./images/success-icon.svg')";
			campo1.style.backgroundRepeat = "no-repeat";
			campo1.style.backgroundPosition = "right";
			textoError1.innerHTML = "";
			
			function4 = true;
			}
			else
			{
			campo.style.borderColor = "#D74B4B";
			campo.style.borderWidth = "2px";
			campo.style.backgroundImage = "url('./images/error-icon.svg')";
			campo.style.backgroundRepeat = "no-repeat";
			campo.style.backgroundPosition = "right";

			textoError.innerHTML = "Las contraseñas no coinciden";
			textoError.style.fontFamily="Poppins";
			textoError.style.fontSize="small";
			textoError.style.color="#CC5658";
			


			campo1.style.borderColor = "#D74B4B";
			campo1.style.borderWidth = "2px";
			campo1.style.backgroundImage = "url('./images/error-icon.svg')";
			campo1.style.backgroundRepeat = "no-repeat";
			campo1.style.backgroundPosition = "right";

			textoError1.innerHTML = "Las contraseñas no coinciden";
			textoError1.style.fontFamily="Poppins";
			textoError1.style.fontSize="small";
			textoError1.style.color="#CC5658";

			function4 = false;
		
			}
		}
}

function FormularioCorrecto(){
	if (function1 == true && function2 == true && function3 == true && function4 == true) {
		alert("La inscripcion ha sido correcta");
	} else {
		return false;
	}


}