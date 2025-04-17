import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  users:Array<User> =Array<User>();
  courses:Array<Course> = Array<Course>();
  public enrollCount: number = null as any;
  IsAdmin:boolean=false;
  IsLoginSuccess:boolean=false;


  constructor () {
    this.users = [
      // {UserName: 'Admin', Password: 'Admin', UserType: 'Admin', CourseEnrolled: 0,UserId: 'U499',CoursesJoined:[{ CourseID: null as any, IsCourseComplete: false }]},
      // {UserName:'User',Password:'User',UserType:'User',CourseEnrolled:0,UserId:'U500',CoursesJoined:[{ CourseID: null as any, IsCourseComplete: false }]},
      // {UserName:'User',Password:'User1',UserType:'User',CourseEnrolled:0,UserId:'U501',CoursesJoined:[{ CourseID: null as any, IsCourseComplete: false }]}

      {UserName: 'Admin', Password: 'Admin', UserType: 'Admin', CourseEnrolled: 0,UserId: 'U499',CoursesJoined:Array<CoursesJoined>()},
      {UserName:'User',Password:'User',UserType:'User',CourseEnrolled:0,UserId:'U500',CoursesJoined:Array<CoursesJoined>()},
      {UserName:'User',Password:'User1',UserType:'User',CourseEnrolled:0,UserId:'U501',CoursesJoined:Array<CoursesJoined>()}      
    ]
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

  
GenerateRandomNumber(start:number,end:number) {
  return Math.floor(Math.random() * (end-start + 1))-start;
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
  CourseID:string = null as any;
  CourseDesc:string =null as any;
  CourseTitle:string =null as any;
  CourseCatagory:string =null as any;
  IsDeleted:boolean = false;
  courses:any[]=[];
  opttoModify:boolean = false;
  Enroll:number = null as any;
}

export class User {
  UserId:string = null as any;
  UserName:string = null as any;
  Password:string = null as any;
  UserType:string = null as any;
  CourseEnrolled:number= 0;
  // CoursesJoined:[{CourseID:number,IsCourseComplete:boolean}]=[{CourseID:null as any,IsCourseComplete:false}];
  CoursesJoined:Array<CoursesJoined> = Array<CoursesJoined>();
}

export class CoursesJoined {
  CourseID:number = null as any;
  IsCourseComplete:boolean= false;
}
