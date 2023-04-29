import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit{
  constructor(private api:ApiserviceService){


  }
  id:any
  students:any=[]
  adminid:any
  
  ngOnInit(): void {
    this.id=localStorage.getItem("userid")
    this.api.viewstudents().subscribe((data:any)=>{
      this.students=data
      


    },(data:any)=>{
      alert(data.error)
      
    })
  }
  delete(id:any){

    this.api.deletestudent(id).subscribe((data:any)=>{
      console.log(data);
      
      this.students=data
      console.log(this.students);
      
      alert('process successful')
    },(data:any)=>{
      alert(data.error)
    })
  }




}
