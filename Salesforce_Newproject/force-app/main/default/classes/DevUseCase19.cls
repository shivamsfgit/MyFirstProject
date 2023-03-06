public class DevUseCase19 {
    public Opportunity[] Opps {get;set;}
    
    public DevUsecase19(){
        Opps=new Opportunity[5];
        Opportunity opp1=new Opportunity();
        opp1.name='Opp1';
        opp1.stageName='Prospecting';
        opp1.amount=10000;
        opp1.closeDate=System.today()+30;
        Opps[0]=opp1;
        
        Opportunity opp2=new Opportunity();
        opp2.name='Opp2';
        opp2.stageName='ClosedLost';
        opp2.amount=0;
        opp2.closeDate=System.today();
        Opps[1]=opp2;
        
        Opportunity opp3=new Opportunity();
        opp3.name='Opp3';
        opp3.stageName='Prospecting';
        opp3.amount=20000;
        opp3.closeDate = System.today()+1;        
        Opps[2]=opp3;
        
        Opportunity opp4=new Opportunity();
        opp4.name='Opp4';
        opp4.stageName='ClosedWon';
        opp4.amount=30000;
        opp4.closeDate = Date.newinstance(2022, 1, 31); //System.today()+91;            
        Opps[3]=opp4;
        
        Opportunity opp5=new Opportunity();
        opp5.name='Opp5';
        opp5.stageName='Negotiation';
        opp4.closeDate = System.today() + 15;
        Opps[4]=opp5;
    }
}