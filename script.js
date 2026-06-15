
let items=[

{
name:"Paneer Butter Masala",
price:220,
type:"veg",
image:"images/paneer.jpg"
},


{
name:"Chicken Curry",
price:280,
type:"nonveg",
image:"images/chicken.jpg"
},


{
name:"Veg Burger",
price:120,
type:"veg",
image:"images/burger.jpg"
}

];



let cart=[];



function showMenu(data){


let html="";


data.forEach((x,i)=>{


html+=`

<div class="card">


<img src="${x.image}">


<h3>
${x.name}
</h3>


<p>
₹${x.price}
</p>


<button onclick="add(${i})">
Add
</button>


</div>


`;


});


document.getElementById("menu").innerHTML=html;


}



function filterMenu(type){


if(type=="all")
showMenu(items);


else
showMenu(
items.filter(x=>x.type==type)
);


}



function add(i){


cart.push(items[i]);

displayCart();


}



function displayCart(){


let html="";

let total=0;


cart.forEach(x=>{


html+=`

<p>
${x.name} ₹${x.price}
</p>


`;


total+=x.price;


});



document.getElementById("cartItems")
.innerHTML=html;


document.getElementById("total")
.innerHTML="Total ₹"+total;


}



function order(){


let token=
Math.floor(Math.random()*900)+100;


let msg=

"New Order\n"+
"Token: "+token+
"\nName: "+
customer.value+
"\nTable: "+
table.value+
"\n\n";


cart.forEach(x=>{

msg+=x.name+" ₹"+x.price+"\n";

});


alert(
"Order placed. Your Token is "+token
);


window.open(

"https://wa.me/91YOURNUMBER?text="+
encodeURIComponent(msg)

);


}



filterMenu("all");
