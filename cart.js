var cart=[];
var array=[];
var list=document.getElementById("list");
window.addEventListener("load",function()
{
	if(localStorage.cart!=undefined && localStorage.cart!=null)
	{
		cart=JSON.parse(localStorage.cart);
		start();
		document.getElementById("buy").style.visibility='visible';
		document.getElementById("empty").style.display='none';
		array=JSON.parse(localStorage.array);
	}
});

function start()
{
	var s;
	for(i=0;i<cart.length;i++)
	{
		s=cart[i].name+" | | Quantity = "+cart[i].quan+" | | Cost = "+cart[i].price+"<delete onclick='del(this,"+i+")'>&#215</delete>";
		var li=document.createElement('li');
		li.innerHTML=s;
		list.appendChild(li);
	}
}

function buy()
{
	alert("Success");
    localStorage.removeItem("cart");
	self.close();
}

function del(x,c)
{
	for(i=0;i<array.length;i++)
	{
		if(array[i].name==cart[c].name)
		{
			array[i].quan+=cart[c].quan;
			localStorage.array=JSON.stringify(array);
			x.parentNode.parentNode.removeChild(x.parentNode);
			
			if(document.getElementById("list").innerHTML=="")
			{
				document.getElementById("buy").style.visibility='hidden';
		        document.getElementById("empty").style.display='block';
			}
			return;
		}
	}
}

