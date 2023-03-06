import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class WireApexFunctionExample1 extends LightningElement {
    contactsData;

    @wire(getContactList) 
    wiredContactRecords({error, data}){
        if(data){
            this.contactsData = data;    
            console.log(data);
        } else if(error){
            console.log('failed');
        }
    }
}