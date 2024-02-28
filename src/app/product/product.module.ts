import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductListComponent,
    CreateProductComponent,
    SharedModule
  ],
  exports:[ProductListComponent , CreateProductComponent],
  providers:[ProductService]
})
export class ProductModule { }
