import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserProfileService } from 'src/app/_services/user-profile-service/user-profile.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  

  constructor(
    private tokenStorageService: TokenStorageService,
    private spinner: NgxSpinnerService,
    private ups:UserProfileService,
    public dialog: MatDialog
) { 

}

  ngOnInit(): void {
    this.getQuestions();
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
    this.getQuestions();
  }

  onScrollUp() {
    console.log("onScrollUp!!");
  }


  async  getQuestions()
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