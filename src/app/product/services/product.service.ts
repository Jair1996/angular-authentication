import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from '@angular/fire/firestore';
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

  getProduct(id: string) {
    const productRef = doc(this.firestore, `product/${id}`);
    return getDoc(productRef);
  }

  updateProduct(id: string,product: Product) {
    const productRef = doc(this.firestore, `product/${id}`);
    return updateDoc(productRef, { ...product });
  }

  getProducts(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'product');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  deleteProduct(product: Product) {
    const productRef = doc(this.firestore, `product/${product.id}`);
    return deleteDoc(productRef);
  }
}
