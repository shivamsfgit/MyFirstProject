public class MultipleRowsController {
    public List<Lead> leads {get; set;}
    
    public MultipleRowsController(){
        leads = new List<Lead>();
        /*Lead ld1 = new Lead();
        leads.add(ld1);
        Lead ld2 = new Lead();
        leads.add(ld2);*/
        for(Integer i = 0; i < 5; i++){
            Lead ld1 = new Lead();
            leads.add(ld1);
        }
    }
}