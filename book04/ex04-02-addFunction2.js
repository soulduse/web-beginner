// ex04-01에서 함수 리터럴 방식과 다른, add () 함수 표현식

var add = function(x,y){
	return x+y;
};

var plus = add;

console.log(add(3,4));
console.log(plus(5,6));

