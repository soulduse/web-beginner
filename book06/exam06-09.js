// 캡슐화

/*
	캡슐화 - 관련된 여러가지 정보를 하나의 틀 안에 담는 것을 의미.
	정보의 은닉이 캡슐화와 연관이 깊은데, C++ 이나 Java에서는 
	public, private 멤버를 선언함으로써 해당 정보를 외부로 노출시킬지
	여부를 결정한다. 하지만 자바스크립트는 이러한 키워드를 지원하지 않는다.
	그렇다고해서 자바스크립트에서 정보 은닉이 불가능 한것은 아니다.
*/

var Person = function(arg){
	var name = arg ? arg : 'Dave';

	this.getName = function(){
		return name;
	}

	this.setName = function(arg){
		name = arg;
	}
};

var me = new Person();
console.log(me.getName());
me.setName('Soul');
console.log(me.getName());
console.log(me.name);

/*
	핵심 팩트는
	this객체의 프로퍼티 선언하면 외부에서 new 키워드로 생성한 객체로
	접근할 수 있다. 하지만 var 로 선언된 멤버들은 외부에서 접근이 불가능!
	그리고 public 메서드가 클로저 역할을 하면서 private 멤버인
	name에 접근할 수 있다.

	다음 코드에서는 더 깔끔하게 코드를 수정해보는 공부를 할 예정!
*/