import { Injectable } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'product');
    return addDoc(productRef, product);
  }
}
