function sum(n) {
    var s=0;
    for (var i=0;i<=n;i=i+1){
        s=s+i;
    }
    return s;
}
//2//
function factorial(n){
  var  f=1;
    for (var i=1;i<=n;i++)
    {
        f=f*i;
    }
    return f;
}
//3//
function repeat(str,n){
    var str1="";
    for(var i=0;i<n;i++)
    {str1=str1+str;
    }
    return str1;
}
//4//
function count(a,b)
{var range=0;
    for(var i=a;i<b;i++)
    {
range++;
    }
return range;
}




//5//
function summinmax (a,b) {
var s=0;
 for (var i=a;i<b;i++)
{s=s+i;

}return s;}
//6//
function product (a,b) {
    var s=1;
     for (var i=a;i<b;i++)
    {s=s*i;
    
    }return s;}
//7//
function multiply(a,b){
    var v=a
for (i=0;i<b;i++){
    v=v*10
}
return v
}
//8//
function countCharATIndex(str1,n,str2){
 var a=str1.charAt(n)
 var res=0;
 for (i=0;i<str2.length;i++)
 {
if(str2.charAt(i)===a){
    res++;
}
 }
 return res;   
}
//more practice//
//1//
function reverse (str)


{var str1=""
    for (i=str.length;i>=0;i--){
        str1=str1+str.charAt(i);
    }
    return str1;
}
//2//
function getindexof(str,char)
{for (var i=0;i<str.length;i++)
{
    if(char===str.charAt(i)){
    return i;}
}return "it doesnt exist"
}
//advanced//
//1//
function sumeven (a,b) {
    var s=0;
     for (var i=a;i<b;i++){
     if (i%2===0)
    {s=s+i;
    
    }}return s;}
    //2//
    function prime(x)
    {for (var i=2;i<x;i++)
   if (x%i==0){
       return false;
   }
   if (i=x)
   {return true}
   } 
   function primecounter(n)
   { var nb=0;
       for (var i=2;i<n;i++)
       {
           if(prime(i)===true)
           {nb++;}
       }
       return nb;
   }
   //3//
   function game(a){
    for (;a!="P" && a!="S"&& a!="R";)
        {
    return "enter a new caracter";}
 return "good";
}
game("R")
//4//
function sumfirstlast(n)
{a=n%10;
for(;n>10;)
{n=Math.floor(n/10);}
b=n%10;return a+b;}
//extra//
function palindrome(str)
{var test=true 
    for (i=0;i<Math.floor(str.length/2)&&test==true;i++)
{if (str.charAt(i)!=str.charAt(str.length-i-1))
{test=false }}
{ return test}
}
palindrome("lol")