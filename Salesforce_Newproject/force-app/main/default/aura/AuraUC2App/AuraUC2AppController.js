({
	handleSubmit : function(comp, event, helper) {
        console.log('Name is ', comp.get('v.EmployeeName'));
        console.log('City is ', comp.get('v.City'));
        console.log('Age is ', comp.get('v.Age'));
		
	}
})