const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000, // 何秒かけてスライドを切り替える（ミリ秒:1000=1秒）
    effect: 'fade', // ふわっとアニメーションさせてスライドを切り替える

    autoplay: {
        delay: 5000 // 次のスライドに切り替わる時間の設定（ミリ秒:1000=1秒）
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
  