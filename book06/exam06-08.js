// 두 클래스의 프로토차입 사이에 중개자를 만들어 보자.

function Person(arg){
	this.name = arg;
}

Function.prototype.method = function(name, func){
	this.prototype[name] = func;
}

Person.method('setName', function(value){
	this.name = value;
});

Person.method('getName', function(){
	return this.name;
});

function Student(arg){

}

function F(){};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

var me = new Student();
me.setName('Dave');
console.log(me.getName());