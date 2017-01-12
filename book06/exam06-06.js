var person = {
	name : 'Dave',
	getName : function(){
		return this.name;
	},
	setName : function(arg){
		this.name = arg;
	}
};

function create_object(o){
	function F(){};
	F.prototype = o;
	return new F();
}

function extend(obj, prop){
	console.log(prop);
	if(!prop){prop = obj; obj = this;}
	for(var i in prop) 
		obj[i] = prop[i];
	return obj;
};

var student = create_object(person);
var added = {
	setAge : function(age){
		this.age = age;
	},
	getAge : function(){
		return this.age;
	}
};

extend(student, added);

student.setAge(25);
console.log(student.getAge());
console.log(student.getName());

/*
	얕은 복사를 사용하는 extend() 함수를 사용하여 student 객체를 확장 하였다.
	extend() 함수는 사용자에게 유연하게 기능 확장을 할 수 있게 하는 주요 함수일 뿐
	만 아니라, 상속에서도 자식 클래스를 확장할 때 유용하게 사용되므로 반드시 기억하자!
*/