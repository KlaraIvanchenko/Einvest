({
	doInit : function(component, event, helper) {
			var label = component.get('v.label');
			label = label.replace(/ /g, '');
			component.set('v.class',  'icon-svg-' + label);
	}
})