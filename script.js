let menuItems=[


{
name:"Paneer Butter Masala",
category:"Main Course",
price:"₹220",
image:"https://picsum.photos/400"
},


{
name:"Veg Biryani",
category:"Main Course",
price:"₹180",
image:"https://picsum.photos/401"
},


{
name:"Cold Coffee",
category:"Drinks",
price:"₹120",
image:"https://picsum.photos/402"
}


];



function loadMenu(items){


let output="";


items.forEach(item=>{


output+=`

<div class="card">

<img src="${item.image}">

<h2>${item.name}</h2>

<p>${item.price}</p>

</div>

`;

});


document.getElementById("menu").innerHTML=output;


}



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



loadMenu(menuItems);
