import { Component } from '@angular/core';
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";
import { CategoryHomeComponent } from "../../components/category/category-home/category-home.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [JumbotronComponent, CategoryHomeComponent]
})
export class HomeComponent {

}
