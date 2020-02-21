import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit() {
  }
  onAddProject(proj){
    console.log(proj.value);
    this.http.post('http://localhost:3000/Project',proj.value).subscribe((result)=>{
      console.log(result);
    })
  }

}
