import { Component, inject } from '@angular/core';
import { SurveyFormService } from '../../survey-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SurveyItems } from '../../SurveyItems';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  router = inject(Router)
  serviceSurvey = inject(SurveyFormService)
  activatedRoute = inject(ActivatedRoute)

  deleteSurvey: SurveyItems ={
    id: 0,
    title: '',
    description: '',
    question1: '',
    question2: '',
    categoryId: 0,
    category: {
      id: 0,
      name: ''
    }
  };
  
  ngOnInit(){
    this.serviceSurvey.getSurveyById(this.activatedRoute.snapshot.params["id"]).subscribe((result)=>{
      this.deleteSurvey = result
    })
  };

  onCancel(){
    this.router.navigateByUrl("home")
  }

  onDelete(){
    this.serviceSurvey.deleteSurvey(this.deleteSurvey.id).subscribe(r=>{
      this.router.navigateByUrl("home")
    });
  }
}
