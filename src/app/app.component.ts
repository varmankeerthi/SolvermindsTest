import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SharedService } from './Services/shared.service';

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
  }

}
