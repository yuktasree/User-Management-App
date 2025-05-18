import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  username = ''
  password = ''
  errorMessage = 'Invalid Credentials. Please try again.'
  flag = false

  constructor(private router: Router,
    private hardcodeAuth: HardcodeAuthService
  ) { }

  handleLogin() {
      if(this.hardcodeAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
    } else {
      this.flag = true
    }
  }

}
