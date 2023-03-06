({
	doHandle : function(component, event, helper) {
		console.log('handled by RED');
	},
    
     handleClick: function(component, event, helper){
    	//let evt = component.getEvent('empEvent');
    	//evt.fire();
    	component.getEvent('empEvent').fire();
}
})