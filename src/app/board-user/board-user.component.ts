import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserProfileService } from '../_services/user-profile-service/user-profile.service';
import { UserService } from '../_services/user.service';
import { PostboxComponent } from './postBox/postbox/postbox.component';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  title = 'MedConnect-frontend';
  panelOpenState = false;
   roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  email:any;
  imageSrc: string = '';
  file:any;
  profileUrl:any;
  posts:any;

  constructor(
            private tokenStorageService: TokenStorageService,
            private spinner: NgxSpinnerService,
            private ups:UserProfileService,
            public dialog: MatDialog
    ) { 
      
    }

  ngOnInit(): void {
    /** spinner starts on init */
    // this.spinner.show();

    // setTimeout(() => {
      /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);

    this.getAllPosts();
  
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.email = user.email;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


  onChange(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
      this.file=event.target.files[0];
    }
    this.ups.updateUserProfile(this.file,this.email).subscribe({
      next:(res:any)=>{
        this.profileUrl = res.profilePicUrl;
        console.log("UPDATE PROFILE SUCCESS");
      },error:(err:any)=>{
        console.log(err.roor.message);
      }
    })
  }

  dataSave()
  {
    const dialogRef = this.dialog.open(PostboxComponent,{
      width: '800px',
      height:'370px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log("AC DATA " + result.fileName)
    });
  }

  data:any = [];
  contentArray =[];
  sum = 20;
  throttle = 20;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;
  page = 0;


  onScrollDown() {
    console.log("scrolled Down!!");
    this.page+=1;
    this.getAllPosts();
  }

  onScrollUp() {
    console.log("onScrollUp!!");
  }


  async  getAllPosts()
  {
    console.log("Page Number " + this.page)
    this.ups.getPostsService(this.page).subscribe({
      next:(res:any)=>{
        this.contentArray = res.content;
        this.contentArray.forEach((e:any)=>{
          this.data.push(e);
        })
        //this.data = res;
        console.log(res);
      },error:(err:any)=>{
        console.log(err.roor.message);
      }
    })
  }

  

}
