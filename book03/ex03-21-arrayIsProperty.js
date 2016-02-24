var arr = ['zero', 'one', 'two'];

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'Kim hyunwoo';

console.log('----[for in]----');
for(var prop in arr){
	console.log(prop, arr[prop]);
}

console.log('----[for]----');
for(var i=0; i<arr.length; i++){
	console.log(i, arr[i]);
}

/*
	결과
	----[for in]----
	0 zero
	1 one
	2 two
	color blue
	name Kim hyunwoo

	----[for]----
	0 'zero'
	1 'one'
	2 'two'

	- for in문은 배열의 요소와 color, name 프로퍼티까지 출력.
	- for문은 배열의 요소만을 출력.
*/