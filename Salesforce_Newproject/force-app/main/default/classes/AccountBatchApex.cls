global class AccountBatchApex implements Database.Batchable<SObject>,Database.Stateful
{
    global integer numberOfDirectCustomers = 0;
    global Database.QueryLocator start(Database.BatchableContext bc)
        {
            String query = 'select id,name,AccountNumber,Type from account';
            return Database.getQueryLocator(query);
        }
    
    global void execute(Database.BatchableContext bc, List<Account> accList)
        {
        for(account acc:accList)
            {
                if(acc.Type.equals('Customer - Channel'))
                {
                    numberOfDirectCustomers++;
                }
            }
        }

    global void finish(Database.BatchableContext bc)
        {
            System.debug('Accounts with type Customer-Direct '+numberOfDirectCustomers);
        }
}