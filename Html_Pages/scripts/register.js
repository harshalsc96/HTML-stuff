function validateForm(){

	var username;
	var password;
	var cpassword;
	var email;
	var info;
	var count=0;

	//check box
	//username=document.getElementsByName("fname")[0].value

	//text
	username=document.getElementById("username").value;
	password=document.getElementById("password").value;
	cpassword=document.getElementById("cpassword").value;
	email=document.getElementById("email").value;
	info=document.getElementsByName("value");



	if(username==""){
		alert("Name field cannot be empty");
			return false;
	}
	
	 if(email==""){
			
		alert("Email cannot be empty");
		return false;
	}

	if(password==""){

		alert("Password cannot be empty");
			return false;
	}

	if(cpassword==""){

		alert("Confirm password field cannot be empty");
		return false;
	}

	if(password==cpassword){
			
	}
	else{

		alert("Password and confirm password dont match");
		return false;
		
	}

	for(var i=0;i<info.length;i++){
		if(info[i].checked){
			count++;
		}
	}

	if(count>2){
		alert("You can select only 2 checkbox");
		return false;
	}


	return true;


	

}