import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Patient } from '../patient';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import {LoginComponent} from '../login/login.component';
import {ViewComponent} from '../view/view.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  users:any;
  email:string;
  name:any;
  count:any;
  patients:any;
  diseasess:any;
  doctor:any;
  weekCount:any;
  yearCount:any;
  diseasename:string;
  
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
    //this.loginComponent.loginNow(input);
  }

}

public findDiseaseByName(){
  if(this.loginComponent.isUserLoggedIn()){
    console.log("disease name from ui "+this.diseasename);
    let resp= this.service.getDiseaseByDiseaseName(this.diseasename);
    resp.subscribe((data)=>{this.diseasess=data;
      console.log("disease details by name "+this.diseasess);});
  }
  else{
    //this.loginComponent.loginNow(); 
  }

 }

  ngOnInit() {
    if(this.loginComponent.isUserLoggedIn()){
    let resp=this.service.getDiseases();
    resp.subscribe((data)=>{this.diseasess=data;
      console.log(this.diseasess);});

        let resp2=this.service.getDoctorName();
        resp2.subscribe((data)=>{this.doctor=data;
          console.log(this.doctor);});
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
      //this.loginComponent.loginNow(); 
    }
    }


}
