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
function isevenrecursively(n)
{
    if(n<0)
    {return 'is even'}
    else
   if((n)%2===0)
    console.log  (n+'is even')
   else 
    console.log(n+'is odd')
isevenrecursively(n-1)
}
//3//
function forloop(n)
{
    for(i=0;i<n;i++)
    {if(i%3==0 && i%5==0)
        {console.log('juliajames')}
       else if(i%3==0)
        {console.log('julia')}
      else if(i%5==0)
        {console.log('james')}
    
    else { console.log(i)}
    }
}
function whileloop(n)
{ 
    var i=0
    while(i<n)
    {
        
    }

}