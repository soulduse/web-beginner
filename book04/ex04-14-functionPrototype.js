// Myfunction() 함수정의

function myFunction(){
	return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);



/*
	4.2.3.2 prototype 개념 이해가 잘안감.
	나중에 다시 볼것.

	대충 이해한 내용은
	1. myFunction.prototype의경우 함수에 프로토타입이므로 constructor, __proto__두개의 프로퍼티가 존재하고,
	prototype객체 역시 자바스크립트 객체이기 때문에 자신의 부모역할을 하는 __proto__프로퍼티 존재.

	2. myFunction.prototype.constructor 함수의 생성자를 출력하였다. 프로토타입 객체와 매핑된 함수를 알아 볼수 있고,
	그 결과로 name, prototype은 myFunction을 가리키고 있다.

	알것 같으면서도 먼가 복잡하게 얽혀있는 기분이다.
*/