var makeCounter = function(){
	var privateCounter = 0;

	function changeCnt(val){
		privateCounter += val;
	}

	return {
		increment : function(){
			changeCnt(1);
		},
		decrement : function(){
			changeCnt(-1);
		},
		value : function(){
			return privateCounter;
		}
	}
};


var counter1 = makeCounter();
var counter2 = makeCounter();

console.log(counter1.value());
counter1.increment();
counter1.increment();
console.log(counter1.value());
console.log(counter2.value());
