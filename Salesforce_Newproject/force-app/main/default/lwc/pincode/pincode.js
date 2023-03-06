import { LightningElement, track } from 'lwc';
import callPinCodeApi from '@salesforce/apex/pincodeController.callPinCodeApi';

export default class PinCodeExample extends LightningElement {
     pincode;

     @track outputText;
     @track location;
     @track isValid;
     isModalOpen = false;

     
     openModal() {
        this.isModalOpen = true;       
    }
    closeModal() {
        this.isModalOpen = false;
    }


     pincodeHandler(event) {
        this.isModalOpen = true;
        this.outputText = this.template.querySelector('lightning-input').value;
        console.log(this.outputText);
        callPinCodeApi({pincode: this.outputText})
        .then(result => {
                let stringResult = JSON.stringify(result);
                this.location = JSON.parse(stringResult);
                console.log(this.location);
                this.isValid=true;
                if(this.location == "not valid"){
                    this.isValid=false;
                }
            })
        .catch(error => {
            console.log('Error:', error); 
        })
        
    }
}