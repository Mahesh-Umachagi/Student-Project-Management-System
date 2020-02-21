import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css']
})
export class DeletepageComponent implements OnInit {
proje;
project;
Title : string="";
Category:string="";
Team_member:string="";
Description:string="";
Tech_used:string = "";
Start_date:string="";
End_date:string="";


  constructor(private http:HttpClient, private route: ActivatedRoute, private api:ApiService) { 
     
   }
 


  ngOnInit() {
   
    let p = this.route.params.subscribe((params)=>{
      this.Title=params.Title;
    })
    this.api.getProject(this.Title,(result)=>{
      this.project= result[0];
        console.log("hiii");

        this.Title=this.project.Title;
        this.Category=this.project.Category;
        this.Team_member = this.project.Team_member;
        this.Description=this.project.Description;
        this.Tech_used=this.project.Tech_used;
        this.Start_date = this.project.Start_date;
        this.End_date = this.project.End_date;
      
  })
  
}

  onDelete(pro){
    this.http.delete("http://localhost:3000/Project/"+pro.value.Title).subscribe((result)=>{
      this.proje = result;
      console.log(result);
    })
  }

}
