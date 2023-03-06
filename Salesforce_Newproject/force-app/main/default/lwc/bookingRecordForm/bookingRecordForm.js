import { LightningElement } from 'lwc';

export default class BookingRecordForm extends LightningElement {
    handleError(){
        alert('Error Occured');
    }
    handleSuccess(){
        alert('Record Created');
    }
    handleSubmit(){
        alert('Form Submitted');
    }
}