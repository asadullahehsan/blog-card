import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  imageUrl = "assets/images/spacejoy-YqFz7UMm8qE-unsplash.jpg";
  @Input() category = "Interior";
  @Input() title = "Top 5 Living Room Inspirations";
  @Input() description = "Curated vibrants colors for your living, make it pop & calm in the same time.";
  @Input() linkUrl = "#";
}
