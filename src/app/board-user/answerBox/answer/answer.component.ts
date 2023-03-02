import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiUrlService } from 'src/app/_services/api-urls/api-url.service';
import { QuestionViewService } from 'src/app/_services/question-view-service/question-view.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  questionId: any;
  question: any;


  constructor(private route: ActivatedRoute ,   
              private API_URL:ApiUrlService, 
              private http: HttpClient,
              private qvs : QuestionViewService)
  { 

    this.questionId = this.route.snapshot.params;
    this.question = this.route.snapshot.params;

    console.log("Question ID :: {} "+ this.questionId.id);

    console.log("Question Title :: {} "+ this.questionId.question);


  }

  ngOnInit(): void {

    //Question Views Counter
    this.questionViewsCounter();

  }

  
  
  questionViewsCounter()
  {
    console.log(this.questionId);
    
    this.qvs.questionViewsCounterService(this.questionId.id).subscribe({
      next:(res:any)=>{
       console.log("Counter Updated  :: {} " + res);
       console.log(res);
       },error:(err:any)=>{
          console.log(err);
           }
   })
  }


}
