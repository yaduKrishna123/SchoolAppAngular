import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TeacherregisterComponent } from './teacherregister/teacherregister.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { ManagenotificationsComponent } from './managenotifications/managenotifications.component';
import { ViewteacherComponent } from './viewteacher/viewteacher.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisteredstudentsComponent } from './registeredstudents/registeredstudents.component';
import { CoursesComponent } from './courses/courses.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'studentlogin',component:StudentloginComponent},
  {path:'student',component:StudentRegisterComponent},
  {path:'studentdashboard',component:StudentdashboardComponent},
  {path:'teacherdashboard',component:TeacherdashboardComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'teacherregister',component:TeacherregisterComponent},
  {path:'teacherlogin',component:TeacherloginComponent},
  {path:'notification',component:NotificationsComponent},
  {path:'viewstudents',component:ViewstudentsComponent},
  {path:'managemsg',component:ManagenotificationsComponent},
  {path:'viewteacher',component:ViewteacherComponent},
  {path:'quiz',component:QuizComponent},
  {path:'registerview',component:RegisteredstudentsComponent},
  {path:'course',component:CoursesComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
