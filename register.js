var array=[];

window.addEventListener("load",function()
{
	if(localStorage.users!=undefined && localStorage.users!=null)
	{
		array=JSON.parse(localStorage.users);
	}
});

document.getElementById("login").addEventListener("click",function()
{
	window.open("login.html","_self");
});

document.getElementById("username").addEventListener("blur",function()
{
	var uname=document.getElementById("username").value;
	for(i=0;i<array.length;i++)
	{
		if(array[i].uname==uname)
		{
			document.getElementById("text").style.display='block';
			document.getElementById("submit").style.visibility='hidden';
			return;
		}
	}
	document.getElementById("submit").style.visibility='visible';
	document.getElementById("text").style.display='none';
});

document.getElementById("submit").addEventListener("click",function()
{
	var uname=document.getElementById("username").value;
	var name=document.getElementById("name").value;
	var pass=document.getElementById("password").value;
	var cpass=document.getElementById("cpassword").value;
	if(pass!=cpass)
	{
		alert("Passwords Do Not Match");
		document.getElementById("password").value="";
		document.getElementById("cpassword").value="";
		return;
	}
	document.getElementById("username").value="";
	document.getElementById("name").value="";
	document.getElementById("password").value="";
	document.getElementById("cpassword").value="";
	var obj=new Object();
	obj.uname=uname;
	obj.name=name;
	obj.pass=pass;
	array.push(obj);
	localStorage.users=JSON.stringify(array);
	alert("Success");
	window.open("login.html","_self");
});