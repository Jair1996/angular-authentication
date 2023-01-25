import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'create',
        component: CreateProductPageComponent,
      },
      {
        path: 'update/:id',
        component: UpdateProductPageComponent,
      },
      {
        path: 'list',
        component: ListProductPageComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
