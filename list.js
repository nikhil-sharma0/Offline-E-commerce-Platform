var array=[];
var cart=[];

function update(z,i)
{
	z.innerHTML="";
	var x;
	for(j=0;j<array[i].quan;j++)
	{
		x+="<option>"+(j+1)+"</option>";
	}
	z.innerHTML=x;
}


function apply(x,i)
{
	var obj=new Object();
	var quan=x.parentNode.getElementsByTagName("select")[0].value;
	obj.quan=parseInt(quan);
	obj.name=array[i].name;
	obj.price=array[i].price*quan;
	array[i].quan-=quan;
	cart.push(obj);
	alert("Added successfully!");
	update(x.parentNode.getElementsByTagName("select")[0],i);
}

document.getElementById("checkout").addEventListener("click",function()
{
	localStorage.cart=JSON.stringify(cart);
	localStorage.array=JSON.stringify(array);
	window.open("cart.html","_self");
});



function load()
{
	var ul=document.getElementById("list");
	for(i=0;i<array.length;i++)
	{
		var li=document.createElement('li');
		li.innerHTML="| | Name - "+array[i].name+" | | Description - "+array[i].desc+" | | Price = "+array[i].price+" | | Quantity - ";
		var x="<select>";
		for(j=0;j<array[i].quan;j++)
		{
			x+="<option>"+(j+1)+"</option>";
		}
		x+="</select><br><apply onclick=apply(this,"+i+")>&#10003;<apply>";
		li.innerHTML+=x;
		ul.appendChild(li);
		
	}
}

window.addEventListener("load",function()
{
	if(localStorage.array!=undefined && localStorage.array!=null)
	{
		array=JSON.parse(localStorage.array);
		document.getElementById("checkout").style.display='block';
		document.getElementById("empty").style.display='none';
		load();
	}
});
