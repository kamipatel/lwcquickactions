import { LightningElement, api } from 'lwc';

export default class Action0 extends LightningElement {
    @api invoke() {
        console.debug("headless0 called");
    }
}