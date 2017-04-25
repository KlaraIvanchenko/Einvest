({
	initializeData : function(cmp, event) {
		var action = cmp.get("c.getUserInfo");
		try{
		this.executeAction(action).then(function(userInfo) {
			if (!cmp.isValid()) {
				return;
			}

			console.log("From server: " , userInfo);
			cmp.set("v.user", userInfo);
			cmp.set("v.userAbbr", userInfo.name.substr(0, 1));

			//TO DO get from custom settings: profile menu items
			var profileMenuItems = [
				{'label':'My profile', 'url': '/profile/' + userInfo.id}, 
				{'label':'My settings', 'url': '/settings/' + userInfo.id},
				{'label':'Log out', 'url': (function(url) {
						return url + '/secur/logout.jsp';
					}(window.location.origin))
				}
			];
			cmp.set('v.menuItems', profileMenuItems);
		}).catch(function(err) {
			if (!cmp.isValid()) {
				return;
			}
			console.log(err);
		});
	} catch (err) {
		console.log(err);
	}
	},
	gotoURL : function (component, event, url) {
		var urlEvent = $A.get("e.force:navigateToURL");
		urlEvent.setParams({
		  "url": url
		});
		urlEvent.fire();
	}
})