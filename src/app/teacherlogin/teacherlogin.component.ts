import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent {
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){}
  loginForm=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    psw:['']

  })
  newdata:any=[]

  login(){
    const userid = this.loginForm.value.userid
    const psw = this.loginForm.value.psw

    if(this.loginForm.valid){
      this.api.tracherlogin(userid,psw).subscribe((data:any)=>{
        alert('login successfully')
        this.newdata=data
        console.log(this.newdata);
        localStorage.setItem("name",data.data['username'])
        localStorage.setItem("course",data.data['course'])
        localStorage.setItem("image",data.data['image'])
        localStorage.setItem("userid",data.data['userid'])
        localStorage.setItem("token",data.token)
        
        this.router.navigateByUrl('/teacherdashboard')
      },(data:any)=>{
        alert(data.error)
      })

    }
    else{
      alert('invalid form')
    }


  }

}
