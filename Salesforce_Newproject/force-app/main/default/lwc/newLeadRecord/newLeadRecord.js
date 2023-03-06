import { LightningElement ,api} from 'lwc';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';
export default class NewLeadRecord extends LightningElement {
    @api objectApiName;
    fields = [NAME_FIELD , EMAIL_FIELD , INDUSTRY_FIELD,];
}