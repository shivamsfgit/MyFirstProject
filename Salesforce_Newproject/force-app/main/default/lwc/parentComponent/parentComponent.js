import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleEvent(event){
        console.log("invoked by child!");
        let evt1=event.detail;
        console.log(evt1);
    }
}