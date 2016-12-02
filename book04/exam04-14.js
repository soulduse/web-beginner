// MyFunction()함수 정의

function myFunction(){
	return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);

/*
	3Line - myFunction() 함수생성. 함수가 생성됨과 동시에 myFunction()
	함수의 prototype 프로퍼티에는 이 함수와 연결된 프로토타입 객체가 생성된다.

	7Line - myFunction() 함수의 프로토타입 객체를 의미한다.
			크롬브라우저에서 확인결과 myFunction.prototype 객체는
			constructor, _proto_라는 두 개의 프로퍼티가 있다.
			이 객체는 myFunction() 함수의 프로토타입 객체이므로
			constructor 프로퍼티가 있음을 확인할 수 있다.
			또한, 프로토타입 객체 역시 자바스크립트 객체이므로 예외없이
			자신의 부모 역할을 하는 _proto_ 프로퍼티가 있다.

	8Line - 프로토타입 객체와 매핑된 함수를 알 수 있으며, 결과값을 보면
			myFunction() 함수를 가리키고 있다.
*/