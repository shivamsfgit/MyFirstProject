import { LightningElement,track } from 'lwc';

export default class UseCase extends LightningElement {

    @track customFormModal = false;

    

    customShowModalPopup() {            

        this.customFormModal = true;

    }

    customHideModalPopup() {    

        

        this.customFormModal = false;

    }
}