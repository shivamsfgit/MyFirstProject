public class DevUseCase3536 {
    public Account a {get; set;}
    // Acccount a = new Account();
    // a.Name = 'test';
    // a.Phone = '123-444';
    // insert a;
    
    public DevUseCase3536(){
         a = new Account();
    }
    
    public PageReference insertAcc(){  
        PageReference ref; //used to instance of a page
        try {
            insert a;
            //ref = new PageReference('https://www.google.com');
            ref = new PageReference('/' +a.Id);
            return ref;
           // redirect to https://cohortnov21com-dev-ed.my.salesforce.com/ a.Id;
        } catch(Exception e){
            System.debug('Problem in line 6 - insert ' + e.getMessage());            
            return null;
        }
    }
}