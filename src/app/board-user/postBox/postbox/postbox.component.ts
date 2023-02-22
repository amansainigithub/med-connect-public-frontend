import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
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
  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';
  // preview = '';



  selectFile(event:any){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.preview = reader.result as string;
      };
      this.file=event.target.files[0];
    }
  }

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
          console.log("successor Res : " + res);
          this._snackBar.open('Upload Success', 'cancle', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['blue-snackbar']
          });
          this.dialogRef.close(res);

          //Sprinner show
          this.spinner.hide();

        },error:(err:any)=>{
          console.log(err.roor.message);
          
          //Sprinner show
          this.spinner.hide();
        }
      })
  }


  



  


}
