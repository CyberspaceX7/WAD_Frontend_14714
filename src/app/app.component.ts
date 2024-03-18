import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyItems } from './SurveyItems';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WAD_FRONTEND_14714';
  itemsList: SurveyItems [] =[
    {
      "id": 1,
      "title": "Customer Feedback Survey",
      "description": "Your opinion matters! Please take a moment to provide feedback on your recent experience with our products or services.",
      "question1": "How satisfied are you with the speed of service provided?",
      "question2": "Did our products meet your expectations?",
      "categoryId": 4,
      "category": {
        "id": 4,
        "name": "Travel and Leisure"
      }
    }
  ]
}
