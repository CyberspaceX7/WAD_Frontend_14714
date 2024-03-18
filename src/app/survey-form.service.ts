import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SurveyItems } from './SurveyItems';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAllSurveys(){
    return this.httpClient.get<SurveyItems[]>("https://localhost:7235/api/Surveys/GetSurveys")
  }

  getAllCategories(){
    return this.httpClient.get("https://localhost:7235/api/Categories/GetCategories")
  }

  createSurveyItem(item:any){
    return this.httpClient.post("https://localhost:7235/api/Surveys/PostSurvey", item)
  }

  getSurveyById(id:number){
    return this.httpClient.get<SurveyItems>("https://localhost:7235/api/Surveys/GetSurvey/" + id)
  }
}
