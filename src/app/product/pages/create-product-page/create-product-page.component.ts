import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styles: [],
})
export class CreateProductPageComponent {
  showSpinner: boolean = false;

  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    imgUrl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  async createProduct() {
    this.showSpinner = true;

    try {
      await this.productService.addProduct(this.createForm.value);

      this.createForm.reset();

      Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'Producto registrado correctamente',
      });
    } catch (_) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error al registrar el producto',
      });
    } finally {
      this.showSpinner = false;
    }
  }
}
