import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherdashboard',
  templateUrl: './teacherdashboard.component.html',
  styleUrls: ['./teacherdashboard.component.css']
})
export class TeacherdashboardComponent implements OnInit {
  constructor(private api:ApiserviceService,private routes:Router ){}
  length:any=[]
  dataid:string=''
  dataimage:string=''
  dataname:string=''
  datacourse:string=''
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.routes.navigateByUrl('')

    }
    this.api.viewmessage().subscribe((data:any)=>{
      this.length=data.length

    })
    if(localStorage.getItem("name")){
      this.dataname=localStorage.getItem("name") || ''
      this.dataimage=localStorage.getItem("image") || ''
      this.datacourse=localStorage.getItem("course") || ''
      this.dataid=localStorage.getItem("userid") || ''

    }
 
    
  }
  logout(){
    localStorage.removeItem("userid")
    localStorage.removeItem("name")
    localStorage.removeItem("image")
    localStorage.removeItem("course")
    localStorage.removeItem("token")
    alert('successfully loged out')
  }


 
  



}
