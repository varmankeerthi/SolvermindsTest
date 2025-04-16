import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'admin',
        loadChildren: ()=> import('./admin/admin.module').then(m=> m.AdminModule)
    },
    {path:'course',
        loadChildren: ()=> import('./course/course.module').then(m=> m.CourseModule)
    },
    {path:'enroll',
        loadChildren: ()=> import('./entroll/entroll.module').then(m=> m.EntrollModule)
    }
];
