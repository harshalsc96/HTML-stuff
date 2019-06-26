function validateForm(){

	var email;
	var password;

	email=document.getElementById("email").value;
	password=document.getElementById("password").value;

	alert("Hello");

	if(email==""){

		alert("Email cannot be empty");
		return false;
	}
	
	if(password==""){
		alert("Password cannot be empty");
		return false;
	}

	return true;
}