
// 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출.

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
	유사 배열 객체도 배열 메서드를 사용하는 것이 가능하다
*/