import { LightningElement, track, wire } from 'lwc';
import getDataFromOpportunity from '@salesforce/apex/lwcAppExampleApex.getDataFromOpportunity';
const columns=[
    {
      label: 'Name',
      fieldName: 'Name',
      editable: true 
    },
    {
      label: 'Stage',
      fieldName: 'StageName',
      editable: true
    },
    {   label: 'Close Date',
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
        label: 'Use Case(s)',
        type: 'button',
        //initialWidth: 75,
        typeAttributes: {
            //iconName: 'action:preview',
            label: 'New Use Case(s)',
            name: 'New Use Case(s)',
            title: 'New Use Case(s)',
            disabled: false,
            //variant: 'border-filled',
            value: 'New Use Case(s)',
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
    },
    {
        label: 'Quote',
        type: 'button',
        typeAttributes: {
            label: 'Create New Quote/Proposal',
            name: 'Create New Quote/Proposal',
            title: 'Create New Quote/Proposal',
            disabled: false,
            value: 'Create New Quote/Proposal',
            iconPosition: 'left'
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