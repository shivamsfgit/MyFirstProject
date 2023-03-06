global class BatchApexExample implements Database.Batchable<SObject>{
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        String query = 'select id,name,Type from account';
        return Database.getQueryLocator(query); 
    }

    global void execute(Database.BatchableContext bc, List<Account> accList){
        for(Account acc:accList){
            if(acc.type.equals('Customer - Channel'))
            {
                acc.Name = acc.Name +'(Updated using BatchApex)';
            }
            
        }
        try{
            update accList;
        }
        catch(Exception e){
            System.debug(e);
        }
    }

    global void finish(Database.BatchableContext bc){

    }
}