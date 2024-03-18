import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SurveyItems } from '../../SurveyItems';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  itemsList: SurveyItems[] = [
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

  displayedColumns: string[] = ['Id', 'Title', 'Description', 'Category Name', 'Actions'];

  EditClicked(id:number){
    console.log("edit", id)
  };
  DetailsClicked(id:number){
    console.log("details", id)
  };
  DeleteClicked(id:number){
    console.log("delete", id)
  };
}
