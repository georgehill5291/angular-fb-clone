import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './shared/material/material.module';


import { AngularFireModule } from "@angular/fire/compat";
import { environment } from './environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProvider } from './services/auth-interceptor/auth-interceptor.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule


  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
