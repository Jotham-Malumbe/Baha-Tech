
// ================= GLOBAL STATE =================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ================= SELECTORS =================
const productContainer = document.getElementById("productContainer");
const cartDrawer = document.getElementById("cartDrawer");
const cartIcon = document.getElementById("cartIcon");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPriceEl = document.getElementById("totalPrice");
const emptyCartMessage = document.getElementById("emptyCartMessage");

const deliveryOption = document.getElementById("deliveryOption");
const locationSection = document.getElementById("locationSection");
const deliveryLocation = document.getElementById("deliveryLocation");

const checkoutBtn = document.getElementById("checkoutBtn");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");

const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

// ================= UTIL =================
function formatPrice(num) {
    return "Kshs. " + num.toLocaleString();
}

// ================= LOAD PRODUCTS =================
function displayProducts(productList) {
    productContainer.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.alt}" loading="lazy">
            <h4>${product.name}</h4>
            <p>${formatPrice(product.price)}</p>
            <button class="btn primary" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);
    });
}

// ================= CART LOGIC =================
function addToCart(id) {
    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity += 1;
    } else {
        const product = products.find(p => p.id === id);
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showPopup("Item added to cart");
}

function updateCartUI() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
    } else {
        emptyCartMessage.style.display = "none";
    }

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <div>
                ${item.name} <br>
                ${formatPrice(item.price)} x ${item.quantity}
            </div>
            <div>
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <button onclick="changeQty(${item.id}, 1)">+</button>
                <button onclick="removeItem(${item.id})">x</button>
            </div>
        `;

        cartItemsContainer.appendChild(div);
    });

    updateTotals();
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function changeQty(id, change) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    saveCart();
    updateCartUI();
}

function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ================= TOTAL =================
function updateTotals() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let deliveryFee = 0;

    if (deliveryOption.value !== "pickup") {
        const parts = deliveryOption.value.split("-");
        deliveryFee = Number(parts[1]);
    }

    total += deliveryFee;
    totalPriceEl.textContent = formatPrice(total);
}

// ================= DELIVERY =================
deliveryOption.addEventListener("change", () => {
    if (deliveryOption.value === "pickup") {
        locationSection.classList.add("hidden");
    } else {
        locationSection.classList.remove("hidden");
    }
    updateTotals();
});

// ================= CART DRAWER =================
cartIcon.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    overlay.classList.add("active");
});

closeCart.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

function closeDrawer() {
    cartDrawer.classList.remove("active");
    overlay.classList.remove("active");
}

// ================= SEARCH =================
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);

    noResults.style.display = filtered.length === 0 ? "block" : "none";
});

// ================= CHECKOUT =================
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    if (!customerName.value || !customerPhone.value) {
        alert("Please enter your name and phone number");
        return;
    }

    if (deliveryOption.value !== "pickup" && !deliveryLocation.value) {
        alert("Please enter delivery location");
        return;
    }

    let message = `*New Order - Baha Technocom*\n\n`;
    message += `Name: ${customerName.value}\n`;
    message += `Phone: ${customerPhone.value}\n\n`;
    message += `Items:\n`;

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        message += `- ${item.name} x${item.quantity} = Kshs. ${itemTotal}\n`;
    });

    let deliveryText = "Pickup (Free)";
    let deliveryFee = 0;

    if (deliveryOption.value !== "pickup") {
        const [place, fee] = deliveryOption.value.split("-");
        deliveryText = place;
        deliveryFee = Number(fee);

        message += `\nDelivery Location: ${deliveryLocation.value}`;
    }

    const total = subtotal + deliveryFee;

    message += `\n\nSubtotal: Kshs. ${subtotal}`;
    message += `\nDelivery (${deliveryText}): Kshs. ${deliveryFee}`;
    message += `\nTotal: Kshs. ${total}`;

    const encoded = encodeURIComponent(message);
    const phone = "254115652612";

    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
});

// ================= POPUP =================
function showPopup(text) {
    let popup = document.querySelector(".popup");

    if (!popup) {
        popup = document.createElement("div");
        popup.classList.add("popup");
        document.body.appendChild(popup);
    }

    popup.textContent = text;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}

// ================= INIT =================
// ================= INIT PRODUCTS (MERGED SOURCE) =================
function loadAllProducts() {
    const adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

    // Merge static + admin products
    const allProducts = [...products, ...adminProducts];

    displayProducts(allProducts);
}

// INIT
loadAllProducts();
updateCartUI();
// Refresh products when storage changes
window.addEventListener("storage", function () {
    loadAllProducts();
});
