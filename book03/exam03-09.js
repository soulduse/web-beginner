// 객체 리터럴을 통한 foo 객체 생성

/*
	자바스크립트에서는 객체의 프로퍼티를 delete연산자를 이용해 
	즉시 삭제할 수 있다. 주의할 점은 delete 연산자는 객체의
	프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못한다.
*/

var foo = {
	name : 'foo',
	nickname : 'babo'
};

console.log(foo);
console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);
console.log(foo);