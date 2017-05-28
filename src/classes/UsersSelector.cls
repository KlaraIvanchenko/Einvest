/*
 * @description: encapsulates query logic for User object
 *  @author: Klara Ivanchenko
 */
public class UsersSelector extends fflib_SObjectSelector
	implements fflib_ISObjectSelector
{
	public List<Schema.SObjectField> getSObjectFieldList()
	{
		// Current app requirements driven soley by getUsersEmail at this stage
		return new List<Schema.SObjectField> { User.Name };
	}

	public Schema.SObjectType getSObjectType()
	{
		return User.sObjectType;
	}

	public List<User> selectById(Set<ID> idSet)
	{
		return (List<User>) selectSObjectsById(idSet);
	}
}
