import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-resend-email-link',
  templateUrl: './resend-email-link.component.html',
  styleUrls: ['./resend-email-link.component.css']
})
export class ResendEmailLinkComponent implements OnInit {
  errorMessage = '';

  isresendEmailLink=false;

  resendLinkForm= {
    username:""
  }

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

   //Resend Email Link
  onSubmit()
  {
    //Sprinner show
    this.spinner.show();
      
    const { username} = this.resendLinkForm;

    this.authService.resendEmailLink(username).subscribe(
      data => {
        console.log(data);

        this.isresendEmailLink = true;
        
        //Sprinner hide
        this.spinner.hide();
      },
      err => {
        this.errorMessage = err.error.message;
        
         //Sprinner hide
         this.spinner.hide();
      }
    );
  }
    
  }


