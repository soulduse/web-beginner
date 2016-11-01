
// 유사 배열 객체의 배열 메서드 호출

var arr = ['bar'];
var obj = {
	name : 'foo',
	length : 1
};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
console.log(obj);
// obj.push('baz');

/*
	배열 arr은 push() 표준 배열 메서드를 활용해서 'baz'원소를 추가하는 것이
	가능한 반면, 유사 배열 객체 obj는 당연히 배열이 아니므로 
	push() 메서드를 호출 할 경우 에러가 발생한다.
*/