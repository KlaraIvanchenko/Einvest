({
	showBigMenu : function(component, event, helper) {
		if (event.getParam("isBigMenu")) {
			var headerEl = document.querySelector(".header");
			$A.util.addClass(headerEl, " i-would-like-to-add-a-hamburger");
		}
	}
})
