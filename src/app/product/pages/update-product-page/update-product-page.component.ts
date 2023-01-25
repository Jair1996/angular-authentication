import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styles: [],
})
export class UpdateProductPageComponent implements OnInit {
  productId: string = '';
  showSpinner: boolean = false;

  updateForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    imgUrl: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(id).then((doc) => {
      this.productId = doc.id;

      this.updateForm.setValue({ ...doc.data() });
    });
  }

  async updateProduct() {
    this.showSpinner = true;

    try {
      await this.productService.updateProduct(this.productId, this.updateForm.value);

      Swal.fire({
        icon: 'success',
        title: 'Good Job!',
        text: 'Producto actualizado correctamente',
      });
    } catch (_) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error al actualizar el producto',
      });
    } finally {
      this.showSpinner = false;
      this.router.navigate(['/dashboard/product/list']);
    }
  }
}
