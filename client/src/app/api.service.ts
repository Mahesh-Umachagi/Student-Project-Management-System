import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  onAddStudent(stud){
    console.log(stud.value);
    this.http.post('http://localhost:3000/student',stud.value).subscribe((result)=>{
      console.log(result);
    })
  }

  getProject(Title,callback){
    this.http.get('http://localhost:3000/project/'+Title).subscribe((result)=>{
      console.log(result);
      callback(result);
    })

  }


}
