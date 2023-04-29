import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent {
  constructor(private fb:FormBuilder,private api:ApiserviceService,private routes:Router){

  }
  loginForm=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    psw:['']

  })
  
  

  login(){
    const userid = this.loginForm.value.userid
    const psw = this.loginForm.value.psw

    if(this.loginForm.valid){
      this.api.studentlogin(userid,psw).subscribe((data:any)=>{
        if(data){

          alert('login successful')
          const name=localStorage.setItem("name",data.data['username'])
          localStorage.setItem("course",data.data['course'])
          localStorage.setItem("token",data.token)
          localStorage.setItem("userid",data.data['userid'])
          this.routes.navigateByUrl('/studentdashboard')


        }
        else{
          alert('student does not exist')
        }
      },(data:any)=>{
        alert(data.error)
      })

    }
    else{
      alert('invalid form')
    }


  }

}
