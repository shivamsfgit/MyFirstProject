import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class WireApexPropertyExample1 extends LightningElement {
    @wire(getContactList) contacts;
    
}