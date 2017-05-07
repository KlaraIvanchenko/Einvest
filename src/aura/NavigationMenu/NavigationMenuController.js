({
	onClick : function(component, event, helper) {
		var id = event.target.dataset.menuItemId;
		if (id) {
			component.getSuper().navigate(id);
		}
	 },
	 showSubmenu: function(component, event, helper) {
		//console.log('dataset ', event.target.dataset);
		var id = event.target.dataset.menuItemLabel;
		console.log('id ', id);
		//helper.toggleElement(component, event, id, 'active');
	 }
})