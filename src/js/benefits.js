const buttonBenefist = document.querySelector('.btn-benefits');

// Додаємо подію 'click' на кнопку
button.addEventListener('click', function () {
  // Скролимо до елемента з id="work-together"
  document.getElementById('work-together').scrollIntoView({
    behavior: 'smooth',
  });
});
