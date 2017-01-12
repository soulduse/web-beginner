// 클래스 기반의 상속

function Person(arg){
	this.name = arg;
}

Person.prototype.setName = function(value){
	this.name = value;
};

Person.prototype.getName = function(){
	return this.name;
};

function Student(arg){

}

var you = new Person('Jinju');

Student.prototype = you;

var me = new Student('Dave');
console.log(me.getName());	// Jinju
me.setName('Dave');
console.log(me.getName());	// Dave

/*
	
	Student 함수의 객체의 프로토타입으로 하여금 Person 함수 객체의
	인스턴스를 참조하게 만들었다. 이렇게 하면 아무것도 없던 빈 깡통의 
	Student() 함수가 상속을 통해 생명을 얻을 수 있다.

	결과 :
	Student 함수 객체로 생성된 객체 me의 [[Prototype]] 링크가
	생성자의 프로토타입 프로퍼티인 Student.prototype을 가리키고,
	new Person()으로 만들어진 객체의 [[Prototype]] 링크는
	Person.prototype을 가리키는 프로토타입 체인이 형성된다.
	따라서 객체 me는 Person.prototype 프로퍼티에 접근 할 수 있고,
	setName(), getName()을 호출할 수 있다.

	Wow! 

	But It is some problem.

	먼저 me 인스턴스를 생성할 때 부모 클래스인 Person의 생성자를 호출하지 않는다.
	var me = new Student('Dave'); 
	이 코드로 me 인스턴스를 생성할 때 'Dave'를 인자로 넘겼으나, 이를 반영하는
	코드는 어디에도 없다. 결국 생성된 me 객체는 빈 객체이다.
	setName() 메서드가 호출되고 나서야 me 객체에 name 프로퍼티가 만들어 진다.
	이렇게 부모의 생성자가 호출되지 않으면, 인스턴스의 초기화가 제대로 이루어 지지 않아
	문제가 발생할 수 있다. 이를 해결하려면 Student 함수에 다음 코드를 추가하여 
	부모 클래스의 생성자를 호출해야 한다.

	function Student(arg){
		Person.apply(this, arguments);
	}
*/