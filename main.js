document.addEventListener("DOMContentLoaded", function() {
    const productosContainer = document.getElementById("products");
    const carritoContainer = document.getElementById("cart");
    let totalContainer = document.getElementById("total");

    const products = [
        { id: 1, name: "Notebook", price: 800 },
        { id: 2, name: "Smartphone", price: 500 },
        { id: 3, name: "Tablet", price: 300 },
    ];

    const cart = [];

    window.anadirCarrito = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            armarCarrito();precioTotal
        }
    };

    window.quitarDelCarrito = function(productId) {
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            armarCarrito();
        }
    };

    function armarCarrito() {
        carritoContainer.innerHTML = "";
        let precioTotal = 0;

        cart.forEach(item => {
            const cartItem = document.createElement("li");
            cartItem.className = "carrito-item";
            cartItem.innerHTML = `
                ${item.name} - $${item.price}
                <button onclick="quitarDelCarrito(${item.id})">Quitar</button>
            `;
            carritoContainer.appendChild(cartItem);

            precioTotal += item.price;
        });

        if (!totalContainer) {
            totalContainer = document.createElement("div");
            totalContainer.id = "total";
            document.body.appendChild(totalContainer);
        }

        totalContainer.textContent = `Total del carrito: $${precioTotal.toFixed(2)}`;
    }

    function cargarProductos() {
        productosContainer.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.className = "product";
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="anadirCarrito(${product.id})">Agregar al carrito</button>
            `;
            productosContainer.appendChild(productElement);
        });
    }

    cargarProductos();
});
