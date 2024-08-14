// //target : 이벤트가 발생한 객체
// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', (evt) => { // target : button (이벤트 객체)
//   console.log(evt);
// }, false);
// // 코드의 단점 : MVC가 아님

// 윈도우에 로드한 후 실행
window.addEventListener('load, init, false'); // HTML의 모든 element가 메모리에 로딩된 후 init 호출
function init() {
  button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', myClick, false);
}

function myClick(evt) {
  console.log(evt);
}

