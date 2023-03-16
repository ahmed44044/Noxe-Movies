import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {Observable, BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Http:HttpClient,private _Router:Router) {
    if (localStorage.getItem('userToken')) {
      this.saveUserData()
    }
   }
  userData=new BehaviorSubject(null);
  saveUserData(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'))
    let decodedToken:any=jwtDecode(encodedToken)
    this.userData.next(decodedToken)
    console.log(this.userData);
    
  }
  signUp(formData:object):Observable<any>
  {
    return  this._Http.post('https://sticky-note-fe.vercel.app/signup',formData)
  }
  signIn(formData:object):Observable<any>
  {
    return  this._Http.post('https://sticky-note-fe.vercel.app/signin',formData)
  }
  signOut(){
    localStorage.removeItem('userToken')
    this.userData.next(null)
    this._Router.navigate(['/login'])
  }
}
