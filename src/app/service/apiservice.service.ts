import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


const options={

  headers:new HttpHeaders
}
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
   BASEURL='https://schoolapp-xxhs.onrender.com'


  constructor(private http:HttpClient) { }
  appendtoken(){
    const token=localStorage.getItem("token")

    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('verify',token)
      options.headers=headers
    }
    return options
  }
 
  studentregister(userid:any,username:any,classname:any,address:any,date:any,psw:any,cpsw:any,gname:any,phone:any,value:any,course:any){
    let body={
      userid,username,classname,address,date,psw,cpsw,gname,phone,value,course
    }
  return  this.http.post(`${this.BASEURL}/register`,body)
  
  }
  studentlogin(userid:any,psw:any){
    let body ={
      userid,
      psw
    }
    return this.http.post(`${this.BASEURL}/login`,body)
  }
  adminregister(userid:any,username:any,psw:any){
    let body={
      userid,username,psw
    }
    return this.http.post(`${this.BASEURL}/adminregister`,body)
  }
  adminlogin(userid:any,psw:any){
    let body={
      userid,psw
    }
    return this.http.post(`${this.BASEURL}/adminlogin`,body)
  }
  teacherregister(userid:any,username:any,address:any,psw:any,cpsw:any,phone:any,image:any,value:any,course:any){
    let body={
      userid,username,address,psw,cpsw,phone,image,value,course
    }
    return this.http.post(`${this.BASEURL}/teacherregister`,body)

  }
  tracherlogin(userid:any,psw:any){
    let body={
      userid,psw
    }
    return this.http.post(`${this.BASEURL}/teacherlogin`,body)
  }
  sendmessage(message:any,date:any){

    let body={
      message,
      date
    }
    return this.http.post(`${this.BASEURL}/notification`,body)

  }
  viewmessage(){
    return this.http.get(`${this.BASEURL}/getnotification`)
  }
  deletenotification(id:any){

   
    return this.http.delete(`${this.BASEURL}/delete/${id}`)
  }

  
  viewstudents(){
    return this.http.get(`${this.BASEURL}/viewstudents`,this.appendtoken())
  }
  viewteacher(){
   return this.http.get(`${this.BASEURL}/viewteachers`,this.appendtoken())
  }
  deleteteacher(id:any){
    return this.http.delete(`${this.BASEURL}/deleteteacher/${id}`,this.appendtoken())
  }
  deletestudent(id:any){
    return this.http.delete(`${this.BASEURL}/deletestudent/${id}`,this.appendtoken())
  }
  test(userid:any,result:any){
    let body={
      userid,result
    }
    return this.http.put(`${this.BASEURL}/updateresult`,body,this.appendtoken(),)

  }
  viewresult(id:any){
    return this.http.get(`${this.BASEURL}/viewresult/${id}`,this.appendtoken())
  }
  viewimage(){
    return this.http.get(`${this.BASEURL}/getimages`)
  }
  viewregisterstudents(){
    return this.http.get(`${this.BASEURL}/registeredstudentsview`)
  }
}


