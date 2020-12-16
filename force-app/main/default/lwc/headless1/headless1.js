import { LightningElement, api } from 'lwc';

export default class Action1 extends LightningElement {
    @api invoke() {
        console.debug("headless1 called");
    }
}