import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewteacherComponent implements OnInit{
  students:any=[]
  adminid:any
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.router.navigateByUrl('')
    }
    this.api.viewteacher().subscribe((data:any)=>{
      this.adminid=localStorage.getItem('userid')

      this.students=data

    },(data:any)=>{
      alert(data.error)
    })
    
  }
  constructor(private api:ApiserviceService,private router:Router){}
  delete(id:any){
    this.api.deleteteacher(id).subscribe((data:any)=>{
      this.students=data
      alert('data deleted')
    },(data:any)=>{
      alert(data.error)
    })

  }

}
