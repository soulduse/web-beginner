/*
	객체의 프로퍼티가 함수일 경우, 이 함수를 메서드라고 부른다. 이러한 메서드
	를 호출할 때, 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩 된다.

	메서드 호출 사용시 this 바인딩
*/

// myObject 객체 생성
var myObject = {
	name : 'foo',
	sayName : function(){
		console.log(this.name);
	}
};

// otherObject 객체 생성
var otherObject = {
	name : 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName();		// foo
otherObject.sayName();	// bar

/*
	sayName() 메서드에서 사용된 this는 자신을 호출한 객체에 바인딩 된다.
	따라서 myObject.sayName()의 this는 myObject의 name 값을,
	otherObject.sayName()의 this는 otherObject의 name 값을
	가지게 된다. 즉, this는 자신을 호출한 객체에 바인딩 된다.
*/