import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SharedService, User } from './Services/shared.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ocms';

  router:Router=inject(Router);
  $sharedservice:SharedService = inject(SharedService);
  
  UserName:string = null as any;
  Password:string = null as any;

  // IsAdmin:boolean=false;
  // IsLoginSuccess:boolean=false;

  ngOnInit(): void {
    this.$sharedservice.IsAdmin = false;
    this.$sharedservice.IsLoginSuccess = false;
  }

  Login() {
    debugger;
    if (this.UserName.toLocaleLowerCase() == 'admin' && this.Password == 'Admin') {
      this.$sharedservice.IsAdmin = true;
      this.$sharedservice.IsLoginSuccess = true;
      this.router.navigate(['admin/coursebuilder']);
    } else if (this.UserName.toLocaleLowerCase() == 'user' && this.Password == 'User') {
      this.$sharedservice.IsLoginSuccess = true;
      this.$sharedservice.IsAdmin = false;
      this.router.navigate(['course/catalog']);
    }
    
// ------------------------------------------------------

var loggedinUser = this.$sharedservice.users.filter(x=>  x.UserName.toLocaleLowerCase() == this.UserName.toLocaleLowerCase() && x.Password == this.Password);

    if (loggedinUser.length > 0 && loggedinUser[0].UserType == 'Admin') {
      this.$sharedservice.IsAdmin = true;
      this.$sharedservice.IsLoginSuccess = true;
      this.router.navigate(['admin/coursebuilder']);
    } else if (loggedinUser.length > 0 && loggedinUser[0].UserType == 'User') {
      this.$sharedservice.IsLoginSuccess = true;
      this.$sharedservice.IsAdmin = false;
      this.router.navigate(['course/catalog']);
    } else {
      alert('Invalid Credentials.');
      return;
    }

    this.UserName = null as any;
    this.Password = null as any;
  }

  Logout() {
    this.$sharedservice.IsAdmin = false;
    this.$sharedservice.IsLoginSuccess =false;
    this.router.navigate(['']);
  }

}
