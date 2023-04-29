import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  constructor(private api:ApiserviceService,private router:Router){}
  msg:any=[]

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please login")
      this.router.navigateByUrl('')
    }
    this.viewnotification()
  }

  viewnotification(){
    this.api.viewmessage().subscribe((data:any)=>{
      this.msg=data
      console.log(this.msg);
      

    },(data:any)=>{
      
    })
  }

}
