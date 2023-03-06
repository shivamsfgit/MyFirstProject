import { LightningElement } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ImperativeCallApexExample1 extends LightningElement {
    contacts;

    handleClick(){
        getContactList()
            .then( result => {
                this.contacts = result;
                console.log(result);
            })
            .catch(error => {
                console.log('failed ', error);
            });
    }
}