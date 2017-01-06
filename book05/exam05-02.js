// 어떻게 실행 컨텍스트가 만들어질까..? 코딩전 생각해보기


var a = 100;

function e(){
	return 100;
}

function execute(param1, param2){
	var oriA = this;
	var a = 1, b = 2;
	function func(){
		return a+b;
	}

	console.log(oriA.e);

	return param1 + param2 + func();
}


console.log(execute(3,4));
// execute(3,4);