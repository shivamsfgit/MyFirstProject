import { LightningElement, track, wire } from 'lwc';
import getDataFromOpportunity from '@salesforce/apex/lwcAppExampleApex.getDataFromOpportunity';
const columns=[
    {
      label: 'Name',
      fieldName: 'Name',
      editable: true 
    },
    {
      label: 'StageName',
      fieldName: 'StageName',
      editable: true
    },
    {   label: 'CloseDate',
      fieldName: 'CloseDate',
      editable: true 
    },
    {
      label: 'Amount',
      fieldName: 'Amount',
      editable: true
    },
    {
      label: 'id',
      fieldName: 'id',
      type: 'Id',
      editable: true
    },
    {
        label: 'Show Opportunity',
        type: 'button',
        //initialWidth: 75,
        typeAttributes: {
            //iconName: 'action:preview',
            label: 'Show Related Account',
            name: 'Show Related Account',
            title: 'Show Opportunity',
            disabled: false,
            //variant: 'border-filled',
            value: 'Show Related Account',
            iconPosition: 'left'
            //alternativeText: 'View'

        //     label : 'Related Account',
        // type: 'button',
        // typeAttributes: {  
        // label: 'Show Related Account',  
        // name: 'Show Related Account',  
        // title: 'Show Related Account',  
        // disabled: false,  
        // value: 'Show Related Account',  
        // iconPosition: 'left'
        
      }
    }
];
 
export default class LwcDataTableRowAction extends LightningElement {
  @track columns = columns;
  @track opportunityRow={};
  @track rowOffset = 0;  
  @track modalContainer = false;
   @wire(getDataFromOpportunity) wireOpportunity;
 
   handleRowAction(event){
      const dataRow = event.detail.row;
      window.console.log('dataRow@@ ' + dataRow);
      this.opportunityRow=dataRow;
      window.console.log('opportunityRow## ' + dataRow);
      this.modalContainer=true;
   }
 
   closeModalAction(){
    this.modalContainer=false;
   }
 
}