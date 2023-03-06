import { LightningElement, track } from 'lwc';

export default class ComboboxBasic extends LightningElement {
@track value = '';

get options() {
    return [
             { label: 'New', value: 'new' },
             { label: 'In Progress', value: 'inProgress' },
             { label: 'Finished', value: 'finished' },
           ];
}

handleChange(event) {
        this.value = event.detail.value;
     }
}