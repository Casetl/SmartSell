import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  productAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,


  ) { }
  ngOnInit() {

    this.productAddForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      referencia: ["", Validators.required],
      categoria: ["", Validators.required],
      precio: ["", Validators.required],
      peso: ["", Validators.required],
      inventario: ["", Validators.required],
      fecha: ["", Validators.required],
      buscar: ["", Validators.required]
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
