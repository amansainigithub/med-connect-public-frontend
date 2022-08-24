import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

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

  constructor(private as:AuthService,private rt:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.as.forgetPassword(this.emailForm).subscribe({
        next:(res:any)=>
        {
            console.log(res);
            this.isSumbitMessage = false;
        },
        error:(err:any)=>{
          console.log(err);
          
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      }
      )
    
  }


  //VERIFY OTP 
  forgetPassworOtpVerify()
  {
    this.forgetpassForm.email = this.emailForm.email;

    console.log(this.forgetpassForm);
    
    this.as.forgotPasswordOtpVerify(this.forgetpassForm).subscribe({
      next:(res:any)=>
      {
          console.log(res);
          this.rt.navigateByUrl("/change-password/"+this.forgetpassForm.email)
      },
      error:(err:any)=>{
        console.log(err);
        
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    }
    )
    
  }


 
}
