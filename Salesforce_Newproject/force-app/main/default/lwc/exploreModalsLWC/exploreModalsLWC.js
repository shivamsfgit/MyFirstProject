import { LightningElement,api } from 'lwc';

export default class ExploreModalsLWC extends LightningElement {
  
  @api recordId;
  modalPopUpToggleFlag = false;

    handlePopup(){
        this.modalPopUpToggleFlag = true;
    }

    handleSkip(){
        this.modalPopUpToggleFlag = false;
    }

    // handleReset(event){
    //     const inputFields = this.template.querySelectorAll('lightning-input-field');
    //     if (inputFields) {
    //         inputFields.forEach(field =>{
    //         field.reset();
    //         });
    //         }    
    // }

}