({
	doInit : function(component, event, helper) {
		try {
		var label = component.get('v.label');
		console.log('label 1 = ', label);
		label = label.replace(/ /g, '');
		console.log('label 2 = ', label);
		component.set('v.class',  'icon-svg-' + label);
		} catch (e) { console.error(e);}
	}
})