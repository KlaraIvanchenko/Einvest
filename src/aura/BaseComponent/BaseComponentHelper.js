({
	executeAction: function(actionToExecute) {
		var thatCmp = this;
		return new Promise(function(resolve, reject) {
			actionToExecute.setCallback(thatCmp, function(response) {
				var state = response.getState();
				if (state === "SUCCESS") {
					resolve(response.getReturnValue());
				}
				else if (state === "ERROR") {
					var myErrorMessage = "Unknown error";
					var errors = response.getError();
					if (errors) {
						if (errors[0] && errors[0].message) {
							myErrorMessage = "Error message: " +  errors[0].message;
						}
					}
					reject(myErrorMessage);
				}
			});
			$A.enqueueAction(actionToExecute);
		});
	}
})