import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SurveyFormService } from '../../survey-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyItems } from '../../SurveyItems';

function findIndexById(jsonArray: any[], IndexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === IndexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  serviceSurvey = inject(SurveyFormService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  editSurvey: SurveyItems = {
    id: 0,
    title: "",
    description: "",
    question1: "",
    question2: "",
    categoryId: 0,
    category: {
      id: 0,
      name: ''
    }
  };

  categoryObject: any
  selected: any
  categoryId: number = 0

  ngOnInit(){
    this.serviceSurvey.getSurveyById(this.activatedRoute.snapshot.params["id"]).subscribe(result =>{
      this.editSurvey = result;
      this.selected = this.editSurvey.categoryId;
    });
  }

  toHome(){
    this.router.navigateByUrl("home")
  }

  edit(){
    this.editSurvey.categoryId = this.categoryId
    this.editSurvey.category = this.categoryObject[findIndexById(this.categoryObject, this.categoryId)];
    this.serviceSurvey.editSurvey(this.editSurvey).subscribe(res =>{
      alert("Changes has been updated")
      this.router.navigateByUrl("home")
    })
  }
}
