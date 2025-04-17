import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormBuilder,FormControl,FormArray, Validators } from '@angular/forms';
import { Course, SharedService } from '../../../Services/shared.service';

@Component({
  selector: 'app-course-builder',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './course-builder.component.html',
  styleUrl: './course-builder.component.css'
})
export class CourseBuilderComponent implements OnInit {

  $sharedservice:SharedService = inject(SharedService);
  formbuilder:FormBuilder = inject(FormBuilder);

  course = this.formbuilder.group({
    CourseID:[null as any,[Validators.required,Validators.maxLength(50)]],
    CourseTitle: ['',[Validators.required,Validators.maxLength(15)]],
    CourseDesc: ['',[Validators.required,Validators.maxLength(50)]],
    CourseCatagory: new FormControl('',Validators.required),
    IsDeleted: new FormControl(false),
    courses: new FormArray([])
    // courses:this.formbuilder.array([this.formbuilder.control('')]),
  });
  
  Courselist:Array<Course>=Array<Course>();

  constructor () {
    // let mx = this.$sharedservice.calculate(49,78);
    // console.log(mx);
  }

  // courses:Array<Course> = Array<Course>();

  ngOnInit(): void {
    this.opttomodi=null;
    this.Courselist = this.$sharedservice.GetCourselist()
    // this.courses = [
    //   {Description:'It`s an hour long course, which contains the beginner level of excercises',Catagory:'Frontend',Title:'HTML at a glance',IsDelete:false},
    //   {Description:'Basic of Styles, Types and reusability',Catagory:'FrontEnd',Title:'CSS',IsDelete:false},
    //   {Description:'Dot net core API',Catagory:'',Title:'',IsDelete:false}    
    // ];

    if(!this.course.value.CourseID) {
      let cid=this.$sharedservice.GenerateRandomNumber(1,50);
      this.course.controls.CourseID.setValue(cid)
    }

  }

  // AddItem() {
  //   this.courses.unshift({Description:null as any,Title:null as any,Catagory:null as any,IsDelete:false})
  // }
  // DeleteItem(row:number) {
  //   this.courses.splice(row,1);
  // }
  // Cancel() {
  //   this.ngOnInit();
  // }
  // Submit() {
  // }

  opttomodi:number|null = null as any;
  Modify(rowid:number) {
    debugger;
    this.opttomodi =rowid;
    // this.course.patchValue({
    //   CourseTitle: this.Courselist[rowid].CourseTitle,
    //   CourseDesc: this.Courselist[rowid].CourseDesc,
    //   CourseCatagory:this.Courselist[rowid].CourseCatagory,
    //   IsDeleted:this.Courselist[rowid].IsDeleted,
    //   courses: []
    // });

    this.course.controls.CourseTitle.setValue(this.Courselist[rowid].CourseTitle); 
    this.course.controls.CourseDesc.setValue(this.Courselist[rowid].CourseDesc); 
    this.course.controls.CourseCatagory.setValue(this.Courselist[rowid].CourseCatagory); 

  }
  Delete(row:number) {
    this.Courselist[row].IsDeleted = true;
    // this.Courselist.splice(row,1);
  }

  // ---------------------------------------------------------------------------

  get courses() {
    return this.course.get('courses') as FormArray;
  }

  AddCourse() {
    this.courses.push(this.formbuilder.control(''));
  }

  submitCourses() {
    debugger;
    // console.log(this.course)
   
    // const co = this.formbuilder.group({
    //   courses : []
    // })
    // this.courses.push(co);
    // if(!this.course.value.CourseID) {
    //   let cid=this.$sharedservice.GenerateRandomNumber(1,50);
    //   this.course.controls.CourseID.setValue(cid)
    // }

    this.$sharedservice.UpdateCourseList(this.course.value,this.opttomodi)
    // this.Courselist = JSON.parse(JSON.stringify(this.$sharedservice.GetCourselist()));
    this.Courselist = this.$sharedservice.GetCourselist()
    // console.log(this.course.value.CourseDesc)
    // console.log(this.course.value.CourseCatagory)
    // console.log(this.course.value.CourseDesc)
    // console.log(this.course.value.IsDeleted)

    // this.ngOnInit();
    // return this.course.get('courses') as FormArray
    this.opttomodi=null;
  }

}

// export class Course {
//   Description:string =null as any;
//   Title:string =null as any;
//   Catagory:string =null as any;
//   IsDelete:boolean = false;
// }
