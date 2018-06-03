import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Product } from '../../pages/product/product.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
/** header component*/
export class HeaderComponent {
    /*this property is used to store application dropdown items*/
    public applications: Product[];
    public product: Product;

    /*this property is used to store selected application dropdown item*/
    public productFamily: Product;
    public username: User;

    /**
     * In this constructor, we will inject Base url and http.
     * @param http
     * @param originUrl
     */
    constructor(private http: Http, @Inject('BASE_URL') private originUrl: string, private router: Router, private location: Location) {
        //console.log("Header component contructor invoked!");
        this.getApplications();
        this.getUserContext();

        //Fallback logic to prevent displying undefined.
        this.username = { firstName: "Election", lastName: "Agent" };

        //Get the dropdown title from the local storage if the data exists in local storage.
        if (localStorage.getItem('productFamily') != null) {
            this.productFamily = JSON.parse(localStorage.getItem('productFamily'));
        }
        else {
            this.productFamily = new Product();
        }
    }

    /** This method fetches the list of application from the database and populates the dropdown **/
    getApplications(): void {
        this.http.get(this.originUrl + 'api/product/initial').subscribe(result => {
            //applications is used to bind the application items to the drop down.
            this.applications = result.json() as Product[];
            if (localStorage.getItem('productFamily') == null) {
                this.SetApplicationContext(this.applications[0]);
                //console.log("Header component - application item is set..");
            }
        },
            err => {
                throw Error(err["status"] + " " + err["statusText"] + ": " + err["_body"]);
            });
    }

    OnProductFamilyChange(item: Product) {
        if (item != null) {
            this.SetApplicationContext(item);

            if ((this.originUrl + '/Home').toLowerCase() == (this.originUrl + this.router.url).toLowerCase()) {
                location.reload();
            }
            else {
                this.router.navigate([this.originUrl + 'Home']);
            }
        }
    }

    SetApplicationContext(item: Product) {
        if (item != null) {
            localStorage.clear();
            this.productFamily = item;
            localStorage.setItem('productFamily', JSON.stringify(item));
            localStorage.setItem('productTitle', 'Product');
            localStorage.setItem('productId', item.id.toString());
        }
    }

    getUserContext(): void {
        this.http.get(this.originUrl + 'api/user/context').subscribe(result => {
            //applications is used to bind the application items to the drop down.
            this.username = result.json() as User;
            //TODO: Uncomment the following once user context issue is fixed
            if (this.username == null || this.username.firstName == null) {
                this.username = { firstName: "Election", lastName: "Agent" };
            }
        },
            err => {
                //TODO: Uncomment the following once user context issue is fixed
                //throw Error(err["status"] + " " + err["statusText"] + ": " + err["_body"]);
                this.username = { firstName: "Election", lastName: "Agent" };
            });
    }
}

export class User {
    firstName: string;
    lastName: string;
}