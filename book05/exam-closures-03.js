function makeAddr(x){
	return function(y){
		return x+y;
	};
}

var add5  = makeAddr(5);
var add10 = makeAddr(10);

console.log(add5(2));
console.log(add10(2));