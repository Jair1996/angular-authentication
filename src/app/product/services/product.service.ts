import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
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

  getProducts(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'product');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }
}
