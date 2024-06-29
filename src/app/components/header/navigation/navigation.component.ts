import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from "../cart/cart.component";

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css',
    imports: [NgbNavModule, RouterLink, RouterLinkActive, NgbCollapseModule, CartComponent]
})
export class NavigationComponent {
  active = 1;
  isMenuCollapsed = true;
}
