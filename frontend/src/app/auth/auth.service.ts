import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  host = 'http://localhost:3000/api/auth'

  loginAttempt(email: string, password: string) {
    return this.http.post(`${this.host}/login`, { "email": email, "password": password })
  }

}
