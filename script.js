
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


