import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Patient } from '../patient';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import {LoginComponent} from '../login/login.component';
import {ViewComponent} from '../view/view.component';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
import { MustMatch } from '../_helpers/must-match.validator';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  users:any;
  user1: User=new User("","","","","","","","","","",0,0,0,"","");
  user:any;
  message:any;
  registerForm: FormGroup;
  name:any;
  submitted = false;
  patients:any;

  constructor(
    private router: Router,
    private service:UserRegistationService,
    private loginComponent: LoginComponent,
    private viewComponent: ViewComponent,
    private formBuilder: FormBuilder
   ) { }

    ngOnInit() {
      if(this.loginComponent.isUserLoggedIn()){
      let resp=this.service.getUsers();
      resp.subscribe((data)=>{this.users=data;
        this.user=this.users;});
        this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          gender: ['', Validators.required],
          mobilenumber: [''],
          weight: [''],
          height: [''],
          bp: [''],
          temparature: [''],
          complaints:[''],
          medicines: [''],
          diagnosis: [''],
          diet: [''],
          followup:[''],
          tests:[''],
          occupation: [''],
          address:[''],
          respiratory:[''],
          pulse:[''],
          elaboratecomplaints:[''],
          pasthistory:[''],
          familyhistory:[''],
          generalexam:[''],
          finaldiagnosis:['']
    
      });
      

      }
      else{
        //this.loginComponent.loginNow(); 
      }
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid

      console.log(JSON.stringify(this.registerForm.value));
      this.patientNow(this.registerForm.value);    
  } 

  public patientNow(input){
let resp=this.service.doPrescription(input);
resp.subscribe((data)=>{this.message=data;
  console.log("presription id "+this.message);
  this.viewComponent.message=this.message;
  console.log("viewcomponent prescription id "+ this.viewComponent.message);});
console.log("In patientNow");
this.getViews(this.registerForm.value);
//this.router.navigate(['/prescription']);
//this.getView(this.patient);


  }

  public getView(){
    console.log("I am here in getviewpatient")
  this.viewComponent.getView();
  }

  public getViews(patient){
  this.viewComponent.getView();
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
