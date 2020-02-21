import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {
project;
 proje;
 Title:string="";
 pro;
 Category:string="";
 Team_member:string="";
 Description:string="";
 Tech_used:string = "";
 Start_date:string="";
 End_date:string="";
 pr;
 pre;
  constructor(private http:HttpClient, private api:ApiService, private route:ActivatedRoute, private router:Router) { }
  ngOnInit() {
    let p = this.route.params.subscribe((params)=>{
      this.Title=params.Title; 
      
      this.api.getProject(this.Title,(result)=>{
        this.pro= result[0];
        console.log(result[0]);
        
    
        this.Title=this.pro.Title;
        this.Category=this.pro.Category;
        this.Team_member=this.pro.Team_member;
        this.Description=this.pro.Description;
        this.Tech_used=this.pro.Tech_used;
        this.Start_date=this.pro.Start_date;
        this.End_date=this.pro.End_date;
    })
      
    }) 
  }
onUpdate(pro){
  this.http.put("http://localhost:3000/project/"+pro.value.Title,pro.value).subscribe((result)=>{
    this.proje = result;
    console.log(result);
    this.router.navigate(['addprojectpage'])
  })
}
}


