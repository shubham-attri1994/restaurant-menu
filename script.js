let menuItems=[


{
name:"Paneer Butter Masala",
category:"Main Course",
price:220,
image:"https://picsum.photos/400"
},


{
name:"Veg Biryani",
category:"Main Course",
price:180,
image:"https://picsum.photos/401"
},


{
name:"Cold Coffee",
category:"Drinks",
price:120,
image:"https://picsum.photos/402"
}


];



let cart=[];



function loadMenu(items){


let output="";


items.forEach((item,index)=>{


output+=`

<div class="card">


<img src="${item.image}">


<h2>${item.name}</h2>


<p>₹${item.price}</p>


<button onclick="addCart(${index})">

Add

</button>


</div>

`;

});


document.getElementById("menu").innerHTML=output;


}



function addCart(index){


cart.push(menuItems[index]);

showCart();


}



function showCart(){


let text="";

let total=0;


cart.forEach(item=>{


text+=`

<p>
${item.name} - ₹${item.price}
</p>

`;


total+=item.price;


});


document.getElementById("cart").innerHTML=text;


document.getElementById("total").innerHTML=
"Total: ₹"+total;


}



function placeOrder(){


if(cart.length==0){

alert("Cart is empty");

return;

}



let token =
Math.floor(Math.random()*900)+100;



let order="New Order\n\n";


order+="Token Number: "+token+"\n\n";


cart.forEach(item=>{


order+=item.name+
" ₹"+
item.price+
"\n";


});



alert(
"Order Confirmed\nYour Token Number is: "
+token
);



let message =
encodeURIComponent(order);



window.open(

"https://wa.me/91XXXXXXXXXX?text="+message

);



}



showCategory("All");



function showCategory(category){


if(category=="All"){

loadMenu(menuItems);

}

else{


let filtered =
menuItems.filter(
x=>x.category==category
);


loadMenu(filtered);


}


}
