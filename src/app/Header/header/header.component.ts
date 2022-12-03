import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkEmp:boolean=false;
  checkAdmin:boolean=false;
  checkLogin:boolean=true;
  userType:any;
  
  constructor() { }

  ngOnInit(): void {
  
    this.onload();  
  }
 
  onload(){
    
    this.userType=sessionStorage.getItem('usertype');
    console.log(this.userType);
    if(this.userType=='"admin"'){
      this.checkAdmin=true;
      this.checkLogin=false;
    }
    else if(this.userType=='"employee"'){
      this.checkEmp=true;
      this.checkLogin=false;
    }

  }
  logoutfn(){
    sessionStorage.clear();
    this.onload();
  }
  createDummySession(){
    sessionStorage.setItem('dummy','login');
  }
  

}
