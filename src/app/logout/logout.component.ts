import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  user: User=new User("","","","","","","","","","",0,0,0,"","");
  name:any;

  constructor(
    private router: Router,
    private service:UserRegistationService,
    private loginComponent: LoginComponent) { }

  ngOnInit() {
  }
  

  public logoutNow(){
let resp=this.service.doLogout();
resp.subscribe((data)=>this.name= data);
this.loginComponent.logOut();
  this.router.navigate(['/login']);
}
public loginNow(){
  let resp=this.service.doLogin(this.user);
  resp.subscribe((data)=>{this.name= data;
  console.log("logout component name "+this.name + this.user);
this.loginComponent.name==this.name;
  this.loginComponent.user==this.user;
  this.loginComponent.loginFromLogout(this.name);
});
    }
}
