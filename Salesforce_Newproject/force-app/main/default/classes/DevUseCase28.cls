public class DevUseCase28 {
    public void DevUseCase28(){
        List<Account> accRec = [Select name, industry from Account
                               where(name!='Null')];
        for(Account ac : accRec){
        System.debug(accRec);
        }
        
         List<Contact> conRec = [Select lastname,firstname from Contact];
        for(Contact con : conRec){
        System.debug(conRec);
        }
    }

}