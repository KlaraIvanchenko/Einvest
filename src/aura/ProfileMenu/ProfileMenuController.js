({
	doInit: function(component, event, helper) {
		helper.initializeData(component, event);
	},
	handleClick: function(component, event, helper) {
		var selectedItem = event.target.dataset.label;
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
		event.preventDefault();
		helper.toggleElement(component, event, 'profileTrigger', 'active');
		return false;
	}
})