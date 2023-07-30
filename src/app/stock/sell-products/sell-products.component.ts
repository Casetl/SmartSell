import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent implements OnInit {

  productAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,


  ) { }
  ngOnInit() {

    this.productAddForm = this.formBuilder.group({
      id: ["", Validators.required],
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      cantidad: ["", Validators.required],
      venta: ["", Validators.required],
    })
}


createProduct(product: Product){
  console.info("The product was created: ", product)
  console.log(product)
  this.productAddForm.reset();
}

cancelCreation(){
  this.productAddForm.reset();
}

}
