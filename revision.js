  //1//
  var carName="Volvo";
//2//
 var length = 16;// number//

var lastName = "Johnson"; // string//

var scores = [20, 12, 15, 14, 20, 10, 2]; // array// 

var person = {
  firstName: "John",
  lastName: "Doe"
}; // object//
//3//
var isGreaterThan10 = length > 10 // boolean// 
function square1"x" { 
return x * x ; 
} 

function square2 (x){ 
return x * x ; 
}

function  square3(x) { 
return x * x;
//4//
}
function whoislarger(a,b)
{
return ((a+b)+Math.abs(a-b))/2;
}
whoislarger(15,10);
//5//
function add(a,b){
console.log(a+b);

}
add(2,3);
//5//
function substract(a,b){
console.log(a-b);

}
substract(5,1);
//6//
function addnsubstract (a,b){
if (operator==="+") 
	{console.log (add(a,b));}
{console.log (substract(a,b));}


}
//7//
var operator="+";
function multiply(a,b){
console.log(a*b);
//8//
}
function divide(a,b){
console.log(a/b);
//9//
}
function operation (a,b){
if (operator==="+") 
	{console.log (add(a,b));}
else if (operator==="-")
{console.log (substract(a,b));}
else if (operator==="*")
	{console.log (multiply(a,b));}
else if (operator==="/")
		{console.log (divide(a,b));}
		else {console.log - "Sorry, we don't know this operator";}





}
var operator="+";
operation(10,5);
//10//
function calculate (operator,a,b){
if (operator==="+") 
	{console.log (add(a,b));}
else if (operator==="-")
{console.log (substract(a,b));}
else if (operator==="*")
	{console.log (multiply(a,b));}
else if (operator==="/")
		{console.log (divide(a,b));}
		else {console.log - "Sorry, we don't know this operator";}





}
var operator="/";
operation(15,5);
//11//
function converttemp(c)
{  return (c*1.8)+32;
	 
}
converttemp(12);
//12//
function capitalize (str){
	var str1=str.charAt(0).toUpperCase()

return str.replace(str.charAt(0),str1);
}
capitalize("haythem");
//13//
function billing (a,b,c)
{
	var price=a+b+c;
	var tip=price*15/100;
	var tprice=price+tip;
	tip.toFixed(2);
	tprice.toFixed(2);
	console.log("your total price is "+tprice+"thanks for the"+tip+"tip");
}
billing(10,5,20);
//14//
function awesomemessage(a,b,c)
{
	return a+b+c;
}
awesomemessage("hi ","im haythem","im a programmer");
//15//
function parity (a){
	if (a%2===0)
		{return "even";}
	return "odd";
}
parity(26);
//16//
function subtractProductAndSum(a) {
var s=0;
	var p=1;
	while (a>0){
	
	s= s+(a%10);
	p=p*(a%10);
	a=Math.floor(a/10);
	
}
return p-s;
  
}
subtractProductAndSum(13);
//17//
function removecaracter (str,pos){
str1=str.replace(str.charAt(pos),"")
return str1;
}
removecaracter("haythem",2)
//18//
function nearestTo100(a, b) {
if (Math.abs(a-100)<Math.abs(b-100))
{	return a;}
return b;
}
nearestTo100(99,98);
//19//
function lastDigit(a, b, c) {
 if (a%10===c%10 &&b%10===c%10 &&a%10===b%10)
 	{return true;}

return false;
}
lastDigit(23, 2563, 1254823);
//20//
function murder(room, name) {
	var weapon;
	if(room=="ballroom"){
		weapon="poison";
	}
	else if(room=="gallery"){
		weapon="trophy";
	}else if(room=="billiards room"){
		weapon="pool stick";
	}
	else if(room=="dinning room"){
		weapon="knife";
	}

  if (room=="ballroom"&& name=="Mr. Kalehoff"){
  	return name+ " did it in"+room+"with a" +weapon ;}
 else if (room=="gallery"&& name=="Ms. Van Cleve"){
  	return name+ " did it in "+room+" with a " +weapon; }
  else if (room=="billiards room"&& name=="Mrs. Sparr"){
  	return name+ " did it in "+room+" with a " +weapon ;}
  	else if (room=="dining room"&& name=="Mr. Parkes"){
  	return name+ " did it in "+room+" with a " +weapon ;}
  	else {return "there is no way "+name+"did it";}
  }
  murder("ballroom","Mr. Kalehoff");
//addtion// 
function permut1(a,b)
{var c;
c=a;
a=b;
b=c;
console.log(a);
console.log(b);}
permut1(10,5);
function permut2(a,b)
{
	a=a+b;
	b=a-b;
	a=a-b;
	console.log(a);
	console.log(b);
}
permut2(10,5);
function mirroir (n)
{ var m=Math.floor(n/1000);
var c= Math.floor(n%1000/100);
var d= Math.floor(n%1000%100/10);
var u= Math.floor(n%10);
if (m===u && c===d)
	{return"miroir";}
return "pas mirroir";
}
mirroir(2002); 
function palindrome (str)
{var i=0;
while (i<Math.floor(str.length/2)){
	if (str.charAt(i)==str.charAt(str.length-i-1))
		{i++;}
}
if (i===Math.floor((str.length/2)-1));
{return true;}
return false;

}
function capitalize2(str)
  { return str.charAt(0).toUpperCase()+str.slice(1);}
  capitalize2('pizza');
  