import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISomeProducts } from '../interface/ISomeProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetsomeproductsService {
  constructor(private http: HttpClient) {}

  getSomeProducts(subCategory: {
    subCategoryName: string;
  }): Observable<ISomeProducts> {
    return this.http.post<ISomeProducts>(
      'https://noon-e-commerce-server-two.vercel.app/getsomeproducts',
      subCategory
    );
  }
}
