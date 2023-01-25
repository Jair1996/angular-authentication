import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product-page',
  templateUrl: './list-product-page.component.html',
  styles: [],
})
export class ListProductPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  seeMore(id: string) {}

  async delete(product: Product) {
    const result = await Swal.fire({
      title: '¿Estás seguro de eliminar el producto?',
      text: 'Recuerde que esta acción no puede restablecerse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
      await this.productService.deleteProduct(product);

      Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'El producto ha sido eliminado correctamente',
      });
    }
  }
}
