

// 배열의 프로퍼티 동적 생성

var arr = ['zero', 'one', 'two'];
console.log(arr.length); 

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'Kim hyunwoo';
console.log(arr);

// 동적으로 기존 배열에서 값이 추가되었음을 알 수 있다.
// 출력결과 : [ 'zero', 'one', 'two', color: 'blue', name: 'Kim hyunwoo' ]

// 배열 원소 추가
arr[3] = 'red';

// 예상 length = 6, 결과 : [ 'zero', 'one', 'two', 'red', color: 'blue', name: 'Kim hyunwoo' ]

console.log(arr.length);

console.log(arr);
console.log(arr.toString());



/*
 생각한 예상결과와는 달리 length 값이 6이 아니라 4가 나왔다.
 그리고 이상한 점이 있는데

console.log(arr); 로 출력 시 
결과 : [ 'zero', 'one', 'two', 'red', color: 'blue', name: 'Kim hyunwoo' ]
console.log(arr.toString()); 로 출력시
결과 : zero,one,two,red 값만 출력된다.

즉, 배열에 담긴 내용을 String 형식으로 변환 후 출력 시에는 배열의 원소값만 출력되며,
추가한 프로퍼티 값은 출력되지 않는다.
또한, 배열의 length프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경 되는 것을 알 수 있다.
*/


// 배열에 추가된 프로퍼티 값 출력
console.log(arr.color);
console.log(arr.name);