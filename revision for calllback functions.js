//1//
function funccaller (num,func){
    return func(num)
}
var a=5;
funccaller(a,function square(x){
    return  x*x;
})
//2//
function firstval(arr,func){
    return func(arr[0])
}
var array=[2,3]
firstval(array,function cube(x){
    return x*x*x
})
//more practice//
//1//
function sumall(a,b,func){
    return func(a,b)
}
sumall(5,5,function sum(a,b){
    return a+b
})
//2//
function adds (word,func){
    return func(word)
}
adds('cat',function add(word){
    return word+'s'
})
//3//
function ftoc (temp,func){
    return func(temp)
}
ftoc(32,function convert(temp){
    return (temp-32)*5/9
})
//advanced//
function multiplyby3(array,func){
    for(var i=0;i<array.length;i++){
        array[i]=func(array[i])
    }
    return array
}
var arr=[1,2,3]
multiplyby3(arr,function multiply(x){
    return x*3
})
//2//
function leapyears(array,func){
    for(i=0;i<array.length;i++){
        if(func(array[i])==true){
            console.log(array[i])
        }

    }
}var arr=[2004,2000]
leapyears(arr,function leap(x){
    if(x%4===0||x%400!=0&&x%100!==0){
        return true;
    }
    return false
})
// high order functions //

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
        if(exp===0){
            return 1}
        else return base*power(base,exp-1)
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
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i]); 
    } 
}
//3//
function sumSquares(numbers){
    var total=0
    each(numbers,function(number){
        total=total+(number*number)
    })
    return total
}
//4//
function sumCubes(numbers){
    var total=0
    each(numbers,function(number){
        total=total+(number*number*number)
    })
    return total
}
//5//
function product(numbers){
    var total=1
    each(numbers,function(number){
        total=total*number
    })
    return total
}
//6//
function cubeall(numbers,f)
{
    for(i=0;i<numbers.length;i++){
        numbers[i]=f(numbers[i])
    }
    return numbers
}
cubeall([1,2,3],function(x){
    return x*x*x
})
function cubeall(numbers){
    
    each(numbers,function(numbers){
        numbers[i]=numbers[i]*numbers[i]*numbers[i]
    })
    return numbers
}
function odds(array){
    arr=[]
    each(array,function(x){
        if(x%2==1){
            arr.push(x)
        }

    })
    return arr
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
function sumby(numbers){
	var s=0
	each(numbers,function(x){
		s+=x*4
	})
	return s
}
//4//
function prodby(numbers){
	var p=1
	each(numbers,function(x){
		p*=x*4
	})
	return p
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