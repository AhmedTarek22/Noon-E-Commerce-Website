import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRegusterUser } from '../interface/IUser';
import { ISigninUser } from '../interface/ISignInUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginStatus = new BehaviorSubject(!!localStorage.getItem('token'));

  constructor(private http: HttpClient) {}

  get isLogin(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  signOut() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  register(userData: IRegusterUser): Observable<any> {
    return this.http.post('https://noon-e-commerce-server-two.vercel.app/signup', userData);
  }
  signin(userData: ISigninUser): Observable<any> {
    this.loginStatus.next(true);
    return this.http.post('https://noon-e-commerce-server-two.vercel.app/signin', userData);
  }

  sendResetEmail(email: object) {
    return this.http.patch('https://noon-e-commerce-server-two.vercel.app/resetpassword', email);
  }
  resetNewPassword(newPassword: string, token: string) {
    return this.http.post(
      `https://noon-e-commerce-server-two.vercel.app/pressreset-password/${token}`,
      { password: newPassword }
    );
  }

  confirmEmail(token: string) {
    return this.http.get(`https://noon-e-commerce-server-two.vercel.app/verify/${token}`);
  }

  getUserName() {
    return this.http.get(`https://noon-e-commerce-server-two.vercel.app/getusername`);
  }
}
