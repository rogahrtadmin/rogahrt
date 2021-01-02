import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  message:any;
  input:any;
  user: User=new User("","","","","","","","","","",0,0,0,"","");
  freetrial:number=0;
  monthly:number=599;
  yearly:number=5000;



  constructor(
    private router: Router,
    private service:UserRegistationService) { }

  ngOnInit() {
      this.input=history.state.data;
      console.log("this is the object "+this.input);
    }
  

  public login(){
this.router.navigate(['/login']);
  }

  public registerForFree(){
    console.log("btton pressed "+ this.input + this.freetrial);
    let resp=this.service.doRegistration(this.input);
    resp.subscribe((data)=>this.message=data);
    this.login();
      }

  public registerForMonth(){
    console.log("btton pressed "+ this.user + this.monthly);
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    this.login()
      }
      public registerForYear(){
        console.log("btton pressed "+ this.user + this.yearly);
        let resp=this.service.doRegistration(this.user);
        resp.subscribe((data)=>this.message=data);
        this.login()
          }      


}
