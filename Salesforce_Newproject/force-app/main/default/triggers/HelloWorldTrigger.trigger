trigger HelloWorldTrigger on Pen__c(before insert) {

    Pen__c[] pens = Trigger.new;
    
    MyHelloWorld.applyDiscount(pens);

}