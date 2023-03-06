public class DevUseCase23PropertyController {
    
    
    public List<DevUseCase23> prodWrapList {get; set;}
    public String name {get; set;}
    public Decimal price {get; set;}
    public Integer qty {get; set;}
    
    public  DevUseCase23PropertyController(){        
        DevUseCase23 p1 = new  DevUseCase23();
        p1.name='Mobile';
        p1.price=10000;
        p1.quantity=2;
        p1.code='Po1';
        
         DevUseCase23 p2 = new  DevUseCase23();
        p2.name='Pen';
        p2.price=100;
        p2.quantity=3;
        p2.code='Po2';
        
         DevUseCase23 p3 = new  DevUseCase23();
        p3.name='Laptop';
        p3.price=30000;
        p3.quantity=2;
        p3.code='Po3';
        
         DevUseCase23 p4 = new  DevUseCase23();
        p4.name='Table';
        p4.price=5000;
        p4.quantity=5;
        p4.code='Po4';
        
         DevUseCase23 p5 = new  DevUseCase23();
        p5.name='Speaker';
        p5.price=200;
        p5.quantity=2;
        p5.code='Po5';
        prodWrapList = new List< DevUseCase23>{p1, p2, p3, p4, p5};  
    }
    
    public void addProduct(){
        
    }
}