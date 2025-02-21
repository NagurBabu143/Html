let cartCount = 0; 
let totalPrice = 0; 
const cartItems = []; 

function addToCart(itemName, itemPrice) {
    
    cartCount++;
    totalPrice += itemPrice;

  
    cartItems.push({ name: itemName, price: itemPrice });

   
    const count = document.getElementById("cart-count")
    count.innerText = `Items in Cart: ${cartCount}`;
    const price = document.getElementById("total-price")
    price.innerText = `Total Price: ₹${totalPrice.toFixed(2)}`;

    
    const cartSection = document.querySelector("#cart");
    const itemList = document.querySelector("#cart-item-list");

    if (!itemList) {
        const ul = document.createElement("ul");
        ul.id = "cart-item-list";
        cartSection.appendChild(ul);
    }

    const listItem = document.createElement("li");
    listItem.innerText = `${itemName} - ₹${itemPrice.toFixed(2)}`;
    const list = document.querySelector("#cart-item-list");
    list.appendChild(listItem);

    
    alert(`${itemName} has been added to your cart.`);
}

function validateForm() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return false;
    }
    alert("Thank you for contacting us! We will get back to you soon.");
    return true;
}
