import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    handleClick(){
        let evt = new CustomEvent('selected',{ detail:"heyyyy"});
        this.dispatchEvent(evt)
    }
}