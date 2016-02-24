
// arr 배열 생성
var arr = ['zero', 'one', 'two'];

// push() 메서드 호출
arr.push('three');
console.log(arr);


// 현재 크기는 4 이고 0부터 3번지 까지 담겨있다.
console.log(arr.length); 

// length 값 변경 후, push() 메소드 호출
arr.length = 5;
arr.push('four');

// 예상 [ 'zero', 'one', 'two', 'three', undefind, 'four']
console.log(arr); 
// 출력결과 : [ 'zero', 'one', 'two', ,'three' ]
// 중간에 공백값이 들어가있다.
// 결론 : 배열의 length 프로퍼티는 배열 메서드 동작에
// 영향을 줄 수 있는 만큼 배열에서 중요한 프로퍼티 임을 기억!