import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  
  constructor(
    private authService: AuthService,
    private _router: Router
  ) {}


  login(email: string, password: string) {
    this.authService.loginAttempt(email, password).subscribe({
      next: (response) => {
        console.log('Success:', response)
        this._router.navigateByUrl('/flashcards')
      },

      error: (error) => console.log('Error:', error)
    });
  }


}
