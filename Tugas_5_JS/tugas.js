let products = [
    { id: 1, name: "Laptop", price: 10000000 },
    { id: 2, name: "Smartphone", price: 5000000 },
    { id: 3, name: "Headphone", price: 750000 },
    { id: 4, name: "Keyboard", price: 450000 },
    { id: 5, name: "Mouse", price: 250000 }
];

const productList = document.getElementById("product-list");
const addProductBtn = document.getElementById("add-product-btn");
const popup = document.getElementById("popup");
const saveProductBtn = document.getElementById("save-product-btn");
const closePopupBtn = document.getElementById("close-popup");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");

function showProducts() {
    productList.innerHTML = "";
    products.forEach(({ id, name, price }) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>Rp${price.toLocaleString()}</td>
        `;
        productList.appendChild(row);
    });
}

addProductBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

saveProductBtn.addEventListener("click", () => {
    const name = productNameInput.value.trim();
    const price = parseInt(productPriceInput.value.trim());
    if (name && price) {
        const newProduct = {
            id: products.length + 1, // Generate ID otomatis
            name,
            price
        };
        products.push(newProduct);
        showProducts();
        popup.style.display = "none";
        productNameInput.value = "";
        productPriceInput.value = "";
    } else {
        alert("Mohon isi semua bidang!");
    }
});

showProducts();
