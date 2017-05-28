({
	navigationClick : function(component, event, helper) {
		helper.navigate(component, event);
	},
	showSubmenu: function(component, event, helper) {
		var id = event.target.dataset.menuItemLabel;
		if (id) {
			helper.toggleSubmenu(component, event, id, 'active');
		}
	},
 	doneRender : function(component, event, helper) {
		helper.contentFriendlyMenu(component, event);
	},
	openMenu : function(component, event, helper) {
		helper.toggleElement(component, event, "wrapHeaderMenu", "active");
	},
	showSubmenu2: function(component, event, helper) {
		//console.log('dataset ', event.target.dataset);
		var id = event.target.dataset.menuItemLabel;
		console.log('id ', id);
		console.log('event.getSource()' , event.getSource());
		var target = event.target;
		//helper.toggleElement(component, event, id, 'active');
	}
})