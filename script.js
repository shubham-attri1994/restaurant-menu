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


<h3>${x.name}</h3>


<p>₹${x.price}</p>


<button class="add"
onclick="addItem(${i})">

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


showMenu(

items.filter(
x=>x.type==type
)

);


}

}



function addItem(i){


cart.push(items[i]);

showCart();


}



function removeItem(i){


cart.splice(i,1);

showCart();


}



function showCart(){


let html="";

let total=0;


cart.forEach((x,i)=>{


html+=`

<p>

${x.name}

₹${x.price}

<button onclick="removeItem(${i})">

❌

</button>

</p>


`;

total+=x.price;


});


document.getElementById("cart").innerHTML=html;


document.getElementById("total").innerHTML=

"Total ₹"+total;


}




function placeOrder(){


if(cart.length==0){

alert("Please add items");

return;

}



let token =
localStorage.getItem("token") || 0;


token++;

localStorage.setItem(
"token",
token
);



let msg=

"New Order\n\n"+

"Token: "+token+

"\nName: "+name.value+

"\nTable: "+table.value+

"\n\n";



cart.forEach(x=>{

msg+=x.name+
" ₹"+
x.price+
"\n";

});



alert(

"Order placed\nYour Token Number: "
+token

);



window.open(

"https://wa.me/91YOURNUMBER?text="+

encodeURIComponent(msg)

);



}



filterMenu("all");
