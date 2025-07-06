const balckToggleBtn = document.getElementById('black-theme-toggle');
const purpletToggleBtn = document.getElementById('purple-theme-toggle');
const resetToggleBtn = document.getElementById('reset-toggle');

  // 2) Вешаем слушатель клика
  balckToggleBtn.addEventListener('click', () => {
    // Переключаем класс на <body>
    document.body.classList.toggle('dark-theme');
  });

   purpletToggleBtn.addEventListener('click', () => {
    // Переключаем класс на <body>
    document.body.classList.toggle('purple-theme');
  });