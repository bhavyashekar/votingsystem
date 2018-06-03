import { Component, OnInit, Inject, Input, OnChanges, SimpleChange } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Product } from '../../pages/product/product.component';

@Component({
    selector: 'bread-crumb',
    templateUrl: './breadcrumb.component.html'
})
/** header component*/
export class BreadcrumbComponent { //implements OnChanges {

   // @Input() breadCrumb: BreadCrumb;
    public breadCrumbs: BreadCrumb[] =[] ;
    /**
     * In this constructor, we will inject Base url and http.
     * @param http
     * @param originUrl
     */
    constructor(private http: Http, @Inject('BASE_URL') private originUrl: string) {
       // this.breadCrumbs = JSON.parse(localStorage.getItem('breadCrumbs'));
       // this.breadCrumbs = "Voter Validation";
    }
    //ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    //    let log: string[] = [];
    //    alert(JSON.stringify(changes["breadCrumb"].currentValue));
    //    for (let propName in changes) {       
    //        let changedProp = changes[propName];
    //        let to = JSON.stringify(changedProp.currentValue);
    //        if (this.breadCrumbData != null) {
    //            alert('oko');
    //           // this.breadCrumbData.push(changedProp.currentValue);
    //        }
    //        if (changedProp.isFirstChange()) {
    //            log.push(`Initial value of ${propName} set to ${to}`);
    //        } else {
    //            let from = JSON.stringify(changedProp.previousValue);
    //            log.push(`${propName} changed from ${from} to ${to}`);
    //        }
    //    }
    //    alert(log.join(', '));
    //   // localStorage.setItem('breadCrumbData', JSON.stringify(this.breadCrumbData));
    //}


  

    /** This method fetches the list of application from the database and populates the dropdown **/
    //getBreadcrumbs(): void {
    //    //Setting the request header.
    //    let header = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    //    let options = new RequestOptions({ headers: header });
    //    alert('bb');
    //    //TODO: optimize the following code and also implement the logic for fetching the data from local store.
    //    //If the screen is module management, then do not fetch the data from database.
    //    if (this.breadCrumb.applicationId != null && this.breadCrumb.applicationId > 0) {
    //        //the following method creates breadcrumbs based on the data retrieved from the API.
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", this.breadCrumb.applicationId, true)];
    //    }
    //    else {
    //        this.http.post(this.originUrl + 'api/BreadCrumb', JSON.stringify(this.breadCrumb), options).subscribe(result => {
    //            let breadcrumbResult = result.json() as BreadCrumb;
    //            //the following method creates breadcrumbs based on the data retrieved from the API.
    //            this.createBreadCrumbs(breadcrumbResult);
    //        },
    //        err => {
    //            throw Error(err["status"] + " " + err["statusText"] + ": " + err["_body"]);
    //        });
    //    }
    //}

    //TODO: Optimize the following code
    //createBreadCrumbs(breadcrumbResult: BreadCrumb): void {
    //    if (this.breadCrumb.applicationId != null && this.breadCrumb.applicationId > 0) {
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", this.breadCrumb.applicationId, true)];
    //    }
    //    else if (this.breadCrumb.moduleId != null && this.breadCrumb.moduleId > 0) {
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", breadcrumbResult.applicationId, false)];
    //        this.breadCrumbData.push(new BreadCrumbData("Feature", "Feature", breadcrumbResult.moduleId, true));
    //    }
    //    else if (this.breadCrumb.featureId != null && this.breadCrumb.featureId > 0) {
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", breadcrumbResult.applicationId, false)];
    //        this.breadCrumbData.push(new BreadCrumbData("Feature", "Feature", breadcrumbResult.moduleId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("Story", "Story", breadcrumbResult.featureId, true));
    //    }
    //    else if (this.breadCrumb.storyId != null && this.breadCrumb.storyId > 0) {
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", breadcrumbResult.applicationId, false)];
    //        this.breadCrumbData.push(new BreadCrumbData("Feature", "Feature", breadcrumbResult.moduleId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("Story", "Story", breadcrumbResult.featureId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("AcceptanceCriteria", "AcceptanceCriteria", breadcrumbResult.storyId, true));
    //    }
    //    else if (this.breadCrumb.acceptanceCriteriaId != null && this.breadCrumb.acceptanceCriteriaId > 0) {
    //        this.breadCrumbData = [new BreadCrumbData("Module", "Module Management", breadcrumbResult.applicationId, false)];
    //        this.breadCrumbData.push(new BreadCrumbData("Feature", "Feature", breadcrumbResult.moduleId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("Story", "Story", breadcrumbResult.featureId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("AcceptanceCriteria", "AcceptanceCriteria", breadcrumbResult.storyId, false));
    //        this.breadCrumbData.push(new BreadCrumbData("TestCase", "Testcase", breadcrumbResult.acceptanceCriteriaId, true));
    //    }

    //}
}

/**
 * this calss is used to map dropdown list items.
// */
//export class BreadCrumb {
//    public applicationId: number ;    
//    public moduleId: number ;    
//    public featureId: number;
//    public storyId: number;
//    public acceptanceCriteriaId: number;
//    public testCaseId: number;
//}


export class BreadCrumb {
    //public route: string;
    //public label: string;
    //public id: number;
    constructor(public route: string, public product: Product, public isActive: boolean) { }
}