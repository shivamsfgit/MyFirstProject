import { LightningElement,wire} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount'/*Importing our 
auraEnabled method from @salesforce/apex package or module and then we can use the wire service to get the data
from it*/

export default class AccountManageApex extends LightningElement {

    @wire(getAllAccounts) 
    
    /*Once we wire this method it is going to send a response from server with the list of
    account and we will assign it to a property called "accounts", which we are using in the for:each
    directory in accountManageApex.html*/ 
   
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
        
    }
}