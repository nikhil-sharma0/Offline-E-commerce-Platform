var array=[];

window.addEventListener("load",function()
{
	if(localStorage.users!=undefined && localStorage.users!=null)
	{
		array=JSON.parse(localStorage.users);
	}
});

function check(uname,pass)
{
	for(i=0;i<array.length;i++)
	{
		if(array[i].uname==uname && array[i].pass==pass)
		{
			return 1;
		}
	}
	return 0;
}

document.getElementById("login").addEventListener("click",function()
{
	var uname=document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	if(uname=="" || pass=="")
	{
		alert("No field can be left empty");
		return;
	}
	if(uname=="admin" && pass=="admin" || check(uname,pass))
	{
		sessionStorage.login=1;
		window.open("product.html","_self");
	}
	else 
	{
		alert("Username or Password Incorrect");
		document.getElementById("username").value="";
	    document.getElementById("password").value=""	;
	}
});

document.getElementById("register").addEventListener("click",function()
{
	window.open("register.html","_self");
});

document.getElementById("deldata").addEventListener("click",function()
{
	var pass=prompt("Enter master password");
	if(pass=="nikhil8997")
	{
		localStorage.removeItem("users");
		windows.alert("User data deleted.");
	}
	else
	{
		alert("Password Incorrect");
	}
});

document.getElementById("del").addEventListener("click",function()
{
	var pass=prompt("Enter master password");
	if(pass=="nikhil8997")
	{
		localStorage.clear();
		windows.alert("Entire data deleted.");
	}
	else
	{
		alert("Password Incorrect");
	}
});