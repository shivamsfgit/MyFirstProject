public with sharing class lwcAppExampleApex {
 
  
    // Create a lightning-datatable and display modal on rowaction
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getDataFromOpportunity(){
      //List<Opportunity> oppList = [Select Name,Amount  From Opportunity limit 10];
      List<Opportunity> oppList = [SELECT Id, Name, StageName, CloseDate, Amount FROM Opportunity LIMIT 10];
                  
      try{
         return oppList;
      }
      catch(Exception e){
         throw new AuraHandledException(e.getMessage());
      }
    }
 
}