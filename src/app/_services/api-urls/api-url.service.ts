import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

   API_URL:any = 'http://localhost:8080/med-admin/api/v1';

  constructor() { }
}
