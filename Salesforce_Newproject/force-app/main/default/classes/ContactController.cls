public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email
            FROM Contact
            LIMIT 10
            
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id,FirstName,LastName,Name,Title,Phone,Email,LeadSource
                FROM Contact WHERE Email!= null 
                LIMIT 10
                ];
    }

    @AuraEnabled
    public static string deleteSelectedContact(List<String> contactIdList){
        List<Contact> contactList = new List<Contact>();
        contactList = [SELECT id from contact where id in :contactIdList];
        if(contactList!= null && contactList.size()>0){
        try {
            delete contactList;
            return 'Contact(s) deleted successfully';   
            } 
        catch (Exception e) {
            return e.getMessage();
            }
        }
        else 
        {
            return 'No Contact(s) found';   
        }
    }
}