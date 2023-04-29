import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-homesecond',
  templateUrl: './homesecond.component.html',
  styleUrls: ['./homesecond.component.css']
})
export class HomesecondComponent implements OnInit{
  newdata:any=[]
  constructor(private api:ApiserviceService){}
  ngOnInit(): void {
    this.api.viewimage().subscribe((data:any)=>{
      this.newdata=data
      

    })
    
  }

}
