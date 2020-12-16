import { LightningElement, api } from 'lwc';

export default class Action0 extends LightningElement {
    message = "Hello, LWC Quick Action 0";

    @api recordId;
    @api objectApiName;
}