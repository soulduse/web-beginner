function Person(arg){
	this.name = arg;
}

Person.prototype.getName = function(){
	return this.name;
}

Person.prototype.setName = function(value){
	this.name = value;
}

var me = new Person('me');
var you = new Person('you');
var him = new Person('him');

console.log(me.getName());
console.log(you.getName());
console.log(him.getName());

/*
	이와 같이 작성한다면 Person 함수 객체의 prototype 프로퍼티에
	getName(), setName() 함수를 정의하여 이 Person으로 객체를 생성한다는 것은
	각 객체는 각자 따로 함수 객체를 생성할 필요 없이 setName(), getName()
	함수를 프로토타입 첸으로 접근할 수 있다.

	더글라스 크락포드는 다음과 같은 함수를 제시하면서 메서드를 정의하는 방법을
	소개한다.

	이를 이용하여 exam06-03을 공부해보도록 하자.
*/

Function.prototype.method = function(name, func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
	}
}