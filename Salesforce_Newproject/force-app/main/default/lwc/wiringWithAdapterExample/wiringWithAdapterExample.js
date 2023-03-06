import { LightningElement, wire, api } from 'lwc';
/* import wire adapter to fetch the data */
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
//metadata reference to object field
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireExampleGetRec extends LightningElement {
    @api recordId;

    // Expose the objects or fields to the template
    accObject = ACCOUNT_OBJECT;

    //accName;

    // wiring with property and load the account name for custom rendering
    @wire (getRecord, {recordId:'$recordId', fields :[NAME_FIELD]})
    accountRecord; //data else error

    /*if(this.accountRecord.data)
        this. accName = getFieldValue(this.accountRecord.data, NAME_FIELD  );
    else 
        this.accName = '';
        */

    //get the account name value
    get accName(){
        return this.accountRecord.data ? getFieldValue(this.accountRecord.data, NAME_FIELD  ):'';
    }
}