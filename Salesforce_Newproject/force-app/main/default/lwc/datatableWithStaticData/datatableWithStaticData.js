import { LightningElement } from 'lwc';

const columns =[

    {label: 'Opportunity Name', fieldName: 'opportunityName', type: 'text'},
    {label:'Confidence', fieldName:'confidence', type:'percent', cellAttributes:
        {iconName: {fieldName:'trendIcon'},iconPosition:'right'}},
    {label:'Amount',fieldName:'amount', type:'currency', typeAttributes:
        {currencyCode: 'INR'}},
    {label:'Contact Email',fieldName:'contact', type:'Email'},
    {label:'Contact Phone',fieldName:'phone', type:'phone'}
];

const data=[
{
    id : 'a',
    opportunityName : 'Cloudhub',
    confidence: 0.2,
    amount: 30000,
    contact:'jrogers@cloudhub.com',
    phone: '2352235463',
    trendIcon: 'utility:down'
},
{
    id : 'b',
    opportunityName : 'Quip',
    confidence: 0.78,
    amount: 70000,
    contact:'quipy@quip.com',
    phone: '235224563',
    trendIcon: 'utility:up'
}
];

export default class DatatableWithStaticData extends LightningElement {
    tablecolumns = columns;
    tabledata = data;
}