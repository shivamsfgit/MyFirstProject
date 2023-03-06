public class ContactUtility {
    public static void viewContacts(){
        List<Contact> listOfContacts= [Select FirstName,LastName from Contact];
        for(Contact con : listOfContacts){
            String fullName= 'First Name: '+ con.FirstName+ ', Last Name: '+con.LastName;
        	System.debug(fullName);
        }
    }

}