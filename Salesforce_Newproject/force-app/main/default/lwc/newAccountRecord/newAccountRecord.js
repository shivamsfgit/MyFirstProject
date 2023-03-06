import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class NewAccountRecord extends LightningElement {
    @api objectApiName;
    fields = [NAME_FIELD, PHONE_FIELD, INDUSTRY_FIELD, REVENUE_FIELD];
}