import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  constructor(private api:ApiserviceService,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.router.navigateByUrl('')
    }

    this.dataid=localStorage.getItem("userid")
  }
  dataid:any
  msgform=this.fb.group({
    message:[''],
    date:['']
  })

  sendmsg(){
    let message=this.msgform.value.message
    let date=this.msgform.value.date
    this.api.sendmessage(message,date).subscribe((date:any)=>{
      alert('message send successffully')
    },(data:any)=>{
      alert(data.error)
    })
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("userid")
    this.router.navigateByUrl('')
  }

}
