const buttonBenefist = document.querySelector('.btn-benefits');

// Додаємо подію 'click' на кнопку
buttonBenefist.addEventListener('click', function () {
  // Скролимо до елемента з id="work-together"
  document.getElementById('work-together').scrollIntoView({
    behavior: 'smooth',
  });
});

// Додаємо подію 'mouseover' і 'mouseout'
const listItemsBenefits = document.querySelectorAll('.list-item-benefits');

listItemsBenefits.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.06)';
    item.style.transition = 'transform 0.3s ease';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});
