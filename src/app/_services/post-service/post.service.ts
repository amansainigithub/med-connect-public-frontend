import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../api-urls/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  nodeObj = {
    name :"aman"
  }

  constructor(
    private API_URL:ApiUrlService, 
    private http: HttpClient) { }

    submitPostService(file: File,post:any):any {
          const formData: FormData = new FormData();

          if(file == null)
          {
            console.log("File is Empty");
            formData.append('file', "");
            formData.append('jsonNode',JSON.stringify(post))
            return this.http.post(this.API_URL.API_URL+ "/addQuestions",formData);
          }
          else{
            formData.append('file', file);
          formData.append('jsonNode',JSON.stringify(post))
          return this.http.post(this.API_URL.API_URL+ "/addQuestions",formData);
          }

    }


     questionImagesService(file: File,questionId:any):any {
      const formData: FormData = new FormData();

      formData.append('file', file);
      return this.http.post(this.API_URL.API_URL+ "/questionImages/"+questionId,formData);
      }



    
}
