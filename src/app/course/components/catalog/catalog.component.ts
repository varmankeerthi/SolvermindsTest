import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule,FormControl, ReactiveFormsModule, FormArray, } from '@angular/forms';
import { Course, SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-catalog',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  CatalogFB: FormBuilder = inject(FormBuilder);
  $sharedservice:SharedService = inject(SharedService);
  
  courses:Array<Course> = Array<Course>();

  Catalog = this.CatalogFB.group({
    catalogs: this.CatalogFB.array([this.CatalogFB.control('')])
  });

  ngOnInit(): void {
    this.courses= this.$sharedservice.GetCourselist(); 
  }

  get catalogs() {
    return this.Catalog.get('catalogs') as FormArray;
  }

  AddCourse() {
    this.catalogs.push(this.CatalogFB.control(''));
  }


}
