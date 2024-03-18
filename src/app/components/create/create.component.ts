import { Component, inject } from '@angular/core';
import { SurveyFormService } from '../../survey-form.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  serviceSurvey = inject(SurveyFormService)
  router = inject(Router)
  categories: any

  itemToCreate: any = {
    title: "",
    description: "",
    question1: "",
    question2: "",
    categoryId: 0,
  }

  selectedCategoryId: number = 0

  ngOnInit() {
    this.serviceSurvey.getAllCategories().subscribe(result => {
      this.categories = result
      console.log(this.categories)
    });
  }

  onCreateBtn() {
    this.itemToCreate.categoryId = this.selectedCategoryId
    this.serviceSurvey.createSurveyItem(this.itemToCreate).subscribe(result => {
      alert("Survey Saved")
      this.router.navigateByUrl("home")
    });
  }

  onCancel() {
    this.router.navigateByUrl("home");
  }
  
}
