import { LightningElement, api } from 'lwc';

export default class Action2 extends LightningElement {
    message = "Hello, LWC Quick Action 2";

    @api recordId;
    @api objectApiName;
}