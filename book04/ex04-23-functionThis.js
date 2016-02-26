// 메서드 호출 사용 시 this 바인딩

// myObject 객체 생성

var myObject = {
	name : 'foo',
	sayName : function(){
		console.log(this.name);
	}
};

// otherObject객체 생성
var otherObject = {
	name : 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;	
// otherObject객체에 sayName메서드를 생성 후 myObject 객체의 sayName 메서드를 복사

// sayName() 메서드 호출.
myObject.sayName();		// foo
otherObject.sayName();	// bar