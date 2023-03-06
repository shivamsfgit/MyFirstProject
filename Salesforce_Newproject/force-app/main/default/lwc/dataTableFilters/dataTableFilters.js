import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getDataFromOpportunity from '@salesforce/apex/lwcAppExampleApex.getDataFromOpportunity';
import getOpps from '@salesforce/apex/GetOppRecords.GetOppRecords';
import getThisWeekOpps from '@salesforce/apex/GetOppRecords.GetOppThisWeekRecords';
import getPrevWeekOpps from '@salesforce/apex/GetOppRecords.GetOppPreWeekRecords';

import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';


const  columns=
    [
    {
        label: 'Name',
        fieldName: NAME_FIELD.fieldApiName,
        editable: true
    },
    {
        label: 'StageName',
        fieldName: STAGENAME_FIELD.fieldApiName,
        editable: true
    },
    {   label: 'CloseDate',
        fieldName: CLOSEDATE_FIELD.fieldApiName,
        editable: true 
    },
    {
        label: 'Amount',
        fieldName: AMOUNT_FIELD.fieldApiName,
        type: 'currency',
        editable: true
    },
    {
        label: 'id',
        fieldName: ID_FIELD.fieldApiName,
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

const today = new Date();
const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    
export default class DataTableFilter extends NavigationMixin(LightningElement) {
   // @api recordId;
    accounts;
    @api oppId;
    columns = columns;
    draftValues = [];
    selectedValue;

    get options() {
        return [
            { label: 'Current Week', value: 'Current Week'},
            { label: 'Previous Week', value: 'Previous Week'}
        ];
    }

    @wire(getOpps) opp;
    @wire(getThisWeekOpps) thisWeekOpp;
    @wire(getPrevWeekOpps) prevWeekOpp;
    columns = columns;
    opportunityRow={};
    rowOffset = 0;  
    modalContainer = false;
    //modalContainers = false;
     @wire(getDataFromOpportunity) wireOpportunity;

    async handleSave(event) {
        // Convert datatable draft values into record objects
        const records = event.detail.draftValues.slice().map((draftValue) => {
            const fields = Object.assign({}, draftValue);
            return { fields };
        });

        // Clear all datatable draft values
        this.draftValues = [];

        try {
            // Update all records in parallel thanks to the UI API
            const recordUpdatePromises = records.map((record) =>
                updateRecord(record)
            );
            await Promise.all(recordUpdatePromises);

            // Report success with a toast
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contacts updated',
                    variant: 'success'
                })
            );

            // Display fresh data in the datatable
            await refreshApex(this.opp);
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or reloading opportunity',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        }
    }

    handleChange( event ) {
        
        this.selectedValue = event.detail.value;
        console.log( 'selectedValue :' + JSON.stringify( event.detail.value ) );

        if ( this.selectedValue == 'Current Week' ) 
            this.opp = this.thisWeekOpp;
        else 
            this.opp = this.prevWeekOpp;

    }


    handleRowAction(event){
        const dataRow = event.detail.row;
        window.console.log('dataRow@@ ' + dataRow);
        this.opportunityRow = dataRow;
         window.console.log('opportunityRow## ' + dataRow);
         this.modalContainer=true;

         this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
            componentName: "c:navigateToUseCase"
            }
        });
     }

     
   
    //  closeModalAction(){
    //   this.modalContainer=false;
    //  }



    //  closeModalActions(){
    //     this.modalContainers=false;
    //    }

    // handleRowAction(event){

    //     const oppId = event.detail.row.id;
    //     this.oppId = console.log(event.detail.row.Id);
    // }
}