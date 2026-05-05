const products = [
  {
    name: "Notebook",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350"
  },
  {
    name: "Pen",
    img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd"
  },
  {
    name: "School Bag",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1"
  },
  {
    name: "Bottle",
    img: "https://images.unsplash.com/photo-1526401485004-2fda9f4b8c3d"
  }
];

let cart = [];

function displayProducts() {
  const div = document.getElementById("products");

  products.forEach((p, i) => {
    div.innerHTML += `
      <div class="col-md-3 col-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" style="height:150px;object-fit:cover;">
          <div class="card-body text-center">
            <h5>${p.name}</h5>
            <button class="btn btn-primary w-100" onclick="addToCart(${i})">
              Add
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `
      <li class="list-group-item">${item.name}</li>
    `;
  });
}

function placeOrder() {
  let message = "🛍️ Yadgar Shop Order:%0A";

  cart.forEach(item => {
    message += item.name + "%0A";
  });

  window.open(`https://wa.me/91YOURNUMBER?text=${message}`);
}

displayProducts();