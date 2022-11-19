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

    submitPostService(file: File):any {
      console.log("service run.....")
      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('jsonNode',JSON.stringify(this.nodeObj))
      return this.http.post(this.API_URL.API_URL+ "/submitPost",formData);
    }
}
