import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-registeredstudents',
  templateUrl: './registeredstudents.component.html',
  styleUrls: ['./registeredstudents.component.css']
})
export class RegisteredstudentsComponent implements OnInit{
  constructor(private api:ApiserviceService){

  }
  students:any=[]
  ngOnInit(): void {
    this.api.viewregisterstudents().subscribe((data:any)=>{
      this.students=data

    },(data:any)=>{
      alert(data.error)
    })
  }

}
