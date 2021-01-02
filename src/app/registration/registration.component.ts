import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User=new User("","","","","","","","","","",0,0,0,"","");
  message:any;
  registerForm: FormGroup;
  submitted = false;
  license = '';

  constructor(
    private router: Router,
    private service:UserRegistationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      doctoremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
      doctoraddress: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      landmark:['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      doctormobilenumber:['', Validators.required],
      landline:['', Validators.required],
      license: ['', Validators.required],
      degree:['', Validators.required]

  }, {
      validator: MustMatch('password', 'confirmpassword')
  });
  }
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      console.log(JSON.stringify(this.registerForm.value));
      this.registerNow(this.registerForm.value);
  }
  public registerNow(input){
    console.log("I am in register now" + JSON.stringify(input));
    console.log("I am in registerNow "+ input);
this.router.navigate(['/pricing'],{state: {data:input}});
  }

}
