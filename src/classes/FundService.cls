/**
*  @description: FundService functionality.
*
*  @author: Klara Ivanchenko
*/
public class FundService
{
	//TO DO get fields from schema
	public static List<String> fieldsToOverview = new List<String> {'Id', 'OwnerId', 'Name', 'CreatedDate', 'CreatedById', 'LastModifiedDate', 'LastModifiedById', 'SystemModstamp', 'LastViewedDate', 'LastReferencedDate', 'First_Closing_Date__c', 'Funds_domicile__c', 'Investment_focus_by_geography__c', 'Investment_focus_by_stage__c', 'Investment_period_end_date__c', 'Legal_form__c', 'Structure__c', 'Term__c', 'Vitnage_Year__c'};
	public static Fund__c getCurrentFund()
	{
		Fund__c fund = ((List<Fund__c>)Database.query(getQueryString('Fund__c', fieldsToOverview))).get(0);
		return fund;
	}

	private static String getQueryString(String objName, List<String> fieldsToSelect)
	{
		String query = 'SELECT ';
		if (!fieldsToSelect.isEmpty())
		{
			query += String.join(fieldsToSelect, ' , ');
		}
		else
		{
			query += ' Id ';
		}
		query += ' FROM ' + objName;
		return query;
	}
}