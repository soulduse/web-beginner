// 객체 리터럴 방식에서의 프로토타입 체이닝

var myObject = {
	name : 'foo',
	sayName: function(){
		console.log('My name is '+this.name);
	}
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickName'));
// myObject.sayNickName();

/*
	프로토타입 체이닝
	: 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때, 해당 객체에 접근하려는
	프로퍼티 또는 메서드가 없다면 [[Prototype]]링크를 따라 자신의 부모 역할을
	하는 프로토타입 객체의 포로퍼티를 차례대로 검색하는 것.

	위의 소스를 설명하면, sayName의 경우 myObject 함수에 포함되어 있기 때문에 
	출력이 되었고, 반면 hasOwnProperty()의 경우 myObject 객체에 존재하지 않아서
	[[Prototype]] 링크를 따라 부모 역할을 하는 Object.prototype 프로토타입 객체 내에
	hasOwnProperty() 메서드가 있는지 검색한다. hasOwnProperty()는 자바스크립트
	표준 API로 Object.prototype에 포함되어 있으므로 메서드 호출시 없어서 에러가 나지 않고,
	잘 실행되는 것을 알 수 있다.

	반면에 sayNickName()의 경우 myObject 객체의 내부에도 존재하지 않고 그 부모를 따라가도
	Object.prototype 객체에도 존재하지 않으므로 에러가 발생한다.
*/