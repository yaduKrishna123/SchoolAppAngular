import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managenotifications',
  templateUrl: './managenotifications.component.html',
  styleUrls: ['./managenotifications.component.css']
})
export class ManagenotificationsComponent implements OnInit {
  constructor(private api:ApiserviceService,private router:Router){}
  msg:any=[]
  deleteid:any=[]
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.router.navigateByUrl('')
    }

    this.api.viewmessage().subscribe((data:any)=>{
      this.msg=data
      console.log(data);
      
      
      
    
      
    })

    
  }
  delete(id:any){
    this.api.deletenotification(id).subscribe((data:any)=>{
      alert('data deleted')
      console.log(data);
      console.log(id);
      
      this.msg=data
      
    },(data:any)=>{
      alert(data.error)
    })
  }

}
