@isTest
private class TestVerifyDate {
    @isTest static void testDatewithin30Days(){
       	Date dt = VerifyDate.CheckDates(date.parse('01/01/2023'),date.parse('01/05/2023'));
        System.assertEquals(date.parse('01/05/2023'),dt);
    }	
    
    @isTest static void testEndMonthDate(){
       	Date dt = VerifyDate.CheckDates(date.parse('01/01/2023'),date.parse('05/05/2023'));
        System.assertEquals(date.parse('01/31/2023'),dt);
    }
}