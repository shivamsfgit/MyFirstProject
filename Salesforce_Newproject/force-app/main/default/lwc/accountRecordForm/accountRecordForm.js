import { LightningElement,track} from 'lwc';

// we can give hard-referencing to our objects and fields by importing  them from salesforce/schema module.
//whenever we use hard-referencing for fields and we want to modify or delete those fields in backend then we will 
//get an error stating that these fields are used in a lightning component, so these fields can't be deleted.

//Giving hard reference is always preferred to the fields and objects as it will automatically pickup the changes 
//when you modify your fields or objects. It will also prevent the users to delete those fields/objects.

//Commented lines 12-14, 23 as this time we are using layout-type="Full" instead of declaring fieldArrays 

/*import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';*/

export default class AccountRecordForm extends LightningElement {

    @track recordId;

    /* fieldsArray = ['Name', 'Phone', 'Website'];  if we use fields without hard-referencing then salesforce won't be 
    aware that these fields are being used in any component.*/

    //fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD]; //hard-referenced fields

    successHandler(event){
        this.recordId = event.detail.id;
    }
}