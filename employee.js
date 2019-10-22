class employee{
	constructor(id,name,address)
	{
		this.empid=id;
		this.empname=name;
		this.empaddress=address;
	}
}
class EmpRepository{
	//r data = [];//blank Array...
	constructor(){
		this.data = [];//initializing the array as blank...
	}
addEmployee(emp){
	this.data.push(emp);
	alert("employee added succesfully");
}
deleteEmployee(id){
	for (var i = 0;i<this.data.length ; i++){
		if(this.data[i].empid==id){
			this.data.splice(i,1);
			alert("employee deleted succesfully");
		}
	}
	throw "employee not found to delete";
}
find(id){
	for (var i = 0;i<this.data.length ; i++){
		if(this.data[i].empid==id){
			return this.data[i];
		}
	}
	throw "employee not found";
}
update(emp,id){

	for(var i=0;i<this.data.length;i++){
		if(this.data[i].empid==id){
			this.data.splice(i,1);
			this.data.push(emp);
			return emp;
			alert("updated successfully");
		}
	}
	throw "employee not found"
} 
}