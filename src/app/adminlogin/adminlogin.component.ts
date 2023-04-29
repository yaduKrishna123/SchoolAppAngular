import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){}
  adminform=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
   
    psw:[''],
   


  })
  login(){
    const userid=this.adminform.value.userid
    const psw=this.adminform.value.psw

    if(this.adminform.valid){
      this.api.adminlogin(userid,psw).subscribe((data:any)=>{
        localStorage.setItem("name",data.data['username'])
        localStorage.setItem("userid",data.data['userid'])
        localStorage.setItem("token",data.token)
        alert('login successfullt')

        this.router.navigateByUrl('/admindashboard')
      },(data:any)=>{
        alert(data.error)
      })



    }
    else{
      alert('invalid form')
    }
  }

}
