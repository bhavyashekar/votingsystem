import { Component } from '@angular/core';
import { Product } from '../../pages/product/product.component';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
   public familyId: Number;
   constructor() {
       let productfamily: Product = JSON.parse(localStorage.getItem('productFamily'));
       this.familyId = productfamily != null ? productfamily.id : 1;
    }
   
}