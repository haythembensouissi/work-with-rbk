//1// 
function arrayfor (array ){
    for (i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }
}
//2//
function arraywhile (array ){
    var i=0;
    while(i<array.length)
    {
        console.log(array[i]);
        i++;
    }
}
//3//
function sum (array ){
    var s=0;
    for (i=0;i<array.length;i++)
    {
        s=s+array[i];
    }
    return s
}
//4//
function sumother (array ){
    var s=0;
    for (i=0;i<array.length;i=i+2)
    {
        s=s+array[i];
    }
    return s
}
//5//
function sumindex (array,index ){
    var s=0;
    for (i=index;i<array.length;i++)
    {
        s=s+array[i];
    }
    return s
}
//6//
function sumuntil (array,index ){
    var s=0;
    for (i=0;i<=index;i++)
    {
        s=s+array[i];
    }
    return s
}
//7//
function substract(array ){
    var d=array[array.length-1];
    for (i=array.length-2;i>=0;i--)
    {
        d=d-array[i];
    }
    return d
}
//8//
function product (array ){
    var p=1;
    for (i=0;i<array.length;i++)
    {
        p=p*array[i];
    }
    return p
}
//9//
function avg (array ){
    var s=0;
    for (i=0;i<array.length;i++)
    {
        s=s+array[i];
    }
    return s/i
}
//10//
function product (array ){
    
    for (i=0;i<array.length;i++)
    {
        array[i]=array[i]*array[i];
    }
    return array}
    //11//
    function isArray(array) {
        if (Array.isArray(array))
        {return true }
        return false ;
    }
    //more practice//
    //1//
    function min (array)
    {
        var min =array[0]
        for (i=1;i<array.length;i++){
            if(array[i]<min){
                min=array[i];
            }
            
        }
        return min;
    }
    //2//
    function max (array)
    {
        var max =array[0]
        for (i=1;i<array.length;i++){
            if(array[i]>max){
                max=array[i];
            }
            
        }
        return max;
    }
    //3//
    function minlength (array)
    {
        var min =array[0].length
        for (i=1;i<array.length;i++){
            if(array[i].length<min){
                min=array[i].length;
            }
            
        }
        return min;
    
    }
    //4//
    function maxlength (array)
    {
        var max =array[0].length
        for (i=1;i<array.length;i++){
            if(array[i].length>max){
                max=array[i].length;
            }
            
        }
        return max;
    
    }
    //5//
    function shortestLongest (array)
    {   
        var max =array[0].length
       
        var maxstring=array[0]
        var min =array[0].length
        var minstring=array[0];
        for (var i=1;i<array.length;i++){
            if(array[i].length>max){
                max=array[i].length;
                maxstring=array[i];}
                
                if(array[i].length<min){
                    min=array[i].length;
                    minstring=array[i];
                }
            }
            var array1=[minstring,maxstring];
            return array1
           
                }
                
            
        
      
        //6//
    
}
function shortestLongest (array)
    {   
        var max =array[0]
       
        
        for (var i=1;i<array.length;i++){
            if(array[i]>max){
                max=array[i];
                
            }}
            var min =array[0]
        
            for (i=1;i<array.length;i++){
                if(array[i]<min){
                    min=array[i];
                    
                }
                
            }
        
        var array1=[min,max];
        return array1
    
}
//7//
function multiplyby (array,n){
    
    for (i=0;i<array.length;i++)
    {
        array[i]=array[i]*n;
    }
    return array}
    //8//
    function multiplyByIndex(array) {
        for (i=0;i<array.length;i++)
    {
        array[i]=array[i]*i;
    }
    return array
     }  
     //9//
     function lengths(array)
    {var array1=[];
        for (var i=0;i<array.length;i++){
array1.push(array[i].length)
        }
        return array1;
    }
    //10//
    function totallength(array)
    {var s=0;
        for (var i=0;i<array.length;i++){
            s=s+array[i].length
            

        }
    }
    //advanced//
    //1//
    function evenlength(array){
        var array1=[];
        for (var i=0;i<array.length;i++){
            if (array[i].length%2==0)
            {array1.push(array[i])}
        }
        return array1;
    }
//2//
function poplastelement(array)
{
    for (var i=0;i<array.length;i++){
        array[i].pop();
    }
    return array;
}
//3//
function pushlastelement(array,elem)
{
    for (var i=0;i<array.length;i++){
        array[i].push(elem);
    }
    return array;
}
//4//
function sumarrays (array){
    s=0;
    for (var i=0;i<array.length;i++){
        for( var j=0;j<array[i].length;j++){
        s=s+array[i][j]}
    }
    return s;
}
//5//
function multiplebysmallest (array)
{
var min =array[0]
        for (i=1;i<array.length;i++){
            if(array[i]<min){
                min=array[i];
            }
            for (i=0;i<array.length;i++){
                array[i]=array[i]*min;
            }
            return array;
        }
    }
    //6//
    function merge(first, second){
    for(let i=0; i<second.length; i++) {
        first.push(second[i]);
      }
      return first;}
    
    function joinarrays(array){

        for(i=0;i<array.length;i++){
            merge(array[i-1],array[i])
            
            
            
    }

        
        return array;
    }
    //6// 
    function joinarrays(array){

        for(i=array.length-1;i>0;i--){
            for (var j=0;j<array[i].length;j++)
            { array[i-1].push(array[i][j])
            
            }
            
            
    }

        
        return array[0];
    }
//7//
function sumoddeven(array)
{var so=0;
    var se=0;
    
    for(var i=0 ;i<array.length;i++){
        if (array[i]%2==0)
        {se=se+array[i]}
        else {so=so+array[i]}

    }
  var   array1=[so,se]
  return array1;
}
//8//
function shortesstring(array)
{ var min
    var minarray
    for(i=0;i<array.length;i++)
    { if(typeof(array[i])=='string')
{min=array[i].length
minarray=array[i]}}
    for (i=0;i<array.length;i++)
    {if (typeof(array[i])=='string'){
        if (array[i].length<min)
        {min =array[i].length
        minarray=array[i]}
    }}
    return minarray
}
//9//
function smallestnumber(array)
{ var min
    
    for(i=0;i<array.length;i++)
    { if(isNaN(array[i])==false)
{min=array[i]
}}
    for (i=0;i<array.length;i++)
    {if (isNaN(array[i])==false){
        if (array[i]<min)
        {min =array[i]
        }
    }}
    return min
}