import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
isActive : Boolean = false;
// @Input("numberoflikes")likes; 
likes:number= 50;
  constructor() { 
    
  }

  ngOnInit() {
  }
  onClick(){
    this.isActive = !this.isActive;
    if(this.isActive)
    this.likes++;
    else
    this.likes--;

  }

}
