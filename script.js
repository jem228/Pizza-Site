// Показати банер cookie, якщо користувач ще не дав згоду
window.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookieBanner');
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    cookieBanner.style.display = 'block';
  }
});

// Прийняти cookies
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

// Обробка кнопки "Замовити зараз"
document.addEventListener('DOMContentLoaded', () => {
  const orderBtn = document.querySelector('.promo button');
  orderBtn.addEventListener('click', () => {
    alert('Дякуємо за замовлення! З вами звʼяжеться наш оператор 📞');
  });

  // Додати обробник на всі кнопки "додати"
  const addButtons = document.querySelectorAll('.add-btn');
  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const pizzaName = card.querySelector('h4').textContent;
      alert(`✅ ${pizzaName} додано до кошика!`);
    });
  });
});
