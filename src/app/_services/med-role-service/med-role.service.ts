import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../api-urls/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class MedRoleService {

  constructor(
    private API_URL:ApiUrlService, 
    private http: HttpClient) { }


    getMedRoles():any {
      return this.http.get(this.API_URL.API_URL+ "/getMedRoles");
    }
  
    // saveCategory(request:any):any {
    //   return this.http.post(this.API_URL.API_URL+ "/saveCategory",request);
    // }
  
    // deleteCategory(request:any):any {
    //   return this.http.delete(this.API_URL.API_URL+ "/deleteCategory"+"/"+request);
    // }
  
    // getCategoryByIdService(request:any):any {
    //   return this.http.get(this.API_URL.API_URL+ "/getCategoryById"+"/"+request);
    // }
  
    // updateCategoryService(id:any,request:any):any {
    //   return this.http.put(this.API_URL.API_URL+"/updateCategory/"+id,request);
    // }
  
    // updateCategoryFileService(file:any,id:any)
    // {
    //   const formData: FormData = new FormData();
    //   formData.append('file', file);
    //   return this.http.put(this.API_URL.API_URL+"/updateCategoryFile/"+id,formData);
    // }
}
