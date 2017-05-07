({
	toggleElement : function(component, event, id, toggleClass) {
		console.log('toggleElement');
		var element = document.getElementById(id);
		//var element = component.find(id);
		console.log('element', element);
		$A.util.toggleClass(element, toggleClass);
	}
})