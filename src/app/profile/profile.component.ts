import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    
    this.currentUser = this.token.getUser();
      
   //Add new Condition
  //  if(this.currentUser == null || Object.keys(this.currentUser).length === 0 )
  //  {
  //    window.location.href = "/login"
  //    return;
  //  }
  }
}
