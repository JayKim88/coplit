// 문제

// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
// 입력
// 인자 1 : score

//     number 타입의 정수

// 출력

//     string 타입을 리턴해야 합니다.
//     (100 - 90) --> 'A'
//     (89 - 80) --> 'B'
//     (79 - 70) --> 'C'
//     (69 - 60) --> 'D'
//     (59 - 0) --> 'F'

// 주의 사항

//     만약 주어진 점수가 100을 초과하거나 0 미만이라면 문자열 INVALID SCORE를 리턴해야 합니다.

function convertScoreToGrade(score) {
  // TODO: 여기에 코드를 작성합니다.
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 0) {
    return "F";
  }
}

function convertScoreToGrade(score) {
  let grade;
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else if (score >= 0) {
    grade = "F";
  }

  return grade;
}
