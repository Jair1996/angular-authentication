import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListProductPageComponent,
    CreateProductPageComponent,
    LayoutComponent,
    UpdateProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class ProductModule { }
