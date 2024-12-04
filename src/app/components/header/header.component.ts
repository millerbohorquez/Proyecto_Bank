import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router){}

  Login(){
    this.router.navigate(["login"]);
  }
  Register(){
    this.router.navigate(["register"]);
  }
  Solicitud(){
    this.router.navigate(["solicitud"]);
  }
  Crear(){
    this.router.navigate(["crear"]);
  }
}
