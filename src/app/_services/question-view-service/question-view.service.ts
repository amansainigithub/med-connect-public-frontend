import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../api-urls/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionViewService {

  constructor(  private API_URL:ApiUrlService, 
    private http: HttpClient) { }

     
    questionViewsCounterService(questionId:any)
    {
      console.log("===========================" + questionId);
      
      console.log( questionId);
      
      return this.http.post(this.API_URL.API_URL+ "/questionViews/"+questionId ,{});
    }

}
