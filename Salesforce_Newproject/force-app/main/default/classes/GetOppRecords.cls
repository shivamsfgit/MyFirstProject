public with sharing class GetOppRecords {

    @AuraEnabled( cacheable = true )
    public static List< Opportunity > GetOppRecords() {
        return [ SELECT Id, Name, StageName, CloseDate, Amount FROM Opportunity
                  LIMIT 10 ];
    }

    @AuraEnabled( cacheable = true )
    public static List< Opportunity > GetOppThisWeekRecords() {
        return [ SELECT Id, Name, StageName, CloseDate, Amount FROM Opportunity
                WHERE CloseDate = THIS_WEEK  LIMIT 10 ];
    }

    @AuraEnabled( cacheable = true )
    public static List< Opportunity > GetOppPreWeekRecords() {
        return [ SELECT Id, Name, StageName, CloseDate, Amount FROM Opportunity
                WHERE CloseDate = LAST_WEEK LIMIT 10 ];
    }

    @AuraEnabled(cacheable = true)
    public static Opportunity GetRelatedAccount(String oppId){
         Opportunity relatedAccount = [Select accountId, account.name from opportunity where id = :oppId];
         return relatedAccount;
         //return [Select accountId, account.name from opportunity where id= :oppId];
        //return [Select Id, name from account where Id = :Id];
    }
    
    // private final Opportunity opp;
    // public  GetRelatedAccount(ApexPages.StandardController stdController) 
	// {
    //     this.opp = (Opportunity)stdController.getRecord();
	// 	if( opp.id != null)
	// 	{
	// 		this.opp= [Select Id, account.name from Opportunity where Id =: opp.id ] ;
	// 	}
    // }
}