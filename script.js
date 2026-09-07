const whatsappNumber = "254724305617";

const products = [

    {   name: "Floral ruffle wrap skirt",
        price: 500,
        description: "Cute and stylish floral skirt with a flattering wrap design and ruffle detailing",
        image: "images/Floral ruffle wrap skirt.jpg"
    },

    {   name : "Burgundy satin ruched dress",
        price: 1000,
        description: "Elegant satin mini dress with thin strips and stylish ruched detailing",
        image: "images/Burgundy satin ruched dress.jpg"
    },

    {   name: "Burgundy lace one-shoulder dress",
        price: 1000,
        description: "Elegant burgundy lace one-shoulder dress with a flattering fitted waist",
        image: "images/Burgundy lace one-shoulder dress.jpg"
    },

    {   name: "Elegant black skirt",
        price: 500,
        description: "Elegant black skirt with a stylish ruched design and adjustable side slit",
        image: "images/Webgains.jpg"
    },
    
    {   name: "Cute coach purse", 
        price: 600, 
        description: "Stylish pink handbag with gold details and a cute pearl bow charm. Perfect for everyday use, outings, and special occasions.",
        image: "images/Cute coach purse.jpg"
    },

    {
        name: "Black Ruched Strappy Mini Dress",
        price: 1000,
        description: "Elegant and flattering black mini dress with ruched detailing and adjustable side tiesperfect for parties, dates, and nights out.",
        image: "images/Black Ruched Strappy Mini Dress.jpg"
    },

    {
        name: "red-dress.jpg",
        price: 1000,
        description: "Stylish red mini dress dress with a flattering ruched design and elegant rhinestone straps.",
        image: "images/red-dress.jpg"
    },

    {
        name: "Brown bow flat sandals",
        price: 500,
        description: "Stylish and comfortable flat sandals with a cute brown bow detail.",
        image: "images/Brown bow flat sandals.jpg"
    },

    {
        name: "Floral Handbag",
        price: 600,
        description: "Cute and elegant floral handbag perfect for any occasion.",
        image: "images/Floral Handbag.jpg"
    },

    {
        name: "Beige Designer-style slides",
        price: 600,
        description: "Elegant and Comfortable slides with a stylish woven pattern and gold-tone logo detail.",
        image: "images/Beige Designer-style slides.jpg"
    },

    {
        name: "Black ruched 2 mini dress",
        price: 1000,
        description: "Trendy black crop top and mini skirt with adjustable ties, perfect for parties, dates, and nights out.",
        image: "images/Black ruched 2 mini dress.jpg"
    },

    {
        name: "Pink bow rhinestone slides",
        price: 500,
        description: "Cute pink slides featuring a charming bow detail and sparkling rhinestones trim, perfect for any casual outfit.",
        image: "images/Pink bow rhinestone slides.jpg"
    },

    {
        name: "Sundress",
        price: 1000,
        description: "Beautiful floralsundress with a flattering fitted design, All colors available.",
        image: "images/Sundress.jpg"
    }

];


let cart = [];


/* DISPLAY PRODUCTS */

function displayProducts() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach((product, index) => {

        const message =
            `Hello Outfits Shop, I am interested in the ${product.name} priced at KSh ${product.price}.`;

        productList.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p class="description">
                        ${product.description}
                    </p>

                    <p class="price">
                        KSh ${product.price.toLocaleString()}
                    </p>

                    <div class="product-buttons">

                        <button
                            class="add-cart"
                            onclick="addToCart(${index})"
                        >
                            Add to Cart
                        </button>

                        <a
                            class="product-whatsapp"
                            href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}"
                            target="_blank"
                        >
                            WhatsApp
                        </a>

                    </div>

                </div>

            </div>
        `;
    });
}


/* ADD TO CART */

function addToCart(index) {

    cart.push(products[index]);

    updateCart();

    alert(`${products[index].name} added to cart!`);
}


/* UPDATE CART */

function updateCart() {

    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>
                    <strong>${product.name}</strong>

                    <p>
                        KSh ${product.price.toLocaleString()}
                    </p>
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;
    });

    document.getElementById("cart-total").textContent =
        total.toLocaleString();
}


/* REMOVE FROM CART */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


/* OPEN CART */

function openCart() {

    document
        .getElementById("cart-overlay")
        .classList.add("active");
}


/* CLOSE CART */

function closeCart() {

    document
        .getElementById("cart-overlay")
        .classList.remove("active");
}


/* WHATSAPP CHECKOUT */

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    let message = "Hello Outfits Shop! I would like to order:%0A%0A";

    let total = 0;

    cart.forEach((product, index) => {

        message +=
            `${index + 1}. ${product.name} - KSh ${product.price}%0A`;

        total += product.price;
    });

    message +=
        `%0ATotal: KSh ${total}%0A%0A`;

    message +=
        "Please let me know how I can complete the order.";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${message}`,
        "_blank"
    );
}


/* START WEBSITE */

displayProducts();
updateCart();