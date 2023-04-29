import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router){}

  adminregister=this.fb.group({
    userid:['',Validators.pattern('[0-9]*')],
    username:['',Validators.pattern('[a-zA-Z]*')],
    psw:[''],
    cpsw:['']


  })
  register(){
    const userid=this.adminregister.value.userid
    const username=this.adminregister.value.username
    const psw=this.adminregister.value.psw
    const cpsw=this.adminregister.value.cpsw
    if(this.adminregister.valid){
      if(psw==cpsw){
        this.api.adminregister(userid,username,psw).subscribe((data:any)=>{
          alert(data)
          this.router.navigateByUrl('adminlogin')
        },(data:any)=>{
          alert(data.error)
        })


      }
      else{
        alert('password does notmatched')
      }

    }
    else{
      alert('invalid form')
    }
  }

}
