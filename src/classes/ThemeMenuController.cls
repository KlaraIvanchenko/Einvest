/**
*  @description: ThemeMenuController functionality, methods for custom theme components.
*
*  @author: Klara Ivanchenko
*/
public with sharing class ThemeMenuController
{
	@AuraEnabled
	public static AuraUserInfo getUserInfo()
	{
		//return new AuraUserInfo(UserService.getCurrentUser());
		return new AuraUserInfo(
			(new UsersSelector()).selectById(
				new Set<Id>{userinfo.getUserId()}).get(0));
	}

	/* description
	*  wrapper class describs user information
	*/
	public class AuraUserInfo
	{
		@AuraEnabled
		public String id {get; set;}
		@AuraEnabled
		public String name {get; set;}

		public AuraUserInfo() {}

		public AuraUserInfo(User user)
		{
			this.id = user.Id;
			this.name = user.Name;
		}
	}
}