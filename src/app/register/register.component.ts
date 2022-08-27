import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { MedRoleService } from '../_services/med-role-service/med-role.service';

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

  constructor(private authService: AuthService , private mrs:MedRoleService) { }

  ngOnInit(): void {
    this.getMedRoles()
  }

  onSubmit(): void {
    const { username, email, password , firstname , surname } = this.form;

    console.log(this.form);

    console.log();
    
    

    this.authService.register(username, email, password, firstname, surname, this.selected).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
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
