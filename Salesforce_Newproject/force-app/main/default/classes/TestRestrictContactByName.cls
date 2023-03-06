@isTest

public class TestRestrictContactByName {
	
    @isTest static void TestInvalidContact(){
        Contact con = new Contact(LastName= 'INVALIDNAME');
        insert con;
    }
}