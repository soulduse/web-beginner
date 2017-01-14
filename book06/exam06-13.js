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

	var parent = this;
	var F = function(){};

	var child = function(){};

	/* 프로토타입 체이닝 */
	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent.prototype;
	child.parent_constructor = parent;

	return child;
}