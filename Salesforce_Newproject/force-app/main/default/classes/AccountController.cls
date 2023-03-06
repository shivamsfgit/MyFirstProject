public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [Select id,name,phone,type from Account Limit 10];
    }

    @AuraEnabled
    public static List<Account> createAccounts(List<Account> accountList){
        insert accountList;
        return accountList;
    }
    
    
}