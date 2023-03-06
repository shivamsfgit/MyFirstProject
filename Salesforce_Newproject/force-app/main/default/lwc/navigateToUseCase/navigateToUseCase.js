import { LightningElement,track } from 'lwc';

export default class NavigateToUseCase extends LightningElement {

    // rowOffset = 0;  
    // modalContainer = false;
    @track modalContainer= false;

    closeModalAction(){
        this.modalContainer=false;
       }
}