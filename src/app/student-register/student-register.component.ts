import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  registergroup=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    username:['',Validators.pattern('[a-zA-Z]*')],
    classname:['',Validators.pattern('[0-9]*')],

    address:[''],
    date:[''],
    password:['',Validators.maxLength(10)],
    cpassword:['',Validators.maxLength(10)],
    gname:['',Validators.pattern('[a-zA-Z]*')],
    phone:['',Validators.pattern('[0-9]*')],
    value:[''],
    course:['']
  })
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){

  }
  register(){
   const userid=this.registergroup.value.userid
   const username=this.registergroup.value.username
   const classname=this.registergroup.value.classname
   const address = this.registergroup.value.address
   const date = this.registergroup.value.date
   const psw =this.registergroup.value.password
   const cpsw= this.registergroup.value.cpassword
   const gname = this.registergroup.value.gname
   const phone = this.registergroup.value.phone
   const value =this.registergroup.value.value
   const course = this.registergroup.value.course

    if(this.registergroup.valid){
      if(psw==cpsw){
        this.api.studentregister(userid,username,classname,address,date,psw,cpsw,gname,phone,value,course).subscribe((result:any)=>{
          alert(result)
          console.log(result);
          this.router.navigateByUrl('studentlogin')
          
        },(result:any)=>{
          alert(result.error)
        })

      }
      else{
        alert('password not matching')
      }
      
    }
    else{
      alert('invalid form')
    }
  }

}
