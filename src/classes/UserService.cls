/**
*  @description: UserService functionality.
*
*  @author: Klara Ivanchenko
*/
public class UserService
{
	public static User getCurrentUser()
	{
		return [SELECT Id, Name FROM User WHERE Id = : userinfo.getUserId()];
	}
}