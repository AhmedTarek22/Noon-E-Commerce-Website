import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteProductService {
  constructor(private http: HttpClient) {}

  toggleFavorite(data: { productId: string }): Observable<any> {
    return this.http.post('https://noon-e-commerce-server-two.vercel.app/togglefavorite', data, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getUserFavorites(): Observable<any> {
    return this.http.get('https://noon-e-commerce-server-two.vercel.app/getUserFavorites');
  }

  removeFromWishlist(productId: string): Observable<any> {
    return this.http.delete(
      `https://noon-e-commerce-server-two.vercel.app/removefromfavorite/${productId}`
    );
  }
  getwishlistcount(): Observable<any> {
    return this.http.get('https://noon-e-commerce-server-two.vercel.app/getwishlistcount');
  }
}
