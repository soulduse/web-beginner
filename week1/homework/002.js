function sumLineNum(number){ 
	var num = number+'';
	num.split('');
 
	var sum = 0;
	for(var i=0; i<num.length; i++){
		sum += parseInt(num[i]);
	}
 
	console.log(sum);
}
 
function sumLineNumer(number){
	var num = number;
	var addNum = 10;
	var copyNum2 = 0;
	var copyNum = 0;
	var result = 0;
 
	while(num > 0){
		copyNum2 = num;
		num = Math.floor(number/addNum);
		copyNum = num * 10;
		addNum = addNum * 10;
		result += (copyNum2-copyNum);
	}
 
	console.log(result);
}
 
sumLineNumer(12345);