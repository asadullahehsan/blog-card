import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LayoutWrapperComponent } from "../shared/layout-wrapper/layout-wrapper.component";

@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule, MatButtonModule, LayoutWrapperComponent],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  category = "Interior";
  title = "Top 5 Living Room Inspirations";
  description = "Curated vibrants colors for your living, make it pop & calm in the same time.";
  linkUrl = "#";
}
