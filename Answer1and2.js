var array=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function answer(array){

	//seperating numbers from array
	const narray =array.reduce( (accum, item) =>{
		if(Number.isInteger(item)){
		accum[item]=  !accum[item] ? (accum[item]=1) : (accum[item]+1);}	
		return accum},{});

	//seperating string from array
	const sarray =array.reduce( (accum, item) =>{
		if(!Number.isInteger(item)){
		accum[item]=  !accum[item] ? (accum[item]=1) : (accum[item]+1);}	
		return accum},{});


	function arraysep(array){

		var arr = Object.keys(array);
		var neww=[];


		for(var i=0;i< arr.length; i++){
			var j= array[arr[i]]; //obj prop value
			var k= arr[i];   //obj prop

				if(j===1){
					if(array===narray){
					k=parseInt(k, 10);}
				neww.push(k);
				}

				else{
				var a = [k];

					while (a.length * 2 <= j)
					{ a = a.concat(a);}
					if (a.length < j) 
					{a = a.concat(a.slice(0, j - a.length));}

					if(array===narray){
					a = a.map(function(item) {
					return parseInt(item, 10);});}	//narray

				neww.push(a);
			    }
		}
	return neww;
	}

	var numarray= arraysep(narray);
	var arrayy=[];
	arrayy.push(numarray);
		if(Object.keys(sarray).length!=0){
			var strarray= arraysep(sarray);
			arrayy.push(strarray);}
	return arrayy;
}


answer(array);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var array=[1,2,3,4,5];
var target=6;



function answer(array,sum) {
var result=[];
	for(var i=0; i<=array.length; i++){
		for(var j=0; j<=array.length; j++){
			if((array[i]+array[j]) === sum){
				var neww=[];
				neww.push(array[i],array[j]);
				result.push(neww);
			}
		}
	}
return result;	
}

answer(array,target);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




