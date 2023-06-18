import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      if (this.isMenuOpen) {
        this.renderer.addClass(navbar, 'show');
      } else {
        this.renderer.removeClass(navbar, 'show');
      }
    }
  }

  ngOnInit(): void {}
}

