/**
* @description Test class for ThemeMenuController
*
* @author: Klara Ivanchenko
*/
@isTest
private class ThemeMenuControllerTest
{
    /*
        Will be used to create test data
    */
    @testSetup
    public static void prepareData()
    {

    }

    /*
        Tests controller methods
    */
    @isTest static void testThemeMenuController()
    {
        Test.startTest();
        ThemeMenuController.AuraUserInfo auraInfo = new ThemeMenuController.AuraUserInfo();
        System.assertEquals(UserInfo.getUserId(), ThemeMenuController.getUserInfo().id, 'The current user id should be returned.');
        Test.stopTest();
    }

}
