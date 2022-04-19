var numberOfStudents =0
var students=[]
var obj={firstName:"haythem",lastName:'bensouissi',fullname:'haythem bensouissi',email:'haythembensouissi2@gmail.com',age:20,education:'rbk'}}
function addStudent(obj){
	numberOfStudents++
	
	students.push(createstudent(obj.firstName,obj.lastName,obj.email,obj.age,obj.education))
	return students.length
} 
function getNumberOfStudents(){
	return numberOfStudents;
}
function clearStudents(){
	students=[]
	numberOfStudents=0
}
function createFullName(firstName, lastName){
	return firstName+" "+lastName
}
/*
function getStudentByInitials(name, initial) {
	if(name[0].toUpperCase() === initial.toUpperCase()){
		return true
	}
	return false
}
*/

function isFullName(name){
	if(name.split(" ") != name ){
		return true
	}
	return false

}
/*
function getStudentByInitials(students,c){
	var i=0
	var x=[]
	while(i<students.length){
		if(students[i][0]===c){x.push(students[i])}
			i++

	}
	return x
}
*/
function getStudentByInitials(students,c,l){
	var i=0
	var x=[]
	while(i<students.length){
		if(isFullName(students[i])){
			if(students[i][0]===c&&students[i][students[i].indexOf(" ")+1]==l){x.push(students[i])}
		}
			i++
	}
	return x
}
//var student={firstName:"haythem",lastName:'bensouissi',fullname:'haythem bensouissi',email:'haythembensouissi2@gmail.com',age:20,education:'rbk'}//
function createstudent (firstname,lastname,email,age,education){
	var obj={}
	obj.Firstname=firstname
	obj.Lastname=lastname
	obj.Email=email
	obj.Age=age
	obj.Education=education
	return obj

}
function addskills(student,skills){

	for(var i =0 ;i<skills.length;i++){
	  for(var j=0;j<student.skills.length;j++){
		if(student.skills[j]!=skills[i]){
			student.skills.push(skills[i])
		}
	

	  }
			
	}
}
clearStudents()
function removestudent(name){
	for(var i=0;i<students.length;i++)
	{
		if(students[i].Firstname==name){
			students.splice(i,1)
		}
	}
	nb=students.length
}
var student1 = createStudent("Nancy", "Shalaby", "x@gmail.com", 25, "Music")
function  isStudentOlderThan(student, age) { 
	if(student.age> age){
		return true
	}
	return false
}
var student1 = createstudent("Nancy", "Shalaby", "x@gmail.com", 25, "Music")
function  isStudentOlderThan(student1, age) { 
	if(student1.Age> age){
		return true
	}
	return false
}
function doesStudentHaveSkills(student){
if(!student.skills){
	return false
}
return true
}