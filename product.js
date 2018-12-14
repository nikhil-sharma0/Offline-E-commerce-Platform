var id=100;
var array=[];
var ul=document.getElementById("list");

window.addEventListener("load", function()
{
	if(sessionStorage.login!=1 || sessionStorage.login==undefined)
	{
		window.open("login.html","_self");
		return;
	}
	if(localStorage.array!=undefined && localStorage.array!=null)
	{
    document.getElementById("clear").style.visibility="visible";
	array=JSON.parse(localStorage.array);
	for(i=0;i<array.length;i++)
	{
		var li = document.createElement("li");
		li.id=array[i].id;
		li.textContent=array[i].name+" | "+array[i].price +" | "+array[i].quan+" | "+array[i].desc;
		li.innerHTML+="<delentry onclick=delentry(this)>&#215</delentry><editentry onclick=editentry(this)>&#9985</editentry>";
		ul.appendChild(li);
	}
	}
});


document.getElementById("button").addEventListener("click",function()
{
	document.getElementById("button").style.display='none';
    document.getElementById("click").style.display='block';
});
document.getElementById("submit").addEventListener("click",function()
{
	var obj=new Object();
	obj.id=++id;
	obj.name=document.getElementById("name").value;
	obj.price=document.getElementById("price").value;
	obj.price=parseFloat(obj.price);
	obj.quan=document.getElementById("quan").value;
	obj.quan=parseInt(obj.quan);
	obj.desc=document.getElementById("desc").value;
	if(!obj.name || !obj.price || !obj.quan || !obj.desc)
	{
		alert("All fields are mandatory(Price and Quantity should be numbers only)");
		return;
	}
	array.push(obj);
	back();
	document.getElementById("clear").style.visibility="visible";
	document.getElementById("name").value="";
	document.getElementById("price").value="";
	document.getElementById("quan").value="";
	document.getElementById("desc").value="";
    var li = document.createElement("li");
	li.id=obj.id;
	li.textContent=obj.name+" | "+obj.price +" | "+obj.quan+" | "+obj.desc;
	li.innerHTML+="<delentry onclick=delentry(this)>&#215</delentry><editentry onclick=editentry(this)>&#9985</editentry>";
	ul.appendChild(li);
});

document.getElementById("clear").addEventListener("click",function()
{
	document.getElementById("list").innerHTML="";
	localStorage.removeItem("array");
	array.splice(0,array.length);
	document.getElementById("clear").style.visibility="hidden";
});

function  delentry(x)
{
	var id=x.parentNode.id;
	for(i=0;i<array.length;i++)
	{
		if(array[i].id==id)
		{
			break;
		}
	}
	x.parentNode.parentNode.removeChild(x.parentNode);
	array.splice(i,1);
	if(ul.innerHTML=="")
{
	document.getElementById("clear").style.visibility="hidden";
}
}

function editentry(x)
{
	y=x.parentNode.id;
	for(i=0;i<array.length;i++)
	{
		if(array[i].id==y)
		{
			eupdate(i,x)
		}
	}
}

function eupdate(i,x)
{
	document.getElementById("button").style.display='none';
    document.getElementById("click").style.display='block';
	document.getElementById("name").value=array[i].name;
	document.getElementById("price").value=array[i].price;
	document.getElementById("quan").value=array[i].quan;
	document.getElementById("desc").value=array[i].desc;
	delentry(x);
}

function back()
{
	document.getElementById("button").style.display='block';
    document.getElementById("click").style.display='none';
}

document.getElementById("logout").addEventListener("click",function()
{
	if(array.length>0)
	{
	localStorage.array=JSON.stringify(array);
	}
	sessionStorage.login=0;
	window.open("login.html","_self");
	alert("You are logged out");
});