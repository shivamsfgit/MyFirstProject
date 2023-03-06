trigger updateSecondaryCampaignOnOpp1 on OpportunityContactRole (before insert, after insert) {
	 
    List<Id> ocrId = new List<Id>();		
     for(OpportunityContactRole ocr : Trigger.new){
        if(ocr.IsPrimary == true){
            ocrId.add(ocr.ContactId);
        }
     }
    		List<OpportunityContactRole> oppId = new List<OpportunityContactRole>([Select OpportunityId from OpportunityContactRole where
                                                                                 ContactId IN :ocrId]);
            List<OpportunityContactRole> opc = new List<OpportunityContactRole>([Select ContactId, OpportunityId,Contact.Secondary_Campaign__c 
                                                                                                                 
                                                                         From OpportunityContactRole where Id IN :oppId]); 
            System.debug(oppId);
            System.debug(opc);
    
 }