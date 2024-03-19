import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SurveyItems } from './SurveyItems';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class SurveyFormService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAllSurveys() {
    return this.httpClient.get<SurveyItems[]>("https://localhost:7235/api/Surveys/GetSurveys")
  };

  getAllCategories() {
    return this.httpClient.get<SurveyItems>("https://localhost:7235/api/Categories/GetCategories");
  };

  createSurveyItem(item: SurveyItems) {
    return this.httpClient.post<SurveyItems>("https://localhost:7235/api/Surveys/PostSurvey", item);
  };

  getSurveyById(id: number) {
    return this.httpClient.get<SurveyItems>("https://localhost:7235/api/Surveys/GetSurvey/" + id);
  };

  deleteSurvey(id: number) {
    return this.httpClient.delete("https://localhost:7235/api/Surveys/DeleteSurvey/" + id);
  }

  editSurvey(id: number, item: SurveyItems) { return this.httpClient.put("https://localhost:7235/api/Surveys/PutSurvey/" + id, item) }

}
