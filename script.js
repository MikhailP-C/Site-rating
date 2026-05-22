const swiper = new Swiper('.swiper', {
    // Направление прокрутки: 'horizontal' или 'vertical'
    direction: 'horizontal',
    loop: false, // Бесконечная прокрутка
  
    // Пагинация (точки)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Кнопки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Скроллбар
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });