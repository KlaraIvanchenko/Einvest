({
	navigate : function(component, event) {
		var id = event.target.dataset.menuItemId;
		if (id) {
			component.getSuper().navigate(id);
			this.toggleSubmenu(component, event, id, 'active');
			if (this.isMobileView()) {
				var cmpEvent = component.getEvent("closeMenu");
				cmpEvent.fire();
			}
		}
	},
	toggleElement : function(component, event, id, toggleClass) {
		console.log('toggleElement');
		//var element = document.getElementById(id);
		var element = component.find(id);
		$A.util.toggleClass(element, toggleClass);
	},
	toggleSubmenu : function(component, event, idToShow, toggleClass) {
		var elements = component.find('menuItem');
		elements.forEach(function(el) {
			if (idToShow && idToShow == el.getElement().dataset.menuId) {
				$A.util.toggleClass(el, toggleClass);
			} else {
				$A.util.removeClass(el, toggleClass);
			}
		});
	},
	isMobileView : function() {
		if ($A.get("$Browser.isPhone") || $A.get("$Browser.isTablet")) {
				return true;
		}
		return false;
	},
	contentFriendlyMenu : function(component, event) {
		var isMobileView = this.isMobileView();
		if (!component.get("v.isMenuSizeSet") && (!isMobileView || window.innerWidth > 1170)) {
				var headerMenuItemAllWidth = 0;
				var headerMenuItemAll = component.find("menuItem");
				headerMenuItemAll.forEach(function(item){
					headerMenuItemAllWidth += item.getElement().offsetWidth;
				});
				var wrapHeaderMenuElWidth = component.find("wrapHeaderMenu").getElement().offsetWidth;

				if (headerMenuItemAllWidth >= wrapHeaderMenuElWidth) {
						component.set("v.isMenuSizeSet", true);
						var cmpEvent = component.getEvent("showBigMenu");
						cmpEvent.setParams({
								"isBigMenu" : true });
						cmpEvent.fire();
				}
		}
	}
})
