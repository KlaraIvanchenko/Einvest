@isTest
private class FundDetailsCtrlTest
{

	/*
	    Create test data
	*/
	@testSetup
	public static void prepareData()
	{
		Fund__c testFund = new Fund__c(
		    Name = 'Test Fund',
		    First_Closing_Date__c = Date.today(),
		    Funds_domicile__c = 'Test name',
		    Investment_focus_by_geography__c = 'UAE',
		    Investment_focus_by_stage__c = 'test stages',
		    Investment_period_end_date__c = Date.today().addDays(5),
		    Legal_form__c = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		    Structure__c = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		    Term__c = 'Test Term',
		    Vitnage_Year__c = 2018);
		insert testFund;
	}

	@isTest static void testGetFund()
	{
		Fund__c testFund = [SELECT Name, Term__c FROM Fund__c WHERE Name = 'Test Fund' LIMIT 1];
		Test.startTest();
		System.assertEquals(testFund.Name, FundDetailsCtrl.getFund().Name, 'The current fund inrofmation should be returned.');
		Test.stopTest();
	}

}