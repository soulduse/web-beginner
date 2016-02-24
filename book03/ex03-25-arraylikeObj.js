var arr = ['bar'];
var obj = {
	name : 'foo',
	length : 1
};

arr.push('baz');
console.log(arr);

obj.push('baz');


/*

배열 arr은 push () 표준 배열 메서드를 활용해서 ‘baz’ 원소를 추가히는
것이 가능한 반면에， 유사 배열 객체 obj는 당연히 배열이 아니므로 바로 push () 메서드를 호출
할 경우 에러가 발생한다.

하지만 apply() 메서드를 활용하면 객체지만 표준 배열 메서드를 활용하는 것이 가능하다.
예제는 ex3-26번에서 작성.
*/