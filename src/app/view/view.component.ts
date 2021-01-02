import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Patient } from '../patient';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users:any;
  output:any;
  output1:any;
  user: User=new User("","","","","","","","","","",0,0,0,"","");
  message:any;
  name:any;
  patients:any;
  patient :Patient= new Patient(0,"","",0,"","","","","","","","","","","","","","","","","","","","","","","");
  public count:number = 0;

  constructor(
    private router: Router,
    private service:UserRegistationService,
    private loginComponent: LoginComponent) { }

    
    ngOnInit() {
      console.log("count value "+ this.count);
      this.output=history.state.data;
      if(this.output===undefined){
        console.log("no data found");
        this.getView();
    }

       else{
         console.log("output is defined");
         
       } 
    }

    public getViews(patientid){
      let resp=this.service.getPatientById(patientid);
  resp.subscribe((data)=>{this.output= data;
    console.log("logging data value in getviews"+JSON.stringify(this.output));
    console.log("getviews "+this.output[0].name);
    this.router.navigate(['view'],{state: {data:this.output}});
    });
    }
  
    public getView(){
      console.log("I am here in view nginit")
      let resp=this.service.getView();
  resp.subscribe((data)=>{this.output= data;
    console.log("logging data value"+JSON.stringify(this.output));
    console.log(this.output[0].name);
    this.router.navigate(['view']);
    });
    }
  

    public viewPatients(patients){
      this.patients=patients;
      
      console.log(this.patients);
      
    }

  public patientNow(){
let resp=this.service.doPrescription(this.patient);
resp.subscribe((data)=>this.message=data);

  }

}
