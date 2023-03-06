import { LightningElement, wire } from 'lwc';
import LightningAlert from 'lightning/alert';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class LightningComboBox extends LightningElement {

    options = [];
    picklistOptions = [];
    selectedValue;
    readOnlyBool = false;

    @wire( getObjectInfo, { objectApiName: ACCOUNT_OBJECT } )
    objectInfo;

    @wire( getPicklistValues, { recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD } )
    wiredData( { error, data } ) {
        console.log( 'Inside Get Picklist Values' );

        if ( data ) {
                            
            console.log( 'Data received from Picklist Field ' + JSON.stringify( data.values ) );
            this.options = data.values.map( objPL => {
                return {
                    label: `${objPL.label}`,
                    value: `${objPL.value}`
                };
            });
            console.log( 'Options are ' + JSON.stringify( this.options ) );
        } else if ( error ) {
            console.error( JSON.stringify( error ) );
        }
    }

    handlePicklistChange( event ) {
        console.log( 'New Value selected is ' + JSON.stringify( event.detail.value ) );   
    }

    async enablePicklist() {
        await LightningAlert.open({
            message: 'The picklist will be enabled.',
            theme: 'inverse', // a red theme intended for error states
            label: 'Are you sure to proceed!', // this is the header text
        });
        this.readOnlyBool = false;
    }

    async disablePicklist() {
        await LightningAlert.open({
            message: 'The picklist will be disabled.',
            theme: 'warning', // a red theme intended for error states
            label: 'Are you sure to proceed!', // this is the header text
        });
        this.readOnlyBool = true;
    }

}