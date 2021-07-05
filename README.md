# 하얏트홈페이지 만들어보기

## 완성된 홈페이지
<img width= "80%" src = "https://user-images.githubusercontent.com/81519415/122065552-ffc64980-ce2c-11eb-9d44-8b88a2cea9e7.png"/>

<hr>

### date선택
<img width="70%" src= "https://user-images.githubusercontent.com/81519415/122065765-297f7080-ce2d-11eb-95ff-2539c86ed206.PNG" />

```html
  <!-- DATEPICKER -->
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
  <script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
```
```js
$(".Date" ).datepicker({ 
  numberOfMonths: [1,2],
  dayNamesMin : ['일','월','화','수','목','금','토'],
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'], 
  format: 'yyyy-MM-dd'
});
```
<hr>

### 이미지 슬라이드
<img width ="70%" src= "https://user-images.githubusercontent.com/81519415/122065612-0ce33880-ce2d-11eb-9bc3-850d2ea8d8b4.PNG"/>

```html
 <!-- SWIPER 사용 -->
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

  <!-- PROMOTION -->
  <div class="promotion">
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <div class="img-slide one">
            <div class="img-cover">
              <h2>한정 기간 혜택</h2>
              <h1>여행지를 선택하고 <br/> 혜택을 골라 보세요.</h1>
              <h3>지금 예약하고 2021년 9월 30일까지의 투숙에 대한 객실 요금 할인을 받거나 무료 숙박을 적립하세요.</h3>
              <button class="btn-detail">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-slide two">
            <div class="img-cover">
              <h1>유연한 여행 계획</h1>
              <h3>햐얏트 월드 회원자격으로 여행 계획을 더 유연하게 진행하며, 비용도 절감하는 많은 기회를 잡아보세요.</h3>
              <button class="btn-detail">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-slide three">
            <div class="img-cover">
              <h1>자동차 여행을 계획해 보세요</h1>
              <h3>여행 중 전 세계 하얏트 호텔 또는 리조트에서 아웃도어 모함과 함께 편리한 투숙을 즐겨 보세요.</h3>
              <button class="btn-detail">자세히 알아보기</button>
            </div>
          </div>
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>
      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
```
```js
//슬라이드 요소 관리
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
//Promotion 슬라이드 토글 기능
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
```
