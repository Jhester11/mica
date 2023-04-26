const product = [
    {
          id: 0,
      image: 'image/Doppio.jpg',
      title: 'Doppio Coffee',
      price: 140,
  },
  {
      id: 1,
      image: 'image/Espresso con panna.jpg',
      title: 'Espresso con panna',
      price: 165,
  },
  {
      id: 2,
      image: 'image/Americano.jpg',
      title: 'Americano Coffee',
      price: 170,
  },
  {
      id: 3,
      image: 'image/gg-1.jpg',
      title: 'Espresso con panna',
      price: 160,
  },
  {
      id: 4,
      image: 'image/Espresso.jpg',
      title: 'Espresso',
      price: 180,
  },
  {
      id: 5,
      image: 'image/Cappuccino.jpg',
      title: 'Cappuccino',
      price: 150,
  },
   {
      id: 6,
      image: 'image/Latte.jpg',
      title: 'Latte',
      price: 140,
  },
  {
    id: 7,
      image: 'image/Mocha Frappe.jpg',
      title: 'Mocha Frappe',
      price: 140,
  },
  {
    id: 8,
      image: 'image/Affogato Coffee.jpg',
      title: 'Affogato Coffee',
      price: 140,
  },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Php "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Php "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Php {price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}