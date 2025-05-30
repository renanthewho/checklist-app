import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  @Input() sidenav!: MatSidenav;

  constructor(){}

  ngOnInit(): void {
    
  }
  openSideNav(){
    this.sidenav.toggle()
  }
}
