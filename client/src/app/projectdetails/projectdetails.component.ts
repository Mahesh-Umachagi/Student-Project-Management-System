import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'


@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  proje;


  constructor(  private http:HttpClient, private router:Router) {
      this.http.get('http://localhost:3000/Project',).subscribe((result)=>{
        this.proje = result;
        console.log(result);
  })
   }

  ngOnInit() {
  }
onDelete(pro){
  this.http.delete("http://localhost:3000/Project/"+pro.value.Title).subscribe((result)=>{
    this.proje = result;
    console.log(result);
  })
}

deleteRow(id){
  for(let i = 0; i < this.proje.length; ++i){
      if (this.proje[i].id === id) {
          this.proje.splice(i,1);
      }
  }
}

onUpdate(pr){
  this.http.put("http://localhost:3000/Project/"+pr.value.Title,pr.value).subscribe((result)=>{
    this.proje = result;
    console.log(result);
  })

}
 
onClick(Title){
  this.router.navigate(['/updatepage',Title])
}
onDel(Title){
  this.router.navigate(['/deletepage',Title])
}


}
