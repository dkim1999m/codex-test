const products = [
    {
        id: 1,
        name: 'Zapatilla Urbana',
        price: 59.99,
        img: 'https://via.placeholder.com/300x200?text=Zapatilla+1'
    },
    {
        id: 2,
        name: 'Runner Pro',
        price: 89.5,
        img: 'https://via.placeholder.com/300x200?text=Zapatilla+2'
    },
    {
        id: 3,
        name: 'Bota Clásica',
        price: 120.0,
        img: 'https://via.placeholder.com/300x200?text=Bota+3'
    }
];

const cartCountEl = document.getElementById('cart-count');
let cartCount = 0;

function renderProducts() {
    const catalogo = document.getElementById('catalogo');
    products.forEach((product) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" />
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">$${product.price.toFixed(2)}</p>
                <button class="btn" data-id="${product.id}">Añadir</button>
            </div>
        `;
        catalogo.appendChild(card);
    });
}

function addToCart(event) {
    if (event.target.matches('.btn')) {
        cartCount++;
        cartCountEl.textContent = cartCount;
        event.target.classList.add('added');
        setTimeout(() => event.target.classList.remove('added'), 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    document.getElementById('catalogo').addEventListener('click', addToCart);
});
