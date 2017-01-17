// subClass 함수와 모듈 패턴을 이용한 객체지향 프로그래밍

function subClass(obj){
	var parent = this === global ? Function : this;
	var F = function(){};

	var child = function(){
		var _parent = child.parent;

		/*
			현재 클래스의 부모 생성자가 있으며 그 함수를 호출한다. 다만
			부모가 Function인 경우는 최상위 클래스에 도달했으므로
			실행하지 않는다.
		*/
		if(_parent && _parent !== Function){
			_parent.apply(this, arguments);	// 부모 함수의 재귀적 호출
		}

		if(child.prototype._init){
			child.prototype._init.apply(this, arguments);
		}
	};

	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent;
	child.subClass = arguments.callee;
	/*
		arguments.callee는 현재 호출된 함수를 의미, 현재 호출된 함수가 
		subClass이므로 child.subClass는 subClass 함수를 참조한다.
	*/

	for(var i in obj){
		if(obj.hasOwnProperty(i)){
			child.prototype[i] = obj[i];
		}
	}

	return child;
}

var person = function(arg){
	var name = undefined;

	return {
		_init : function(arg){
			name = arg ? arg : 'Dave';
		},
		getName : function(){
			return name;
		},
		setName : function(arg){
			name = arg;
		}
	};
}

Person = subClass(person());
var jinju = new Person('Jinju');
console.log(jinju.getName());

Student = Person.subClass();
var student = new Student('student');
console.log(student.getName());
