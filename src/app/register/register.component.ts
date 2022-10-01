import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../_services/auth.service';
import { MedRoleService } from '../_services/med-role-service/med-role.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    firstname: null,
    surname: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selected = '';
  medRoleList:any;
  isLoggedIn = false;

  constructor(private authService: AuthService , 
              private mrs:MedRoleService, 
              private spinner: NgxSpinnerService,
              private tokenStorageService: TokenStorageService,
              private _router:Router) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn)
    {
      this._router.navigateByUrl("/user");
    }
    

    this.getMedRoles()
  }

  onSubmit(): void {
        //Sprinner show
       this.spinner.show();

    const { username, email, password , firstname , surname } = this.form;

    this.authService.register(username, email, password, firstname, surname, this.selected).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;

        //Sprinner hide
        this.spinner.hide();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

        //Sprinner hide
        this.spinner.hide();
      }
    );
  }

  getMedRoles()
  {
      this.mrs.getMedRoles().subscribe(
        (res:any)=>{
          this.medRoleList = res.data;
        },
       (err:any)=>{
        console.log(err);
        
        }
      )
  }





}
