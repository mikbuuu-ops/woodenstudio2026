console.log("JabaScriptの動作確認");

// 処理に必要な要素の取得====================

// ハンバーガーメニューの要素をJavaScriptでHTMLから取得する
// モバイルナビゲーションの要素をJavaScriptでHTMLから取得する

// ここまで===============================


// 実際の処理================================

// ・ハンバーガーメニューがクリックされた時の処理を設定する
// ・モバイルナビゲーションにactiveクラスをつける

// =======================================

const hamburger = document.getElementById("hamburger")
const mobileNav = document.getElementById("mobile-nav")

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('active')
  mobileNav.classList.toggle('active')
})

document.querySelectorAll('.nav__item').forEach(item => {
  item.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
  });
});



// gsap animation
// ヒーローエリア
gsap.to(".hero-container", {
  opacity: 1,
  duration: 1.5,
  ease: "power2.out"
});

const heroTl = gsap.timeline();

heroTl
  // 背景をフェードイン
  .to(".hero-container", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  })

  // 少し遅れてタイトルを表示
  .to(".hero__title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.6"); // ← 前のアニメーションの0.5秒前から開始

  // 商品ラインナップ
  gsap.from(".product-link",{
    scrollTrigger:{
      trigger: ".product",
      start: "top 50%",
      markers: false,
    },opacity: 0,
     y:40, 
     duration: 0.8, 
     stagger: 0.2,
     ease: "power2.out"
    })