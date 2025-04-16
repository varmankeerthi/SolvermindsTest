import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  courses:Array<Course> = Array<Course>();
  public enrollCount: number = null as any;
  IsAdmin:boolean=false;
  IsLoginSuccess:boolean=false;

  constructor() { }

  calculate(x:number,y:number):number {
    debugger;
    
      let value = x * y + (y/x) - x
      return value;
  }

  GetCourselist():Array<Course> {
    return this.courses;
  }

  UpdateCourseList(list:any,opttomodify:number | null =null) {
    if (opttomodify!=null) {
      this.courses.splice(opttomodify,1)
    }
    this.courses.push(list);
  }
}

// export class Course {
//   Description:string =null as any;
//   Title:string =null as any;
//   Catagory:string =null as any;
//   IsDelete:boolean = false;
//   courses:any[]=[];
// }


export class Course {
  CourseDesc:string =null as any;
  CourseTitle:string =null as any;
  CourseCatagory:string =null as any;
  IsDeleted:boolean = false;
  courses:any[]=[];
  opttoModify:boolean = false;
  Enroll:number = null as any;

}
