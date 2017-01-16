// 클래스의 기능을 가진 subClass 함수

/*
	funcion subClass(obj){
		//	(1) 자식 클래스 (함수 객체) 생성
		//	(2) 생성자 호출
		//	(3) 프로토타입 체인을 활용한 상속
		//	(4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
		//	(5)	자식 함수 객체 반환
	}
*/


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