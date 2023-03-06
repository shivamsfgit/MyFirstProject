import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import {createMessageContext, releaseMessageContext, publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
export default class AccountPublisher_lwc extends LightningElement {

    context = createMessageContext();
    @wire(getAccounts) accounts;
    handleClick(event){
        event.preventDefault();
        const message = {
            recordId: event.target.dataset.accid,
            recordData:{value: "message from lightning web component"}
        };
        publish(this.context,SAMPLEMC,message);
    }
    disconnectedCallback(){
        releaseMessageContext(this.context);
    }
}