public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true) /*Since we are using wire service here, we need to make the method cacheable as
    wire service can only make calls to cacheable methods.Whenever we are making an auraEnabled method cacheable
    the response of this method is cached on the browser so that if we are making the same request again wihtin
    a certain timeframe the responsed will be served from the browser's cache */

    public static List<Account> getAccount(){
       
        return [SELECT Id, Name, Phone from Account Limit 10];
    }
}