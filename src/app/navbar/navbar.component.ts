import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

constructor(private _auth:AuthService){}
isLogin:boolean=false
userInfo:any={}
logOut(){
  this._auth.signOut()
}
ngOnInit(): void {
  this._auth.userData.subscribe({
    next:()=>{
      if (this._auth.userData.getValue() != null) {
        this.isLogin = true
        this.userInfo=this._auth.userData.value
        console.log(this.userInfo);
        
      }else{
        this.isLogin = false
      }
    }
  })
}
}
