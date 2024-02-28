import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/services/product.service';
import { map,skip, skipWhile } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AddFormComponent } from './components/add-form/add-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ProductModule ,CommonModule , SharedModule ,AddFormComponent],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomerce';
  products:Products=[]
  constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getProducts().subscribe({
      next:(value)=>{
        this.products = value;     
      }
    })
  }
}

export interface IProduct{
completed:boolean,
id:string,
title:string
userId:string
}


export type Products = IProduct[]