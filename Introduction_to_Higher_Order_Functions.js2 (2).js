//0//
 function expression 
 var square = function(x) {
       return x * x; 
 }; 
 //1//

 cube=function (x){
 	return x*x*x
 }
 //2//
 fullName = function (first,last){
 	return first+" "+last
 } 
 //3//
 power = function (base,exp){
 		if(esp===0){
 			return 1i
 		}
 		else return base*power(base,esp-1)
 		 }
//4//
sumCubes = function (number){
	var total=0
	for(var i=0;i<number.length;i++){
		total=total+cube(number[i])
	}
	return total
}
//2//

function each(array) { 
	var total=0
	for (var i = 0; i < array.length; i++) { 
		  func(array[i]); 
	}  
	return total
}

//3//
 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i]); 
       } 
 }
//////////////////////////
function sumSquares(numbers) { 
	var total=0
	each(numbers,function(number){
		total += number * number
	})
return total
}
//4//

function sumCubes(numbers)
var total=0
each(numbers,function(number){
	total+=number*number*number
})
return total

//5//
function productarray(numbers)
{var total=1
each(numbers,function(number){
	total*=number
})
return total}
//6//
function each(array, func) { 
	for (var i = 0; i < array.length; i++) { 
		  func(array[i]); 
	} 
}

function cubeeveryelement(numbers)
{
each(numbers,function(number){
	number=number*number*number
})
return numbers}
//7//
function odd(numbers){
	var arr1=[]
	each(numbers,function(x)
	{if(x%2===1){
arr1.push(x)
	}})
	return arr1;
}
//more practice//
//1//
function sumallelem (array,func){
	var s=0;
	for(i=0;i<array.length;i++){
		s+=func(array[i])
	}
return s
}
sumallelem([1,2,3],function by4(x){
	return x*4
})
//2//
function sumby(numbers,f){
	var s=0
	for(i=0;i<numbers.length;i++){
		s+=f(numbers[i])
	}
	return s
}
//3//
function sumby(numbers,f){
	var s=0
	each(numbers,function(x){
		s+=x*4
	})
	return s
}
//advanced//
//1//
function doubleall(numbers,f){
	for(i=0;i<numbers.length;i++){
		numbers[i]=f(numbers[i])
	}
}
doubleall([1,2,3,4],function (x){
	return x*2
})
//2//
function halveall(numbers,f){
	for(i=0;i<numbers.length;i++){
		numbers[i]=f(numbers[i])
	}
}
doubleall([1,2,3,4],function (x){
	return x/2
})
//3//
function uppercaseall(numbers,f){
	for(i=0;i<numbers.length;i++){
		numbers[i]=f(numbers[i])
	}return numbers
}
uppercaseall(['haythem','dali'],function (x){
	return x.toUpperCase()
})
//5//
function map (array,f){
	for(i=0;i<array.length;i++){
		array[i]=f(array[i])

	}
	return array
}
//6//
map(['hello', 'world'],function(x){
	return x.toUpperCase()
}); // => ['HELLO', 'WORLD'] 
 map(['HelLo', 'WorLD'], function(x){
	  if(x>'A'&&x<'Z')
	 {return x.toLowerCase()}
	}
	 ) // => ['hello', 'world'] 
 map(['the', 'quick', 'brown', 'fox', 'jumped'],function (x){
	 return x.length
 }); // => [3, 5, 5, 3, 6] 
 var people = [ 
	{name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
	{name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
	{name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
	{name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
	{name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 
map(people, function(x){
  
  return x.name.first+" "+" "+x.name.middle+" "+x.name.last
  })
	 
  // => ['Grace B. Hopper', 'Adele Goldstine', 'Ada Lovelace', 'Hedy E. Lamarr', 'Ruchi Sanghvi'] 
 map(people, function(x){
	 return x.name.first+" "+" "+x.name.middle+" "+x.name.last+" is "+x.age
 }); // => ['Grace B. Hopper is 85', 'Adele Goldstine is 43', 'Ada Lovelace is 36', 'Hedy E. Lamarr is 85', 'Ruchi Sanghvi is 34']
 //7//
 function even(x)
 
 {
	if(x%2==0){
		return true
	}
	return false

	}
 function  alleven (array){
	 var arr1=[]
	 for(i=0;i<array.length;i++){
        if(even(array[i])==true){
			arr1.push(array[i])
		}
 }
 return arr1
 
 }
 //8//
 function div3(x)
 
 {
	if(x%3==0){
		return true
	}
	return false

	}
 function  alldiv3 (array){
	 var arr1=[]
	 for(i=0;i<array.length;i++){
        if(div3(array[i])==true){
			arr1.push(array[i])
		}
 }
 return arr1
 
 }
 //9//
 function pos(x)
 
 {
	if(x>0){
		return true
	}
	return false

	}
 function  allpos (array){
	 var arr1=[]
	 for(i=0;i<array.length;i++){
        if(pos(array[i])==true){
			arr1.push(array[i])
		}
 }
 return arr1
}
//10//
function evenln(x)
 
 {
	if(x.length%2==0){
		return true
	}
	return false

	}
 function  allevenln (array){
	 var arr1=[]
	 for(i=0;i<array.length;i++){
        if(evenln(array[i])==true){
			arr1.push(array[i])
		}
 }
 return arr1}
 //11//
 function filter(array,f){
	 var arr1=[]
	 for(i=0;i<array.length;i++){
		 if(f(array[i])){
			 arr1.push(array[i])
		 }
	 }
	 return arr1
 }
 filter([1,2,4,8],function (x){
	 return x%2===0
 })
 //12//
 function filter(array,f){
	var arr1=[]
	for(i=0;i<array.length;i++){
		if(!f(array[i])){
			arr1.push(array[i])
		}
	}
	return arr1
}
filter([1,2,4,8],function (x){
	return x%2===0
})
////
function filter(array,f){
	var arr1=[]
	for(i=0;i<array.length;i++){
		if(f(array[i])){
			arr1.push(array[i])
		}
	}
	return arr1
}
filter([1,2,4,8],function (x){
	return x>0
})
////
function filter(array,f){
	var arr1=[]
	for(i=0;i<array.length;i++){
		if(!f(array[i])){
			arr1.push(array[i])
		}
	}
	return arr1
}
filter([1,2,4,8],function (x){
	return x>0
})
////
function filter(array,f){
	var arr1=[]
	for(i=0;i<array.length;i++){
		if(f(array[i])){
			arr1.push(array[i])
		}
	}
	return arr1
}
filter([1,2,4,8],function (x){
	return x.length%2===0})
	////
	function filter(array,f){
		var arr1=[]
		for(i=0;i<array.length;i++){
			if(f(array[i])){
				arr1.push(array[i])
			}
		}
		return arr1
	}
	filter([1,2,4,8],function (x){
		return x>6
	})