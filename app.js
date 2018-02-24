var EmployeeArray = [];  //Employee array
var i; // declaration of variable i

for (i=1; i<=5; i++){
//accepting user input values
	var name = prompt("Enter the name of Employee #"+i);
	var age = prompt("Enter the age of Employee #"+i);
	var salary = prompt("Enter the salary of Employee #"+i);
	var city = prompt("Enter the city of Employee #"+i);
	var state = prompt("Enter the state of Employee #"+i);
	var pincode = prompt("Enter the pincode of Employee #"+i);

	var Employee = {}; //creating an Employee object
	Employee.name = name;//assign the values
	Employee.age = age;
	Employee.salary = salary;
	Employee.city = city;
	Employee.state = state;
	Employee.pincode = pincode;

EmployeeArray.push(Employee); //pushing the object to the array. This is executed 5 times for each Employee object

}

//writing each object to console using FOR ..IN loop
for (var current in EmployeeArray){
	var j= parseInt(current)+1; //The Array index starts from 0 but we want to print SlNos starting from 1..5. So adding 1 to current for printing purpose only
	console.log("Printing Employee #"+j+"'s details");
	console.log("name = "+EmployeeArray[current].name);
	console.log("age = "+EmployeeArray[current].age);
	console.log("salary ="+EmployeeArray[current].salary);
	console.log("city="+EmployeeArray[current].city);
	console.log("state = "+EmployeeArray[current].state);
	console.log("pincode = "+EmployeeArray[current].pincode);
	
}