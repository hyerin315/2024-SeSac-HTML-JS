window.onload = function () {
  document.querySelector('button').addEventListener('click', () => {
    const correctAnswers = [11, 5, 42, 5, 11];
    let score = 0;
    let fail = 5;

    for (let i = 1; i <= 5; i++) {
      const userAnswer = parseInt(document.querySelector(`#a${i}`).value);
      const inputField = document.querySelector(`#a${i}`);

      if (userAnswer === correctAnswers[i - 1]) {
        score += 10;
        fail -= 1;
        inputField.classList.remove('wrong');
      } else {
        inputField.classList.add('wrong');
      }
    }

    let username = document.querySelector('#username').value;
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    let result = `${username}님의 ${year}. ${month + 1}. ${day + 1}. 계산 퀴즈 결과
총 5문제 중 ${fail}개 틀리셨습니다.
틀린 답은 빨간색으로 표시 하였습니다.
최종 점수는 <span class="red-text">${score}점</span>입니다`;

    let resultP = document.createElement('p');
    resultP.innerHTML = result;

    document.getElementById('result').innerHTML = '';
    document.getElementById('result').append(resultP);
  });
};
