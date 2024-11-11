import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  constructor(private authService: AuthService) {}


  login(email: string, password: string) {
    this.authService.loginAttempt(email, password).subscribe({
      next: (response) => console.log('Success:', response),
      error: (error) => console.log('Error:', error)
    });
  }


}
