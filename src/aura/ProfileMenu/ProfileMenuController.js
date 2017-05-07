({
	doInit: function(component, event, helper) {
		helper.initializeData(component, event);
	},
	handleClick: function(component, event, helper) {
		// var item  = event.getSource();
		// var selectedItem = item.get('v.label');
		//console.log('handleClick ++' );
		var selectedItem = event.target.dataset.label;
		//console.log('selectedItem ++' , selectedItem);
		var menuItems = component.get('v.menuItems');

		var navigateToUrl = '';
		menuItems.forEach(function(item) {
			if (item.label === selectedItem) {
			   navigateToUrl = item.url;
			}
		});
		helper.gotoURL(component, event, navigateToUrl);
	},
	toggleProfileLinks: function(component, event, helper) {
		helper.toggleElement(component, event, 'profileTrigger', 'active');
	}
})