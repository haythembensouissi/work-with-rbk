//1// 
function isevenwithfor (n)
{for (i=0;i<n;i++){
    if(i%2===0)
    {console.log(i+"is even")}
    else
    {console.log(i+"is odd")}
}

}
function isevenwithwhile (n)
{var i=0
    while(i<n)
    {if(i%2===0)
    {console.log(i+"is even")}
    else
    {console.log(i+"is odd")}
    i++
}

}
//2//
function isevenwithfor (n)
{for (i=n-1;i>=0;i--){
    if(i%2===0)
    {console.log(i+"is even")}
    else
    {console.log(i+"is odd")}
}

}
function isevenwithwhile (n)
{var i=n-1
    while(i>=0)
    {if(i%2===0)
    {console.log(i+"is even")}
    else
    {console.log(i+"is odd")}
    i--
}

}
function reverserecursion (n){
    var x=n-1
    if(x<0){
        return n+'is even'
    }
    else 
    { if (x%2==0){
        console.log(x+' '+'is even')}
     else {
         console.log(x+' '+'is odd')
     }
     reverserecursion(x)
    }

}
//3//
function forloop(n)
{
    for(i=1;i<=n;i++)
    {if(i%3==0 && i%5==0)
        {console.log('juliajames')}
       else if(i%3==0)
        {console.log('julia')}
      else if(i%5==0)
        {console.log('james')}
    
    else { console.log(i)}
    }
}
//////////////////////////////////////////////
function whileloop(n)
{ 
    var i=1
    while(i<=n)
  { {if(i%3==0 && i%5==0)
        {console.log('juliajames')}
       else if(i%3==0)
        {console.log('julia')}
      else if(i%5==0)
        {console.log('james')}
    
    else { console.log(i)}
    }
    i++    
    }
}

///////////////////////////////////////
function  recursively(n) {
    if(n<1){
        return 1
    }
    else if(n%5==0 && n%3==0){
        console.log('juliajames')
    } 
    else if(n%3==0){
        console.log('julia')
    }
    else if (n%5==0){
        console.log('james')
    }
    else console.log(n)
    recursively(n-1)
    }


//4//
function laugh(n){
    var str=""
    for(i=0;i<n;i++){
        str=str+"ha"
    }
    return str
}
/////////////////////////////////////////

function laughwhile(n){
    var str=""
    var i=0
    while(i<n){
        str=str+"ha"      
        i++
    }
    return str
}
////////////////////////////////////
function laughrecursively(n)
{

 if (n==0){
    return ' '
}

else    
{
    return 'ha'+laughrecursively(n-1)}
}


//5//
function factorial(n)
{
    var f=1;
    for(i=1;i<=n;i++){
        f=f*i
    }
    return f
}
function factorial(n){
    var f=1
    var i=1;
    while(i<=n)
    {
        f=f*i
        i++;
    }
    return f
}
function factorial(n)
{
    if(n==0)
    {return 1}
    else 
    return n*factorial(n-1)
}

//6//
function rangefor(min,max){
    var array=[]
for(i=min;i<max;i++){
    array.push(i)
}
return array
}
function rangewhile(min,max){
    var array=[];
    var i=min
    while(i<max){
        array.push(i)
        i++;
    }
    return array 
}
//7//
function reversefor(str){
    var str1=''
    for(var i=str.length-1;i>0;i++){
str1=str1+str.charAt(i)
    }
    return str1;
    
}
function reversewhile(str){
    var str1=''
    var i=str.length-1
    while (i>=0){
        str1=str1+str.charAt(i)
        i--
}
}
function reverserecursively(str){
    if(str.length <=1)
    {return str;}
        else{
            return str.charAt(str.length-1)+reverserecursively(str.substring(0,str.length-1))
       
    
    }
    }
//8//
function addDigits(number) {
    var s=0
    while(n<0){
        s=s+(n%10)
        n=Math.floor(n/10)
    }

    return s
}
//9//
function fibonnacci (n){
     if (n==0){
         return 0
     }
     else if(n==1)
     {
         return 1
     }
     else{
         return fibonnacci(n-1)+fibonnacci(n-2)
     } 
     
    
    
    
    }
    //10//
    function digit(str){
        for(var i=0;i<str.length;i++){
            if(isNaN(str.charAt(i))==false){
                return str.charAt(i)
            }
        }
    }
//11//
function remove(array,n){
    for(var i=0;i<array.length;i++){
        if(n===array[i]){
            array.splice(i,1)
        }
    }
}
//12//
function average(array){
    var s=0;
    for(var i=0;i<array.length;i++){
        s=s+array[i];
    }
    var avg=s/i
    return avg
}
//13//
function max(array){
    max=array[0]
    for(i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
    }
    return max
}
//14//
function alleven(str){
    var test=true
    for(var i=0;i<str.length&&test==true;i++){
        if(parseInt(str.charAt(i))%2!=0)
        {test=false}
    }
    return test
    
}
//15//
function palindrome(str)
{var test=true 
    for (i=0;i<Math.floor(str.length/2)&&test==true;i++)
{if (str.charAt(i)!=str.charAt(str.length-i-1))
{test=false }}
{ return test}
}
palindrome("lol")
//16//
function firstduplicate(array){
    for(i=0;i<array.length;i++){
       
        for(var j=0;j<array.length;j++)
        {
            if(array[i]==array[j]&& i!=j)
            return array[i]
        }
    }
}
//17//
function findcombination(){
    for(i=0;i<25;i++){
        for(j=0;j<100;j++){
            console.log(i+' '+j)
        }
    }
}
//extra//
function sort(array){
    var arr=[]
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[j].id<arr[i].id)
            arr=array[i]
            array[i]=array[j]
            array[j]=arr
        }
    }
    return array
}
