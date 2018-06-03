import { Component } from '@angular/core';

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html'
   
})
/** Vote component*/
export class VoteComponent {
    public isDisableButton: boolean;
    /** Vote ctor */
    constructor() {         
    }

    storeVote(candidateId:number): void {
        //enable the button on the partition grid.
        this.isDisableButton = true;
        if (this.isDisableButton != true) {
            alert('You have voted successfully.');
        }
        this.isDisableButton = true;
    }
}