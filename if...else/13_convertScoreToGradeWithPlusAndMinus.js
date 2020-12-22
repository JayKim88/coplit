// 문제

// 점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
// 입력
// 인자 1 : score

//     number 타입의 정수

// 출력

//     string 타입을 리턴해야 합니다.
//     각 등급의 최저 점수는 아래와 같습니다. ('F'의 경우 최대 점수를 표기)
//     90 이상 --> 'A'
//     80 이상 --> 'B'
//     70 이상 --> 'C'
//     60 이상 --> 'D'
//     60 미만 --> 'F'

// 주의 사항

//     만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
//     각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다.
//     각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
//     F+ 와 F- 는 존재하지 않습니다.

function convertScoreToGradeWithPlusAndMinus(score) {
  // TODO: 여기에 코드를 작성합니다.
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  } else if (score >= 98) {
    return "A+";
  } else if (score > 93) {
    return "A";
  } else if (90 <= score && score <= 93) {
    return "A-";
  } else if (score >= 88) {
    return "B+";
  } else if (score > 83) {
    return "B";
  } else if (80 < score && score <= 83) {
    return "B-";
  } else if (score >= 78) {
    return "C+";
  } else if (score > 73) {
    return "C";
  } else if (70 < score && score <= 73) {
    return "C-";
  } else if (score >= 68) {
    return "D+";
  } else if (score > 63) {
    return "D";
  } else if (60 <= score && score <= 63) {
    return "D-";
  } else if (score < 60) {
    return "F";
  }
}

function plusOrMinus(score) {
  const extra = score % 10;
  if (extra <= 2) {
    return "-";
  } else if (extra >= 8) {
    return "+";
  } else {
    return "";
  }
}

function convertScoreToGradeWithPlusAndMinus(score) {
  let grade;
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }
  if (score === 100) {
    return "A+";
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

  if (grade !== "F") {
    grade = grade + plusOrMinus(score);
  }
  return grade;
}
