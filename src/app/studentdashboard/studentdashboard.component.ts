import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
  name:string=''
  course:string=''
  courseimg:string=''
  content:string=''
  score:any
  id:any
  grade:any
  divElement:any


 constructor(private router:Router,private api:ApiserviceService){

 }
  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert('please login')
      this.router.navigateByUrl('')

    }
    this.name=localStorage.getItem("name") || ''
    this.course=localStorage.getItem("course") || ''
   this.courses()
    
  }
logout(){
  localStorage.removeItem("name")
  localStorage.removeItem("course")
  localStorage.removeItem("token")
  localStorage.removeItem("userid")
  setTimeout(() => {
    this.router.navigateByUrl('')
    
  }, 3000);
}










  courses(){
    if(this.course=="computerscience"){
      this.courseimg='https://media.tenor.com/TR9fRy1H02wAAAAd/tech.gif'
      this.content="Principal areas of study within Computer Science include artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing."

    }
    else if (this.course=="biologyscience") {
      this.courseimg="https://i.pinimg.com/originals/e8/83/06/e883069b6ab8392872c83e049732e62b.gif"
      this.content="Biology is a branch of science that deals with living organisms and their vital processes. Biology encompasses diverse fields, including botany, conservation, ecology, evolution, genetics, marine biology, medicine, microbiology, molecular biology, physiology, and zoology."
      
    } 
    else if(this.course=="commerce"){
      this.courseimg="https://www.uschamber.com/sites/default/files/articles/images/023107_comm_commentary_cyber_oct16_atf_ani.gif"
      this.content="Commerce deals with the various aspects of business, trade, accounting, financial information/transactions and merchandising. Commerce plays a significant role in the development of nations and its citizens by facilitating trade between nations or within the nation."
    }
    else if(this.course=="electronics"){
      this.courseimg="https://semidesign.in/wp-content/uploads/2020/08/AnimatedMicrochip2-1.gif"
      this.content="Electronics Engineering is a specialisation of engineering that studies and utilises nonlinear and active electrical components to design the electronic circuits, devices, the integrated circuits and their systems."
    }
    else if(this.course=="humanities"){
      this.courseimg="https://www.corbytechnicalschool.org/_files/users/24/images/Humanities/D12B3B81D42BF60A0624277E22EDDC8C.gif"
      this.content="The humanities include the study of all languages and literatures, the arts, history, and philosophy. The humanities are sometimes organized as a school or administrative division in many colleges and universities in the United States."
    }
    
    
    
   
  }
viewscore(){
  this.id=localStorage.getItem("userid")

this.api.viewresult(this.id).subscribe((data:any)=>{
  this.score=data
  console.log(data);
   this.divElement = document.getElementById("gradecolor");
  if(this.score<=3){
    this.grade='Failed   F Grade'
    this.divElement.style.color="red"

   ;
    
  }
  else if(this.score<=4){
    this.grade='failed   E Grade'
    this.divElement.style.color="red"

  }
  else if(this.score<=6){
    this.grade='Just Pass  D  Grade'
    this.divElement.style.color="yellow"

  }
  else if(this.score<=7){
    this.grade='Pass   C Grade'
    this.divElement.style.color="blue"

  }
  else if(this.score<=10){
    this.grade='pass   B Grade'
    this.divElement.style.color="green"
   
  }
  else if(this.score<=13){
    this.grade='pass   A Grade'
  }
  

},(data:any)=>{
  alert(data.error)
})

}

}
