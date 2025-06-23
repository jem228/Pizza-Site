
window.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookieBanner');
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    cookieBanner.style.display = 'block';
  }
});


function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");
  const target = document.getElementById("menu");

  if (scrollBtn && target) {
    scrollBtn.addEventListener("click", function () {
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn_0");
  const target = document.getElementById("reviews");

  if (scrollBtn && target) {
    scrollBtn.addEventListener("click", function () {
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn_1");
  const target = document.getElementById("footer_js");

  if (scrollBtn && target) {
    scrollBtn.addEventListener("click", function () {
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});


////////////////////////////////////////////


   const toggleBtn = document.getElementById("togglePanel");
const sidePanel = document.getElementById("sidePanel");

toggleBtn.addEventListener("click", () => {
  sidePanel.classList.toggle("show");
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert('Ім’я: ${username}\nПароль: ${password}');
}


//////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cartToggle");
  const cartPanel = document.getElementById("cartPanel");
  const cartList = document.getElementById("cartItems");
  const MAX_CART_ITEMS = 15;

  cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("show");
    renderCart();
  });

  window.addToCart = function (productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length >= MAX_CART_ITEMS) {
      alert("Максимальна кількість товарів у корзині досягнута!");
      return;
    }

    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  window.clearCart = function () {
    localStorage.removeItem("cart");
    renderCart();
  };

  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartList.innerHTML = "";

    if (cart.length === 0) {
      cartList.innerHTML = "<li>Корзина порожня</li>";
    } else {
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
      });
    }
  }

  renderCart(); // оновлюємо при запуску
});