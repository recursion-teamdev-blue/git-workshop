const swiper = new Swiper('.slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000, // 何秒かけてスライドを切り替える（ミリ秒）
    effect: 'fade', // フェードでスライドを切り替え

    autoplay: {
        delay: 3000 // 次のスライドに切り替わる時間の設定（ミリ秒）
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  