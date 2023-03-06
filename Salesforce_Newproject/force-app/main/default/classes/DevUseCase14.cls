public class DevUseCase14 {
    public Opportunity opp {get; set;}
    
    public DevUseCase14()    {
        opp = new Opportunity();
        opp.name = 'test opp';
        opp.stageName = 'Prospecting';
        opp.amount = 10000;
        opp.closeDate= System.today() + 15;        
    }
}