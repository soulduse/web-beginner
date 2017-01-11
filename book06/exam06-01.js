

// 클래스, 생성자, 메서드

function Person(arg){
	this.name = arg;

	this.getName = function(){
		return this.name;
	}

	this.setName = function(value){
		this.name = value;
	}
}

var me = new Person('Dave');
console.log(me.getName());

me.setName('Hyunwoo');
console.log(me.getName());

/*
	var me = new Person('Dave')
	이 형태는 기존 객체지향 프로그래밍 언어와 한 클래스의 인스턴스를 
	생성하는 코드와 매우 유사하다. 함수 Person이 클래스이자 생성자의 역할을 한다.
	자바스크립트에서 클래스 기반 객체지향 프로그래밍은 기본적인 형태가 이와 같다.

	여기서 생성된 me는 Person의 인스턴스로 name 변수가 있고, 
	getName(), setName() 함수가 있다.

	하지만 Person 함수의 구현이 바람직 하지 못하다. 만약
	Person을 생성자로 하여 여러개의 객체를 생성한다고 가정하면

	var me = new Person("me");
	var you = new Person("you");
	var him = new Person("him");

	이 코드를 작성후 실행하게 되면 겉보기엔 정상적으로 작동 되는것 처럼보이나,
	각 객체에 자기 영역에서 공통적으로 사용할 수 있는 setName(), getName()
	함수를 따로 생성하고 있다. 이는 불필요하게 중복되는 영역을 메모리에 올려놓고
	사용함을 의미하고 자원낭비를 가져온다.

	따라서 위의 문제를 해결하려면 다른 방식의 접근이 필요한데, 여기서 활용할 수 있는
	자바스크립트 특성이 함수 객체의 프로토타입이다.

	exam06-02에서 공부 및 작성하도록 하겠다.
*/