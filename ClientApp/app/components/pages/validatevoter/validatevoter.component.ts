
import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BreadCrumb } from '../../shared/breadcrumb/breadcrumb.component';
//import { BreadCrumbData } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-validatevoter',
    templateUrl: './validatevoter.component.html',
        animations: [
        trigger('slideUpAndDown', [
            state('active', style({ height: '*', display: 'block' })),
            state('inactive', style({ height: 0, display: 'none' })),
            transition('inactive => active', animate('0.2s ease-in-out')),
            transition('active => inactive', animate('0.2s ease-in-out'))
        ])
    ]
 
})
/** Validate Voter component*/
export class ValidateVoterComponent {
    public validationResult: any;
    public adharRequest: Aadhar;
    public res: any;


    public productFamilyId: any;
  
 
    public createSection: string;
    public isDisableButton: boolean;
    public isEdit: boolean;

    public personaTitle: string;
    public formVisibleState: string;
    /** Validate Voter ctor */
    constructor(private http: Http) {
        this.validationResult = new ValidationResult();
        this.adharRequest = new Aadhar();
    }

    /** Called by Angular after story component initialized */
    onValidateClick(): void {
 
    

      //  this.adharRequest = new Aadhar();
        this.adharRequest.aadhaar_id = "547039586626";
        this.adharRequest.otp = "123456";
        this.adharRequest.txn_id = "547039586626";
        let header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: header });

        this.http.post('https://ext.digio.in:444' + '/test/otpkyc', JSON.stringify(this.adharRequest), options).subscribe(
            data => {             
                var response = JSON.stringify(data.json());         
                this.res = JSON.parse(JSON.stringify(data.json()));             
                var sys = this.res.kyc_data.name as string;
                this.validationResult = new ValidationResult();
                this.validationResult.constituency = "Machilipatnam";
                this.validationResult.hasVoted = "No";
                this.validationResult.name = sys;
                var sta = this.res.kyc_data.status as string;
                if (!sta) {
                    alert('Voter authentication failed');
                }

                if (!response) {
                    alert('Error occurred.');
                } else { //this.getPersonaList(); }
                }
            },
            err => {
                throw Error(err["status"] + " " + err["statusText"] + ": " + err["_body"]);
            }
        );


     

        //Opens up the Partition form
        this.formVisibleState = "active";

        //disable the button on the partition grid.
        this.isDisableButton = true;

        //Display the button name as "Create Partition"
        this.isEdit = false;


    }

    onCloseFormClick(): void {       

        //Hides the Partition form
        this.formVisibleState = "inactive";

        //enable the button on the partition grid.
        this.isDisableButton = false;
    }
}
export class ValidationResult {
    id: number;
    name: string;
    constituency: string;
    hasVoted: string;   
}

class Aadhar {
    aadhaar_id: string;
    otp: string;
    txn_id: string;
}