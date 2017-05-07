({
	initializeData : function(cmp, event) {
		var action = cmp.get("c.getFund");
		var today = new Date().getFullYear()+ '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
		cmp.set("v.today", today);

		try {
			this.executeAction(action).then(function(fundInfo) {
				if (!cmp.isValid()) {
					return;
				}
				console.log("From server: " , fundInfo);
				cmp.set("v.fund", fundInfo);
			}).catch(function(err) {
				if (!cmp.isValid()) {
					return;
				}
				console.log(err);
			});
		} catch (err) {
			console.log(err);
		}
	}
})