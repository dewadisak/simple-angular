import { Component,OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html',
    styleUrls:['./cart.component.css']
})

export class CartComponent implements OnInit{
    items ;
    checkoutForm: any;


    constructor(
        private cartService:CartService,
        private formBuider:FormBuilder
    ){
        this.items= this.cartService.getItem();
        this.checkoutForm = this.formBuider.group({
            name:'',
            address:''
        });

    }

    onSubmit(customerData: any){
        console.warn('Your order has been submitted', customerData)
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
    }




    ngOnInit(){
        this.items = this.cartService.getItem();
        
    }
}
