// const menuBtn = document.querySelector('.nav-menu .menu');
// const menuList = document.querySelector('.nav-menu .menu-list');

// menuBtn.addEventListener('click', function() {
//   menuList.classList.toggle('active');
// });
const langBtn = document.querySelector('.container-menu .lang');
const langList = document.querySelector('#lang-list');

langBtn.addEventListener('click',()=>{
  langList.classList.toggle('show');
})

const loginBtn = document.querySelector('.container-menu .login');
const loginList = document.querySelector('#login-list');

loginBtn.addEventListener('click',()=>{
  loginList.classList.toggle('show');
})

const navlistBtn = document.querySelector('.main .nav-list');
const mainList = document.querySelector('.main .main-list');

navlistBtn.addEventListener('click',()=>{
  mainList.classList.toggle('show');
})


$(".Date" ).datepicker({ 
  numberOfMonths: [1,2],
  dayNamesMin : ['일','월','화','수','목','금','토'],
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
  format: 'yyyy-MM-dd'
});

/**
 * 슬라이드 요소 관리
 */
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  //slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  //spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-button-next' // 다음 버튼 선택자
  }
})


/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('.promotion')
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion')
// 슬라이드 영역 숨김 여부 기본값!
let isHidePromotion = false
// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHidePromotion = !isHidePromotion
  // 요소를 숨겨야 하면,
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    promotionEl.classList.remove('hide')
  }
})