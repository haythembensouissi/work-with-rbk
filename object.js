var user ={firstName: 'Yan', lastname: 'Fan' } ;
 var number={a: 1
    ,
     b:2,
      c: 3,
 d 4} ;
 var animal={ 
       name: 'dog' ,
       noise: 'bark', 
       age: 3, 
       type: 'Golden Retriever' ,
       color: 'Yellow'
 };
 var user ={firstName: 'Haythem', lastname: 'Bensouissi',age: 20, hometown:"el hawaria " } ;
 user.favfood="pizza";
 console.log(user)
 fullname={Name : user.firstName+" "+ user.lastname};
 user.firstName=fullname.Name
 delete user.lastname;
 console.log(user)
 //5//
  function emptyobject(){
var object={}
    return object
  }
//6//
var myObject={firstName: 'Haythem', lastname: 'Bensouissi',age: 20, hometown:"el hawaria " } ;
function add (object,key){
    object[key]=true

        return object[key];
    }

//7//
var object={ animal:'cat',name:'kitty',age:3}
function dobject(obj,key){
    delete obj[key];
    return obj;
}
//8//
function addobject(object,key,value){
    object[key]=value;
    return object;
}
var obj={first:'haythem',last:'bensouissi'}
addobject(obj,'age',20);
//9//
var obj={first:'haythem',last:'bensouissi'}
function addfullname(object){
    object.fullname=object.first+' '+ object.last
}
addfullname(obj)
//10//
var myObject={}
var array=[1,2]
function addarray(object,key,arr)
{ object.key=arr

}
//11//
function print(object)
{ var person;
    for (var key in object){

}
return person=person+" " +object[key]
}

var obj={first:'haythem',last:'bensouissi'}

//more practice //
//1//
function removenumbers(object,n)
{
    for (var key in object){
        if (object[key]>n)
        {delete object[key]}

    }
}
var obj={a:'haythem',b:8,c:2}

//2//
function removeeven(object)
{
    for (var key in object){
        if (object[key]%2===0)
        {delete object[key]}

    }
    return object
}
var obj={a:'haythem',b:8,c:2}
//3//
function removenot10(object)
{
    for (var key in object){
        if (object[key]!=10)
        {delete object[key]}

    }
    return object
}
var obj={a:'haythem',b:8,c:2}
//4//
function removestr(object,n)
{
    for (var key in object){
        if (object[key].length>n)
        {delete object[key]}

    }
    return object
}
var obj={a:'haythem',b:8,c:2}
//5//
function removenbr(object)
{
    for (var key in object){
        if (isNaN(object[key])==false)
        {delete object[key]}

    }
    return object
}
var obj={a:'haythem',b:8,c:2}
//6//
function removearray(object)
{
    for (var key in object){
        if (Array.isArray(object[key]))
        {delete object[key]}

    }
    return object
}
var obj={a:'haythem',b:8,c:2}
//7//
function getfirstlement(object, key)
{
    for (var i in object){
        if (object[i]=key)
        {return object[key][0]
        }
        return "undifined"
    }
    
}
var obj={a:[1,2,3],b:[5,4,5],c:[8,6,8]}
//8//
function getNthElement(object, key,number)
{
    for (var i in object){
        if (Array.isArray(object[key])||object[key]===[]){
            return   "undifined"
        }if (object[i]=key)
        {return object[key][number]
        }
       
    }
    
}
var obj={a:[1,2,3],b:[5,4,5],c:[8,6,8]}
//Advanced//
//1//
function isProp(object,key){
    for (var i in object){
        if (object[i] === object[key]){
            return true;
        }
      
      }  return false;
}
var obj={a:[1,2,3],b:[5,4,5],c:[8,6,8]};
//2//
function allkeys(object)
{
    console.log(Object.keys(object))
}
var obj={a:[1,2,3],b:[5,4,5],c:[8,6,8]};
//3//
function allvalues(object)
{
    console.log(Object.values(object))
}
var obj={a:2,b:5,c:8};
//4//

function firstandlast (array){
    var obj={};
    obj[array[0]]=array[array.length-1];
    return obj
}
//5//
function extend(obj1,obj2){
    for (var i in obj2 ){
    
    
        if (!obj1[i]){
            obj1[i]=obj2[i]
        }
     
}
}


var obj1={a:1,b:2}
var obj2={b:4,c:6}
extend(obj1,obj2)
//6//
function countcar(string)
{var obj={}
    for (i=0;i<string.length;i++){
char=string[i]
nb=0;
for (j=0;j<string.length;j++)
{if(char===string[j]){
nb++;
}

}
obj[string[i]]=nb;

}
return obj
}
//7//
function countstr(string){
    var arr=string.split(' ')
    var obj={}
    console.log(arr)
    for( var word of arr)
    { console.log(word)
        if(!obj[word])
        { obj[word]=1}
        else 
        {obj[word]++}
    }
}
//8//
function listtoobject(obj)
{
    var array=[]
    for( var key in obj)
    {var array1=[]
        array1.push(key)
        array1.push(obj[key])
        array.push(array1)
    }

}
//9//
function select (arr,obj)
{
    for (var i=0;i<arr.length;i++){
        var x=arr[i];
        for(var key in obj ){
            if (arr[i]=== key )
            {console.log(key +":"+obj[key])}
        }
    }
}