// 배열의 동적 프로퍼티 생성

// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr);


// 배열의 length프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 때만 변경됨.

for(var prop in arr){
	console.log(prop, arr[prop]);
}

for(var i=0; i<arr.length; i++){
	console.log(i, arr[i]);
}