import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-forgot-password',
  templateUrl: './change-forgot-password.component.html',
  styleUrls: ['./change-forgot-password.component.css']
})
export class ChangeForgotPasswordComponent implements OnInit {

  isLoginFailed = false;
  errorMessage = '';
  isSumbitMessage =true;
  email:any;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.ar.snapshot.params['email'];
  }

  passwordForm:any={
    newPassword:"",
    conformPassword:""
  }

  changePassword()
  {
      console.log(this.passwordForm);
      
  }


  // this.errorMessage = err.error.message;
  // this.isLoginFailed = true;
}
