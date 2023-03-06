public class MyHelloWorld{
   
    public static void applyDiscount(Pen__c[] pens){
        for(Pen__c p : pens){
            p.Price__c *= 0.9; 
        }
}
}