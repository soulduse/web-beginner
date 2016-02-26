// 내부함수
// parent() 함수 정의
function parent(){
	var a = 100;
	var b = 200;

	//child() 내부 함수 정의
	function child(){
		var b = 300;

		console.log(a);
		console.log(b);
	}
	child();
}

parent();
// child();	--> ERROR!! 


/*
function math(){
	var num1 = 100;
	var num2 = 200;

	function sum(a,b){
		return '결과 : '+(a+b);
	}

	return sum(num1, num2);
}


console.log(math());
*/