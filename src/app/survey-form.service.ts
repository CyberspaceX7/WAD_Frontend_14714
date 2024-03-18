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
}
