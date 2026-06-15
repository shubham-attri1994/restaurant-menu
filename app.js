let items = [

{
name:"Paneer Butter Masala",
price:220,
type:"veg",
category:"Main Course",
image:"https://picsum.photos/300/200?1"
},

{
name:"Chicken Curry",
price:280,
type:"nonveg",
category:"Main Course",
image:"https://picsum.photos/300/200?2"
},

{
name:"Veg Burger",
price:120,
type:"veg",
category:"Snacks",
image:"https://picsum.photos/300/200?3"
},

{
name:"Chicken Burger",
price:180,
type:"nonveg",
category:"Snacks",
image:"https://picsum.photos/300/200?4"
}

];


let cart=[];



function showMenu(data){


let html="";


data.forEach((item)=>{


html += `

<div class="card">


<img src="${item.image}">


<h3>${item.name}</h3>


<p>₹${item.price}</p>


<button onclick="addItem('${item.name}')">

Add To Order

</button>


</div>

`;


});


document.getElementById("menu").innerHTML=html;


}




function filterMenu(type){


if(type=="all"){

showMenu(items);

}

else{


let result =
items.filter(
item => item.type === type
);


showMenu(result);


}


}




function addItem(name){


let item =
items.find(
x=>x.name===name
);


cart.push(item);


showCart();


}




function showCart(){


let html="";

let total=0;


cart.forEach((item,index)=>{


html+=`

<p>

${item.name} ₹${item.price}

<button onclick="removeItem(${index})">

❌

</button>


</p>

`;


total += item.price;


});


document.getElementById("cart").innerHTML=html;


document.getElementById("total").innerHTML=
"Total ₹"+total;


}




function removeItem(index){


cart.splice(index,1);

showCart();


}





function placeOrder(){


if(cart.length===0){

alert("Add items first");

return;

}



let token =
Number(localStorage.getItem("token") || 0)+1;


localStorage.setItem(
"token",
token
);



let message=

"New Order\n"+
"Token: "+token+
"\n\n";


cart.forEach(item=>{

message +=
item.name+
" ₹"+
item.price+
"\n";

});



alert(
"Order placed. Token: "+token
);



window.open(

"https://wa.me/918894325304?text="+
encodeURIComponent(message)

);



}




showMenu(items);
