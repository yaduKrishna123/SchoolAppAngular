import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomesecondComponent } from './homesecond/homesecond.component';
import { FooterComponent } from './footer/footer.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
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
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomesecondComponent,
    FooterComponent,
    StudentRegisterComponent,
    StudentloginComponent,
    StudentdashboardComponent,
    TeacherdashboardComponent,
    AdminregisterComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    TeacherregisterComponent,
    TeacherloginComponent,
    NotificationsComponent,
    ViewstudentsComponent,
    ManagenotificationsComponent,
    ViewteacherComponent,
    QuizComponent,
    RegisteredstudentsComponent,
    CoursesComponent,
    PagenotfoundComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  
    
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
