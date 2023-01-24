import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styles: [],
})
export class CreateProductPageComponent {
  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    imgUrl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
