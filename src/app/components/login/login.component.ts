import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}


  login(form: NgForm) : void{
    if (form.invalid) {
      return;
    }

    this.authService
      .login(form.controls['username']?.value ?? "", form.controls['password']?.value ?? "")
      .subscribe((response : any) => {
        if (response.success) {
          this.router.navigate(['/']);
        }
      }
      ,error => {
        alert(error.error.message);
        console.log(error)
      });
  }

  openRegister() : void{

  }

}
