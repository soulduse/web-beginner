// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo['major']);
console.log(foo['nickname']);

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

// 대괄호 표기법만 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);
// console.log(foo.full-name);
console.log(foo.full);
// console.log(name);

foo.computer = {
	mouse : 'y',
	monitor : 'y',
	hdd		: 'n'
};

console.log(foo);
console.log(foo.computer);
console.log(foo.computer.mouse);


/* 	자바스크립트 객체의 프로퍼티 값을 할당할 때, 프로퍼티가 이미 있을 경우는
	해당 프로퍼티의 값이 갱신되지만, 객체의 해당 프로퍼티가 없을 경우에는
	새로운 프로퍼티가 동적으로 생성된 후 값이 할당된다.
*/