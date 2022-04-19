//1//
function sumofn(n){
   var s=0;
while (n>0){
    s=s+n;
    n=n-1;
}
return s
}
//2//
function factorial (n)
{
    var f=1;
    while (n>1){
        f=f*n;
        n=n-1;
    }
    return f;
}
//3//
function repeatstring( str,n)
{ var str1="";
 while (n>0)
 {
     str1=str1+str;
     n=n-1;
 }   
 return str1;
}
//4//
function countminmax(a,b)
{var range=0;
    while (a<b)
    {
        range=range+1;
    }a=a+1;
    return range;
}
//5//
function sumMinToMax(a,b){
    var res=0
    while (a<b){
        res=res+a;
        a=a+1
    }
    return res 
}
sumMinToMax
//6//
function productMinToMax(a,b){
    var res=1
    while (a<b){
        res=res*a;
        a=a+1
    }
    return res 
}
productMinToMax
//7//
function power(n,m){

}
function multiplyBy10(num,n){
var res = num;
var i=0;
while (i<n){
    res=res*10;
    i=i+1
}


return res;
}
//8//
function countcharatindex(str1,index,str2)
{var a=str1.charAt(index)
    console.log(a);
    var i=0;
    var x=0;
while (i<=str2.length){

if (a===str2.charAt(i)){
    x=x+1;
}
i=i+1;
}
return x ;
}
countcharatindex("hello",2,"lol");
//more practice//
//1//
function reverse(str){
    var str1="";
    var i=str.length;
    while (i>=0){
        str1=str1+str.charAt(i);
        i=i-1;
    }
    return str1;
}
reverse("hello")
//2//
function getindexof(str,char)
{var i=0;
 while (i<str.length){
     if (char===str.charAt(i))
     {return i;}
     i=i+1;
 }
}
 getindexof("haythem","e");
 //advanced// 
 //1//
 function sumeven(a,b)
 {
    var res=0
    while (a<b){
        if(a%2==0)
        {
        res=res+a;}
        a=a+1
    }
    return res 
}
//2//
function prime(x){
    var j=2 
    while (j<x){
        if (x%j==0)
        {return false;}
    j++;}
    if (j==x) 
    return true ;
}


function primecounter (a)
{ var i=2;
    var nb=0;
    while (i<a){
    if (prime(i)==true){
        nb=nb+1;
    }
    i++;}
    return nb;
}
//3//
function scissor(str)
{while (str!="P"||str!="S" ||str!="R"){
console.log("error 404");}}
scissor("D");
//4//
function sumfirstandlast(n)
{m=n%10;
while(n>10){
n=Math.floor(n/10);}
a=n % 10;
return a+m;}

