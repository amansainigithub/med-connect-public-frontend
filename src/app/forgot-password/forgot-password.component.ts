import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  hide = true;
  hidec = true;
  isLoginFailed = false;
  errorMessage = '';
  isSumbitMessage =true;

  emailForm:any = {
    email:""
  }

  forgetpassForm:any = {
    otp : "",
    email : "",
    newPassword:"",
    conformPassword:""
  }

  constructor(
    private as:AuthService,
    private rt:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(){

      //Sprinner show
      this.spinner.show();
    
      this.as.forgetPassword(this.emailForm).subscribe({
        next:(res:any)=>
        {
            console.log(res);
            this.isSumbitMessage = false;

            //Sprinner hide
            this.spinner.hide();
        },
        error:(err:any)=>{
          console.log(err);
          
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;

          //Sprinner hide
          this.spinner.hide();
        }
      }
      )
    
  }


  //VERIFY OTP 
  forgetPassworOtpVerify()
  {
    //Sprinner show
    this.spinner.show();

    this.forgetpassForm.email = this.emailForm.email;

    console.log(this.forgetpassForm);
    
    this.as.forgotPasswordOtpVerify(this.forgetpassForm).subscribe({
      next:(res:any)=>
      {
          console.log(res);
          this.rt.navigateByUrl("/password-change-success")

          //Sprinner show
          this.spinner.hide();
      },
      error:(err:any)=>{
        console.log(err);
        
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

          //Sprinner hide
          this.spinner.hide();
      }
    }
    )
    
  }


 
}
