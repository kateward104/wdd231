// params.js
const products = [
    { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
    { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
    { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];


function getParamValue(paramName) {
    const paramString = window.location.search; // creates a string of info after the ?
    const params = new URLSearchParams(paramString); //gets key value pairs
    return params.get(paramName);
}

function productTemplate(product) {
    return `<section class="product">
        <img src="${product.image}" alt="${product.name}">
        <div class="product_details">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
        </div>
        </section>
    `;
    //product object as an argument, and returns the HTML markup to output that product. 
    // You should include the name, image, and price in the HTML.
}

function getProductDetails() {
    const id = getParamValue("productId"); // productId from the Url search parameter, then if it found an id it should look in the products array for that product. 
    if (id) {
        const product = products.find((item) => item.id == id);
        let productInfo = "product not found"
        if (product) {
            productInfo = productTemplate(product);
        }
        output("main", productInfo);
    }
    // If it finds a match then it should create the markup to display the product, and insert it into the main element.
}

function output(selector, markup) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("beforeEnd", markup);
}

getProductDetails();