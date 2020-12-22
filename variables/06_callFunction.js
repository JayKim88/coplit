// 함수 returnWordWithJoy의 첫 번째 인자로 문자열 "I love coding"을 넣어서 실행하고, 그 결과값을 변수 word에 할당하세요.
let word = returnWordWithJoy("I love coding"); // TODO

// 아래 코드는 변경하지 마세요
function returnWordWithJoy(word) {
  if (typeof word !== "string") {
    return "wrong type";
  } else {
    return word + "!";
  }
}
