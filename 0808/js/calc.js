// window : 전역변수(global), addEventListner -> 브라우저의 이벤트
window.addEventListener('load', () => { // body의 모든 element가 로딩을 할 때 = 윈도우가 로드할 때(false 생략가능)
  const mybutton = document.getElementById('mybutton');
  mybutton.addEventListener('click', calc);
  const result = document.getElementById('result');
  result.style.visibility = 'hidden'; // 공간은 두지만 안보이게 하기

  // document : 문서, addEventListerner -> 도큐먼트의 이벤트
  document.getElementById('mybutton').addEventListener('click', () => {
    alert("축하합니다.");
  });
});

function calc() {
  const f = document.forms[0]; //forms : body의 form을 호출 / 폼이 하나 밖에 없으므로 [0]
  let result = Number(f.first.value) + Number(f.second.value);
  document.getElementById('result').innerHTML = `<div style='color: red'>${result}</div>`; // 결과를 빨간 글씨로 표시하기
  //f.result.innerHTML = result;
  //alert(f.first.value);
}