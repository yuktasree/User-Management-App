import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { FirstApiService } from '../service/first-api.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, LogoutComponent, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  //name = ''
  username = sessionStorage.getItem("userAuth");
  n = ''
  msg = ''

  constructor(private router: Router,
    private aroute: ActivatedRoute,
    private apiservice: FirstApiService) { }

  ngOnInit() {
    //this.name = this.aroute.snapshot.params['name'];
  }

  welcomeMsg() {
    this.n = this.username!==null ? this.username : ''
    this.apiservice.sayHelloUser(this.n).subscribe({
      next: data => this.msg = data,
      error: error => console.log("Error: " + error)
    });
  }

  logout() {
    this.router.navigate(["logout"]);
  }

}
