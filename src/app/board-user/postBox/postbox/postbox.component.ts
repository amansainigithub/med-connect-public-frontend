import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/_services/post-service/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-postbox',
  templateUrl: './postbox.component.html',
  styleUrls: ['./postbox.component.css']
})
export class PostboxComponent implements OnInit {

  constructor(private ps:PostService,
              private tokenStorage: TokenStorageService,
              private _snackBar: MatSnackBar ,
              public dialogRef: MatDialogRef<PostboxComponent>,
              private spinner: NgxSpinnerService
              ) { }

  ngOnInit(): void {
  }

  post: any = {
                content: null,
                userId:"",
                title: null,
              };

  preview: string = '';
  file:any;


  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;


    selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  // selectFile(event:any){
  //   const reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.preview = reader.result as string;
  //     };
  //     this.file=event.target.files[0];
  //   }
  // }

  submitPost()
  {
     //Sprinner show
     this.spinner.show();

   // alert("working");
    if(this.tokenStorage.getUser().id == null || this.tokenStorage.getUser().id == undefined)
    {
      return alert("user ID is empty");
    }

      this.post.userId = this.tokenStorage.getUser().id;

      this.ps.submitPostService(this.file,this.post).subscribe({
        next:(res:any)=>{
          console.log("QuestionId : " + res.id);

          if (this.selectedFiles) {
            for (let i = 0; i < this.selectedFiles.length; i++) {
              console.log("Loop Working");
              console.log("Upload Success :: " + i);
              
              this.upload(i, this.selectedFiles[i], res.id);
            }
            
            this.spinner.hide();
           }
          
          this.dialogRef.close(res);

        },error:(err:any)=>{
          console.log(err.roor.message);
          
          //Sprinner show
          //this.spinner.hide();
        }
      })
  }


    upload(idx: number, file: File , questionId:any)
  {
    console.log("Upload Working....");
    
      // this.progressInfos[idx] = { value: 0, fileName: file.name };
  
        if (file) {
          this.ps.questionImagesService(file , questionId).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                const msg = 'Uploaded the file successfully: ' + file.name;
               // this.message.push(msg);
                //this.imageInfos = this.ps.getFiles();
              }
              const msg = 'Uploaded the file successfully: ' + file.name;
              console.log(msg);
            },
            (err: any) => {
              this.progressInfos[idx].value = 0;
              const msg = 'Could not upload the file: ' + file.name;
              this.message.push(msg);
            });
        }
  }


  // ===================================================================
  // ===================================================================
 

   
  // selectFiles(event: any): void {
  //   this.message = [];
  //   this.progressInfos = [];
  //   this.selectedFiles = event.target.files;
  
  //   this.previews = [];
  //   if (this.selectedFiles && this.selectedFiles[0]) {
  //     const numberOfFiles = this.selectedFiles.length;
  //     for (let i = 0; i < numberOfFiles; i++) {
  //       const reader = new FileReader();
  
  //       reader.onload = (e: any) => {
  //         console.log(e.target.result);
  //         this.previews.push(e.target.result);
  //       };
  
  //       reader.readAsDataURL(this.selectedFiles[i]);
  //     }
  //   }
  // }

  // upload(idx: number, file: File): void {
  //   this.progressInfos[idx] = { value: 0, fileName: file.name };
  
  //   if (file) {
  //     this.ps.submitPostService(file , this.post).subscribe(
  //       (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
  //         } else if (event instanceof HttpResponse) {
  //           const msg = 'Uploaded the file successfully: ' + file.name;
  //           this.message.push(msg);
  //           //this.imageInfos = this.ps.getFiles();
  //         }
  //       },
  //       (err: any) => {
  //         this.progressInfos[idx].value = 0;
  //         const msg = 'Could not upload the file: ' + file.name;
  //         this.message.push(msg);
  //       });
  //   }
  // }

  // uploadFiles(): void {
  //   this.message = [];
  
  //   if (this.selectedFiles) {
  //     for (let i = 0; i < this.selectedFiles.length; i++) {
  //       console.log("Upload Success")
  //       //this.upload(i, this.selectedFiles[i]);
  //     }
  //   }
  // }


  //this._snackBar.open('Upload Success', 'cancle', {
    //   duration: 2000,
    //   verticalPosition: 'top',
    //   horizontalPosition: 'right',
    //   panelClass: ['blue-snackbar']
    // });

}
