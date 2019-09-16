import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[appNavbar]',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('navtitle') appTitle;
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
