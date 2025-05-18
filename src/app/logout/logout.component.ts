import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private hardcodeAuth: HardcodeAuthService) { }

  ngOnInit() {
    console.log("Logged out!");
    this.hardcodeAuth.logout();
  }

}
