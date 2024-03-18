import { Component, inject } from '@angular/core';
import { SurveyItems } from '../../SurveyItems';
import { SurveyFormService } from '../../survey-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  router = inject(Router)
  serviceSurvey = inject(SurveyFormService)
  activatedRoute = inject(ActivatedRoute)
  item: SurveyItems = {
    id: 0,
    title: "string",
    description: "string",
    question1: "string",
    question2: "string",
    categoryId: 0,
    category: {
      id: 0,
      name: "string"
    }
  }

  ngOnInit() {
    this.serviceSurvey.getSurveyById(this.activatedRoute.snapshot.params["id"]).subscribe(resultedItem => {
      this.item = resultedItem
    })
  }

  goBack() {
    this.router.navigateByUrl("home");
  }

  editDetails() {
    this.router.navigateByUrl("edit/" + this.item.id);
  }
}
