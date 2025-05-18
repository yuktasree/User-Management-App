import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-manage',
  imports: [RouterLink, NgIf],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})

export class ManageComponent {

  username = sessionStorage.getItem("userAuth");
  n = ''

  ngOnInit() {
    this.n = this.username!==null ? this.username : ''
  }
}
