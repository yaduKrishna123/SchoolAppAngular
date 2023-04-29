import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherregister',
  templateUrl: './teacherregister.component.html',
  styleUrls: ['./teacherregister.component.css']
})
export class TeacherregisterComponent implements OnInit{
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.router.navigateByUrl('')
    }
  }
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){}
  images:any

  registergroup=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    username:['',Validators.pattern('[a-zA-Z]*')],

    address:[''],
    password:['',Validators.maxLength(10)],
    cpassword:['',Validators.maxLength(10)],
    phone:['',Validators.pattern('[0-9]*')],
    image:[''],
    value:[''],
    course:['']
  })

  register(){
    const userid=this.registergroup.value.userid
    const username=this.registergroup.value.username
    const address = this.registergroup.value.address
    const psw =this.registergroup.value.password
    const cpsw= this.registergroup.value.cpassword
    const phone = this.registergroup.value.phone
    const image=this.registergroup.value.image
    const value =this.registergroup.value.value
    const course = this.registergroup.value.course

    if(this.registergroup.valid){
    // this.images=image
    this.api.teacherregister(userid,username,address,psw,cpsw,phone,image,value,course).subscribe((result:any)=>{
      alert(result)
      this.router.navigateByUrl('teacherlogin')
    },(result:any)=>{
      alert(result.error)
    })
    
    }
    else{
      alert('invalid form')
    }
  }

}
