public class AccountProcessor {
    @future 
    public static void CountContacts(List<Id> accountIds)
    {
        List<Account> accountList = new List<Account>();
        for(Id accId:accountIds)
        {
            //querying the account based on the id
            Account acc = [Select name from account where id = :accId];
            
            //querying the total no. of contacts assosiated with the accountId and setting it on the new field
            acc.Number_of_associated_Contacts__c = [Select COUNT()from Contact where accountId = :accId];

            //adding the updated account to the accountList
            accountList.add(acc); 
        }
        update accountList;
    }
    
    
    public AccountProcessor() 
    {
        List<Account> accList = [Select id from account];
        List<Id> accountIds = new List<Id>();
        for(Account acc:accList)
        {
            accountIds.add(acc.id);
        }
        AccountProcessor.CountContacts(accountIds);
    }
}