import { Component } from '@angular/core';
import { BlogCardComponent } from "./blog-card/blog-card.component";

@Component({
  selector: 'app-root',
  imports: [BlogCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
