public class RandomContactFactory {
	
    public static List<Contact> generateRandomContacts(Integer numofcon, string lastname){
        
        List<Contact> contacts = new List<Contact>();
        for(Integer i=0; i<numofcon; i++){
            Contact con = new Contact(FirstName = 'Test' + i, LastName = lastname);
            contacts.add(con);
        }
        return contacts;
    }
}