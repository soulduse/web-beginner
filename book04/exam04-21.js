// arguments 객체

/*
	c, java와 같은 엄격한 언어와 달리, 자바스크립트는 함수를 호출할 때
	함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발생하지 않는다.
*/

function func(arg1, arg2){
	console.log(arg1, arg2);
}

func();			// undefined, undefined
func(1);		// 1	undefined
func(1,2);		// 1	2
func(1,2,3);	// 1	2

/*
	결론은 정의된 함수의 인자보다 적게 함수 호출 
	=> 넘겨지지 않은 인자에서는 undefined 값이 할당.

	정의된 인자 개수보다 많게 함수를 호출
	=> 에러 발생 x, 초과된 인수는 무시된다.
*/