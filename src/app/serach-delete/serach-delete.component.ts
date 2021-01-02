import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import {LoginComponent} from '../login/login.component';
import {ViewComponent} from '../view/view.component';
import { Patient } from '../patient';

@Component({
  selector: 'app-serach-delete',
  templateUrl: './serach-delete.component.html',
  styleUrls: ['./serach-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

  users:any;
  email:string;
  name:any;
  count:any;
  patients:any;
  patient :Patient= new Patient(0,"","",0,"","","","","","","","","","","","","","","","","","","","","","","");
  doctor:any;
  weekCount:any;
  yearCount:any;
  input:any;
  
  constructor(
    private router: Router,
    private service:UserRegistationService,
    private loginComponent: LoginComponent,
    private viewComponent: ViewComponent) { }


public delteUser(id:number){
  if(this.loginComponent.isUserLoggedIn()){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }
  else{
    //this.loginComponent.loginNow();
  }

}

public findUserByEmailId(){
  if(this.loginComponent.isUserLoggedIn()){
    let resp= this.service.getUserByEmail(this.email);
    resp.subscribe((data)=>this.patients=data);
  }
  else{
    //this.loginComponent.loginNow(); 
  }

 }

  ngOnInit() {
    if(this.loginComponent.isUserLoggedIn()){
      this.input=history.state.data;
      console.log("this is the object "+this.input);

    let resp=this.service.getUsers();
    resp.subscribe((data)=>{this.patients=data;
      console.log(this.patients);});
      let resp1= this.service.getByToday();
      resp1.subscribe((data)=>{this.name=data;
        console.log("today count "+this.name);});
        let resp3= this.service.getByThisMonth();
        resp3.subscribe((data)=>{this.count=data;
          console.log("this month count "+this.count);});
          let resp4= this.service.getByThisWeek();
          resp4.subscribe((data)=>{this.weekCount=data;
            console.log("this week count "+this.weekCount);});
            let resp5= this.service.getByThisYear();
            resp5.subscribe((data)=>{this.yearCount=data;
              console.log("this year count "+this.yearCount);});
        let resp2=this.service.getDoctorName();
        resp2.subscribe((data)=>{this.doctor=data;
          console.log(this.doctor);});
    }
    else{
      //this.loginComponent.loginNow(); 
    }
  }
  public getView(patientid){
    this.viewComponent.getViews(patientid);
  }

  public findbyToday(){
    if(this.loginComponent.isUserLoggedIn()){
      let resp= this.service.getByToday();
      resp.subscribe((data)=>{this.name=data;
        console.log("today count "+this.name);});
    }
    else{
      //this.loginComponent.loginNow(); 
    }
  }

  public logoutNow(){
    if(this.loginComponent.isUserLoggedIn()){
      this.loginComponent.logOut();
    let resp=this.service.doLogout();
    resp.subscribe((data)=>this.name= data);
      this.router.navigate(['/login']);
    }
    else{
     // this.loginComponent.loginNow(); 
    }
    }

}
