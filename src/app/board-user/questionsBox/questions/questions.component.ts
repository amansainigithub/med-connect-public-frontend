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
  isLoading = true;
  page = 0;

  onScrollDown() {
    this.isLoading = true;
    console.log("scrolled Down!!");
    this.page+=1;
    this.getQuestions();
  }

  onScrollUp() {
    console.log("onScrollUp!!");
  }


  async getQuestions()
  {
    console.log("Page Number " + this.page);

    //Sprinner show
    // this.spinner.show();

    this.ups.getPostsService(this.page).subscribe({
      next:(res:any)=>{

        this.contentArray = res;
        this.contentArray.forEach((e:any)=>{
          this.data.push(e);
        })
        this.isLoading = false;
        //this.data = res;
        console.log(res);

        
        //Sprinner hide
        // this.spinner.hide();
      },error:(err:any)=>{
        console.log(err.roor.message);
          this.isLoading = false;
        //Sprinner show
      //   this.spinner.hide();
      }
    })
  }


  box:any = false;
  progressBar:any = false;
  //Working on Vote Up and Vote Down
  voteUp:any = 0;
  voteUpAndDownJson:any = {
    userId : null,
    questionId : null,
    voteResult : null
    } ;

  question_vote_up_and_down(id:any , up_and_down:any , event:any)
  {
      this.box = true;
      this.progressBar = true;

       console.log("vote Up working..." + up_and_down) ;
       this.voteUpAndDownJson.userId = this.tokenStorageService.getUser().id
       this.voteUpAndDownJson.questionId = id;
       this.voteUpAndDownJson.voteResult = up_and_down;

       this.ups.question_vote_up_and_down_service(this.voteUpAndDownJson).subscribe({
       next:(res:any)=>{
        console.log("Response ::  " + res);
          
        setTimeout(() => {
          this.box = false;
          this.progressBar = false;
          }, 1000);

        },error:(err:any)=>{
          console.log(err.roor.message);
            
            setTimeout(() => {
              this.box = false;
              this.progressBar = false;
              }, 1000);
            }
    })
  }


  


}
