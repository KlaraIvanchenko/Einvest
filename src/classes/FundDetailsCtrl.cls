/**
*  @description: FundDetailsCtrl functionality, methods for custom theme components.
*
*  @author: Klara Ivanchenko
*/
public with sharing class FundDetailsCtrl
{
	@AuraEnabled
	public static Fund__c getFund()
	{
		return FundService.getCurrentFund();
	}
}