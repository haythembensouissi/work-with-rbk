//1//
myArray=[1,5,7];
//2//
/*a-0
b-2
c-3*/

//3//
[[1, 2, 3, 4, 5, 6, 7] , ['The', 'quick' ,'brown', 'fox', 'jumped', 'over', 'the lazy', 'dog' ] ,[ true ,false, true]]
//4//
function emptyarray(){
var array=[]
return array
}
//5//

function numbersarray(){
    var array=[1,2,3,4,5]
    return array
    }
    //6//
    function booleanarray(){
        var array=[true,true,true]
        return array
        }
        //7//
        function stringarray(){
            var array=["haythem","bensouissi"]
            return array
            }
            //7//
            function arraylength (array){
                return array.length;
            }
            //more practice//
            //1//
            function firstelement (array){
                return array[0];

            }
            //2//
            function lastelement (array){
                return array[array.length-1];

            }
//3//
function nelement (array,n){
    return array[n];

}
//4//
function push (array,elem){
     array.push(elem);
     console.log(array);
}
//5//
function pop (array){
    array.pop();
    console.log(array);
}
//6//
function unshift (array,elem){
    array.unshift(elem);
    console.log(array);
}//7//
function shift (array){
    array.shift();
    console.log(array);}
    //8//
    function reasign (array,elem){
        array[array.length-1]=elem;
return array;
    }
    //9//
    function reasignnelem (array,index,elem){
        array[index]=elem;
return array;
    }
    //advanced//
    //1//
    function indexOf(array, element) {
        for (var i=0;i<array.length;i++){
            if (array[i]==element ){ 
                return i

            }
        }
     }  
     //2//
     function add(array,index,elem){
         array.splice(index,0,elem);
         return array;
     }
     //3//
     function remove(array,index){
        array.splice(index,1);
        return array;
    }
    //4//
    function concat(array1,array2){
        for(var i=0;i<array2.length;i++)
        {array1.push(array2[i])}
        return array1

    }
    //5//
    function concatarray3(array1,array2,array3){
        for(var i=0;i<array2.length;i++)
        {array1.push(array2[i])}
        for(var i=0;i<array3.length;i++)
        {array2.push(array3[i])}
        for(var i=0;i<array2.length;i++)
        {array1.push(array2[i])}
        return array1

    }
    //6//
    function joinarray(array1,string){
        array1.push(string);
        array1.join();
        return array1;
      
    }
    //7//
    function joinarray2(array1,string){
        array1.push(string);
        console.log(array1.join('-'));
         
      
    }
    //8//
    function splitting(string,splitter){
        return  string.split(splitter)
    }
    //9//
    function getelementsafter(array,n){
        for(i=0;i<=n;i++){
            array.shift();
        }
        return array
    }
    //10//
    function getelementsbefore(array,n){
        for(i=0;i<=n;i++){
            array.pop();
        }
        return array
    }
    //11//
   function getelementsbutlast(array){
       array.pop()
       return array;
   }