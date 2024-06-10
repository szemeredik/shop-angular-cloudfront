import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiEndpoints.product;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (!environment.apiEndpointsEnabled.product) {
      console.warn(
        'Endpoint "product" is disabled. To enable change your environment.ts config',
      );
      return this.http.get<Product[]>('/assets/products.json');
    }

    const url = `${this.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  getProductById(id: string): Observable<Product | null> {
    if (!environment.apiEndpointsEnabled.product) {
      console.warn(
        'Endpoint "product" is disabled. To enable change your environment.ts config',
      );
      return this.http
        .get<Product[]>('/assets/products.json')
        .pipe(
          map(
            (products) => products.find((product) => product.id === id) || null,
          ),
        );
    }

    const url = `${this.apiUrl}/products/${id}`;
    return this.http.get<Product>(url).pipe(map((resp) => resp || null));
  }

  createNewProduct(product: Product): Observable<Product> {
    if (!environment.apiEndpointsEnabled.bff) {
      console.warn(
        'Endpoint "bff" is disabled. To enable change your environment.ts config',
      );
      return of();
    }

    const url = `${this.apiUrl}/products`;
    return this.http.post<Product>(url, product);
  }

  editProduct(id: string, changedProduct: Product): Observable<Product> {
    if (!environment.apiEndpointsEnabled.bff) {
      console.warn(
        'Endpoint "bff" is disabled. To enable change your environment.ts config',
      );
      return of();
    }

    const url = `${this.apiUrl}/products/${id}`;
    return this.http.put<Product>(url, changedProduct);
  }

  getProductsForCheckout(ids: string[]): Observable<Product[]> {
    if (!ids.length) {
      return of([]);
    }

    return this.getProducts().pipe(
      map((products) => products.filter((product) => ids.includes(product.id))),
    );
  }
}
