({
	handleSearch : function(component, event, helper) {
		
        let txt = component.get('v.searchText');        
        console.log('handleSearch invoked! ', txt);
        
        let evt = $A.get('e.c:searchEvent');        
        evt.setParams({'nameParam':txt});
        evt.fire();
	}
})