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