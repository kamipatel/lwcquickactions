import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import canva from '@salesforce/resourceUrl/canva';

export default class CanvaTest extends LightningElement {

    canvaInitialized = false;

    renderedCallback() {

        console.log("renderedCallback called");
        if (this.canvaInitialized) {
            return;
        }
        this.canvaInitialized = true;

        Promise.all([
            loadScript(this, canva )
        ])
            .then(() => {
                console.log("Canva load called");
                this.initializeCanva();
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading Canva',
                        message: error.message,
                        variant: 'error'
                    })
                );
            });
    }

    initializeCanva() {
        console.log("initializeCanva called");
    }

}