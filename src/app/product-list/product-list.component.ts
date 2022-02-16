import { Component } from "@angular/core";

import { products } from '../products';

@Component({
    selector:'app-product-list',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent {

    products = products;


    share(){
        window.alert('The products has been shares');
    }
    onNotify(){
        window.alert('You will be notufy when the proct goes on sale')
    }

}