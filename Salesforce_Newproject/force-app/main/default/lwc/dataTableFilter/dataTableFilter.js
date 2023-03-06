import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getOpps from '@salesforce/apex/GetOppRecords.GetOppRecords';
import getThisWeekOpps from '@salesforce/apex/GetOppRecords.GetOppThisWeekRecords';
import getPrevWeekOpps from '@salesforce/apex/GetOppRecords.GetOppPreWeekRecords';
import getRelatedAccount from '@salesforce/apex/GetOppRecords.GetRelatedAccount';

import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';


const COLS = [
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
        editable: true },
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
    {   label : 'Related Account',
        type: 'button',
        typeAttributes: {  
        label: 'Show Related Account',  
        name: 'Show Related Account',  
        title: 'Show Related Account',  
        disabled: false,  
        value: 'Show Related Account',  
        iconPosition: 'left'
    } }
];

const today = new Date();
const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    
export default class DataTableFilter extends NavigationMixin(LightningElement) {
    //@api recordId;
    accounts;
    @api oppId;
    @api relatedAccount;
    columns = COLS;
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
    @wire(getRelatedAccount) relatedAccount;

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

        const oppId = event.detail.row.id;
        this.oppId = console.log(event.detail.row.Id);
        
        //this.relatedAccount = console.log(relatedAccount);
        console.log(this.relatedAccount); 
        /*const actionName = event.detail.action.name; 
        
        
        if ( actionName === 'Show Related Account' ) {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: oppId,  
                    objectApiName: 'Opportunity',  
                    actionName: 'Show Related Account'  
                }  
            })
        
        if ( actionName === 'Show Related Account' )
        {
            console.log("selected row: "+ rowId);
        }*/
        //this.relatedAccount;
    }
}