({
	toggleMenu: function(component, event) {
		var menu = component.find("menu");
		$A.util.toggleClass(menu, "active");
	}
})