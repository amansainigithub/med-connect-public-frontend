import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordChangeSuccessComponent } from './password-change-success/password-change-success.component';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { EmailVerifySuccessComponent } from './email-verify-success/email-verify-success.component';
import { ResendEmailLinkComponent } from './resend-email-link/resend-email-link.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CampaignComponent } from './board-user/campaign/campaign/campaign.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PostboxComponent } from './board-user/postBox/postbox/postbox.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ForgotPasswordComponent,
    PasswordChangeSuccessComponent,
    EmailVerifySuccessComponent,
    ResendEmailLinkComponent,
    CampaignComponent,
    PostboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxSpinnerModule,
     NgxSpinnerModule,
     MatExpansionModule,
     MatToolbarModule,
     MatDialogModule,
     MatSnackBarModule,
     CKEditorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
