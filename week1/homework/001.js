function makeDiamond(num){
	var starStr = '*';
	var number = (num*2)-1;
	var mid = Math.floor(number/2);
	var begin = mid;
	var end = mid;
	var resultStar = '';

	var myArray = new Array(number);
	for(var i=0; i<myArray.length; i++){
		myArray[i] = new Array(number);
	}

	for(var i=0; i<number; i++){
		for(var j=begin; j<=end; j++){
			myArray[i][j] = starStr;
		}		
		if(i<mid){
			begin = begin-1;
			end = end+1;
		}else{
			begin = begin + 1;
			end = end -1;
		}
	}
	
	for(var i=0; i<myArray.length; i++){
		resultStar = '';
		for(var j=0; j<myArray[i].length; j++){
			if(!myArray[i][j]){
				resultStar += ' ';
			}else{
				resultStar += myArray[i][j];
			}
		}
		console.log(resultStar);
	}
}

makeDiamond(5);