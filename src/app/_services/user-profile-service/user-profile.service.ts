import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../api-urls/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor( private API_URL:ApiUrlService, 
    private http: HttpClient) { }


     //UPDATE SUB CATEGORY FILE
  updateUserProfile(file:any,email:any)
  {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(this.API_URL.API_URL+"/uploadProfilePicture/?email="+ email , formData);
  }



  getPostsService(page:any)
    {
      // return this.http.get(this.API_URL.API_URL+ "/getAllPosts");
      return this.http.get(this.API_URL.API_URL+ "/getQuestions/"+page);
     
    }




}
