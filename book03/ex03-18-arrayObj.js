// colorsArray 배열
var colorsArray = ['orange','yellow', 'green'];
console.log('----[array]----')
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

var colorsObj = {
	'0':'orange',
	'1':'yellow',
	'2':'green'
};

console.log('----[Obj]----')
console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

// typeof 연산자 비교
console.log('----[typeOf]----')
console.log(typeof colorsArray);
console.log(typeof colorsObj);

// length 프로퍼티
console.log('----[length_property]----')
console.log(colorsArray.length);
console.log(colorsObj.length);

// 배열 표준 메서드
console.log('----[push]----')
colorsArray.push('red');
colorsObj.push('red');

console.log(colorsArray);
console.log(colorsObj);
