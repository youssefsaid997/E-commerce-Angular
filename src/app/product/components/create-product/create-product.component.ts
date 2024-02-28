import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule , SharedModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  createProduct= new FormGroup({
    productName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    price: new FormControl("",[Validators.required]),
    company: new FormControl("",[Validators.minLength(2)]),
    rating: new FormControl(2,[Validators.min(1),Validators.max(5)])
  })

  onSubmit(){
    if(this.createProduct.invalid){
      this.createProduct.markAllAsTouched()
      return
    }
    const newProduct = {
      ...this.createProduct.value
    }
    console.log(newProduct);
    
  }

}
