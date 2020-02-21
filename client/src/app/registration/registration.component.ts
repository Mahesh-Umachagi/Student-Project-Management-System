import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private http:HttpClient, private api:ApiService){ }

  ngOnInit() {
  }

  onAddStu(stud){
    this.api.onAddStudent(stud);
  }

  // onAddStudent(stud){
  //   console.log(stud.value);
  //   this.http.post('http://localhost:3000/student',stud.value).subscribe((result)=>{
  //     console.log(result);
  //   })
  // }
}
