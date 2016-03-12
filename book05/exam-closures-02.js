function funcMy(){
	var val = "크롬";
	function inerFunc(){
		console.log(val);
	}

	return inerFunc;
}

funcMy();

// var funcBucket = funcMy();
// funcBucket();




function makeFunc(){
	var name = "모질라";

	return function(){
		console.log(name);
	};
}


var myFunc = makeFunc();
myFunc();







// function init(){
// 	var name = "모질라";
// 	function displayName(){
// 		console.log(name);
// 	}

// 	displayName();
// }

// init();