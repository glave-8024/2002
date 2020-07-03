import Swiper from 'swiper';    
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    
    //可选选项，自动滑动
    autoplay: {
        disableOnInteraction: true,
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })   