public class CaseTriggerHandler {
    static Boolean flag = true;
    
    public static void createChildCase(List<Case> newCaseList){
        if(flag){
            flag=false;
            List<Case> childCases = new List<Case>();
            for(Case cs: newCaseList){
                Case c = new Case();
                c.subject = 'Child Case of '+ cs.caseNumber;
                c.Status = 'New';
                c.origin = 'Web';
                c.ParentId = cs.Id;
                childCases.add(c);
            }
            insert childCases;
        }
    }

}