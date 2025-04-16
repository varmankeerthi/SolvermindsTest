import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Course, SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-enrollment',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent implements OnInit {

  courses:Array<Course> = Array<Course>();
  $sharedservice:SharedService = inject(SharedService);

  ngOnInit(): void {
  }
  
  JoinCourse() {
    
  }

}
