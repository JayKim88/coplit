// 문제

// 수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.
// 입력
// 인자 1 : num

//     number 타입의 정수 (num >= 1)

// 출력

//     string 타입을 리턴해야 합니다.
//     3으로 나누어 떨어지는 경우, 'Fizz'를 리턴해야 합니다.
//     5으로 나누어 떨어지는 경우, 'Buzz'를 리턴해야 합니다.
//     3과 5로 모두 나누어 떨어지는 경우, 'FizzBuzz'를 리턴해야 합니다.
//     3이나 5로 나누어 떨어지지 않는 경우, 'No FizzBuzz'를 리턴해야 합니다.

function fizzBuzz(num) {
  // TODO: 여기에 코드를 작성합니다.
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  }
  return "No FizzBuzz";
}
