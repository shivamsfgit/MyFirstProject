import { LightningElement, api } from 'lwc';

export default class ChildCOMP extends LightningElement {
    @api name='Ranjith'; //property

    products=['laptop','desktop','hard-drive','sim','tab'];

    handleChange(event){
        console.log('called! ', this.name);
    }
}