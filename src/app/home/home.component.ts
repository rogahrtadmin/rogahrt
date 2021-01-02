import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRegistationService } from '../user-registation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message:any;

  constructor(
    private router: Router,
    private service:UserRegistationService) { }

  ngOnInit() {
    console.log("I am in home");
    }
  

  public login(){
this.router.navigate(['/login']);
  }

  public register(){
    this.router.navigate(['/register']);
      }

}
