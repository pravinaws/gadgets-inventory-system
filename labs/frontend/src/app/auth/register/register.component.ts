import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

constructor(private authService: AuthService, private router : Router) {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    if (!token) {
      // alert('Unauthorized. Please log in.');
      this.router.navigate(['/login']);
      return;
    }else{
      this.router.navigate(['/gadgets/list']);
    }
  }

  onRegister() {
    this.authService.register(this.name, this.email, this.password);
  }
}
