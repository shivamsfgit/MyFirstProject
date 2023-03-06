import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import deleteSelectedContact from '@salesforce/apex/ContactController.deleteSelectedContact';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

const columns=[
    
    {label:'First Name', fieldName:'FirstName',type:'text',editable: true},
    {label:'Last Name', fieldName:'LastName', type:'text',editable: true},
    {label:'Contact Email', fieldName:'Email', type:'email',editable: true},
    {label:'Contact Phone', fieldName:'Phone', type:'phone',editable: true}
];

export default class DatatableWithDynamicData extends LightningElement {
    columns = columns;
    //@track fldsItemValues = [];
    @wire(getContactList) contacts;
    selectedRecordIdList = [];
    @track contactRecordList=[];
    error;
    
    handleSelectedRow(event){
        this.contactRecordList=[];
        this.selectedRecordIdList = [];
        const selectedRows = event.detail.selectedRows;
        selectedRows.forEach(element => {
            this.contactRecordList.push(element);
            this.selectedRecordIdList.push(element.Id);
        });
    }

    handleDeleteSelectedContacts(){
        if(this.selectedRecordIdList){
            deleteSelectedContact({contactIdList:this.selectedRecordIdList})
            .then(result => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: result,
                        variant: 'success'
                    })
                );
                this.template.querySelector('lightning-datatable').selectedRows=[]; //for clearing selected row indexes after successful deletion
                return refreshApex(this.contacts);
            })
            .catch( error => {
                    this.error = error;
                }
            )
        }
    }

    
}