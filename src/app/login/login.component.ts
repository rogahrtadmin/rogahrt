import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User=new User("","","","","","","","","","",0,0,0,"","");
  name:any;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private service:UserRegistationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      doctoremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log(this.registerForm.value);

      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      this.loginNow(this.registerForm.value);
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  public loginFromLogout(names:any){
    console.log("loginfromlogout name "+JSON.stringify(names));
    if(names==="" || names === undefined){
      console.log("it is null");
      this.router.navigate(['/logout']);
    }
    else{
      console.log("it is not null" + names );
      sessionStorage.setItem('username', names)
      console.log("Session value "+sessionStorage.getItem('username'))
      this.router.navigate(['/search']);
    }
  }
  public loginNow(input){
    console.log("I am in login now" + input.doctoremail);
let resp=this.service.doLogin(input);
resp.subscribe((data)=>{this.name= data;
  if(this.name===""){
    console.log("it is null");
    this.router.navigate(['/logout']);
  }
  else{
    console.log("it is not null" + this.name );
    sessionStorage.setItem('username', name)
    console.log("Session value "+sessionStorage.getItem('username'))
    this.router.navigate(['/search'],{state: {data:input.email}});
  }
});

  }

}
