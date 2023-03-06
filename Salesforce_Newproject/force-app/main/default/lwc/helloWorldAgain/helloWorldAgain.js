import { LightningElement,track } from 'lwc';

export default class HelloWorldAgain extends LightningElement {
    @track dynamicElement= "What's your name?";

    dynamicElementHandler(event){
        this.dynamicElement=event.target.value;
    }

    @track showText=false;

    showTextHandler(event){
        this.showText=event.target.checked;
    }
}