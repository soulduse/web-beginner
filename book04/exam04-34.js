/*
	- 자바스크립트 함수는 항상 리턴값을 반환한다.
	- return 문을 사용하지 않았더라도 다음의 규칙으로 항상 리턴값을 전달한다.
*/

// 규칙 1) 일반 함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴.
// return 문 없는 일반 함수 리턴값 확인

var noReturnFunc = function(){
	console.log('This function has no return statement');
};

var result = noReturnFunc();
console.log(result);			// undefined


// 규칙 2) 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.

// 생성자 함수에서 명시적으로 객체를 리턴하지 않은 경우.
var Person = function(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var foo = new Person("Dave", 28, "male");
console.log(foo);	// { name: 'Dave', age: 28, gender: 'male' }

// 생성자 함수에서 명시적으로 객체를 리턴했을 경우.
function Student(name, subject, scroe){
	this.name = name;
	this.subject = subject;
	this.scroe = scroe;

	// 명시적으로 다른 객체 반환
	return {name:"bar", subject:"math", gender:"female"};
}

var poo = new Student('foo', 30, 'male');
console.log(poo);

/*
	위의 경우 명시적으로 다른 객체를 반환한 내용의 객체로 리턴되며, 아래에 poo 변수에서
	new Student객체 생성시 아규먼트 값으로 넘겨줬던 데이터는 객체에 반영되지 않는다.
*/

// 생성자 함수에서 명시적으로 기본타입(불린, 숫자, 문자열) 값을 리턴했을 경우.
function Zoo(name, kindOf, gender){
	this.name = name;
	this.kindOf = kindOf;
	this.gender = gender;

	// 생성자 함수의 리턴값으로 넘긴 값이 객체가 아닌 불린, 숫자, 문자열의 경우
	return 100;
}

var pad = new Zoo('tigi', 'tiger', 'male');
console.log(pad); // Zoo { name: 'tigi', kindOf: 'tiger', gender: 'male' }

/*
	결과를 보면 함수내부에서 리턴값으로 명시하였던 100이 출력되는 것이 아닌, 
	pad 객체값이 출력됨을 알 수 있다. 따라서 생성자 함수의 리턴값으로 넘긴 객체가 아닌
	불린, 숫자, 문자열의 경우는 이러한 리턴값을 무시하고 this로 바인딩된 객체가 리턴된다.
*/
