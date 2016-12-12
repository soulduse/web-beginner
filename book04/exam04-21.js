// arguments 객체

/*
	c, java와 같은 엄격한 언어와 달리, 자바스크립트는 함수를 호출할 때
	함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발생하지 않는다.
*/

function func(arg1, arg2){
	console.log(arg1, arg2);
}

func();
func(1);
func(1,2);
func(1,2,3);