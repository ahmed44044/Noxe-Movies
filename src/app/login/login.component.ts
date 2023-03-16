import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string=''
  isLoading:boolean=false
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z]{3,8}')])
  })
  submitLoginForm(loginForm:FormGroup){
    this.isLoading=true
    if (loginForm.valid) {
      this._auth.signIn(loginForm.value).subscribe({
        next:(response)=>{
          if (response.message === 'success') {
            this.isLoading=false
            localStorage.setItem('userToken',response.token)
            this._auth.saveUserData()
            this._Router.navigate(['/home'])
          } else {
            this.isLoading=false
            this.errorMessage= response.message
          }
        }
      })
    }
  }
constructor(private _auth:AuthService,private _Router:Router){}
ngOnInit(): void {
    
}
}
