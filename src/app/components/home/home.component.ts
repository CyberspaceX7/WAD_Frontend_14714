import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SurveyItems } from '../../SurveyItems';
import { MatButtonModule } from '@angular/material/button';
import { SurveyFormService } from '../../survey-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  surveyService = inject(SurveyFormService)
  itemsList: SurveyItems[] = [];
  ngOnInit() {
    this.surveyService.getAllSurveys().subscribe((result) => {
      this.itemsList = result
    })
  }
  displayedColumns: string[] = ['Id', 'Title', 'Description', 'Category Name', 'Actions'];

  EditClicked(id: number) {
    console.log("edit", id);
    this.router.navigateByUrl("edit/"+id)
  };
  DetailsClicked(id: number) {
    console.log("details", id);
    this.router.navigateByUrl("details/"+id)
  };
  DeleteClicked(id: number) {
    console.log("delete", id);
    this.router.navigateByUrl("delete/"+id)
  };
}
