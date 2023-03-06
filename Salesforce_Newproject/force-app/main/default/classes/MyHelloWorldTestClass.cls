@isTest
private class MyHelloWorldTestClass{
    
    @isTest
    static void validateMyHelloWorld(){
      
        Pen__c p = new Pen__c(Name = 'Pierre Cardin', Price__c = 200);
        System.debug('Price of pen before insert: '+ p.Price__c);
        
        insert p;  //inserting pen record
        
        p = [SELECT Price__c FROM Pen__c WHERE Id= :p.Id]; //retrieving the pen record
        System.debug('Price after trigger fired: '+ p.Price__c);
        
        
        
        System.assertEquals(180, p.Price__c); // Test that the trigger correctly updated the price.
    }

}