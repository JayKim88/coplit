// 문제

// 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.
// 입력
// 인자 1 : arr

//     string 타입을 요소로 갖는 배열

// 출력

//     객체를 리턴해야 합니다.

// 주의 사항

//     빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
//     입력으로 받는 배열을 수정하지 않아야 합니다.

// 입출력 예시

// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// let output = transformFirstAndLast(arr);
// console.log(output); // --> { Queen : 'Beyonce' }

// arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
// output = transformFirstAndLast(arr);
// console.log(output); // --> { Kevin : 'Spacey' }

function transformFirstAndLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    if(arr.length === 0){
      return {}
    }
  
    let newObj = {}
  
    newObj[arr[0]] = arr[arr.length-1]
  
    return newObj
  
  }
  
  
  /*
  1. 빈 배열일 경우, 빈 객체를 리턴한다. 
  2. 기존 배열에서 키(새 변수)와 값(새 변수)을 추출한다. 
  3. 새로운 객체를 리턴한다.-> 빈객체 -> 추출한 키와 값을 넣는다. 
   */
  
  
  /*
    //1
    if(arr.length === 0){
      return {};
    }
    //2
    let newKey = arr[0];
    let newVal = arr[arr.length-1];
    let newObj = {};
    //3
    newObj[newKey] = newVal;
    return newObj;
   */