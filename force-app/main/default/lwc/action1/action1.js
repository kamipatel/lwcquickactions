import { LightningElement, api } from 'lwc';

export default class Action1 extends LightningElement {
    message = "Hello, LWC Quick Action 1";

    @api recordId;
    @api objectApiName;
}