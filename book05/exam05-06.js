var value = 'value1';

function printValue(){
	return value;
}

function printFunc(func){
	var value = 'value2';
	console.log(func());
}

printFunc(printValue);

// 아래 코드는 함수 호이스팅

foo();
bar();

var foo = function(){
	console.log('foo and x = '+x);
}

function bar(){
	console.log('bar and x = '+x);
}

var x = 1;

// 

var foo;

function bar(){
	console.log('bar and x = '+x);
}

var x;

foo();
bar();

foo = function(){
	console.log('foo and x = '+x);
};

x = 1;