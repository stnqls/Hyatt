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
