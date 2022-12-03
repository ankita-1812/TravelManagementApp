import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checklogin:boolean=true;
  dummy:any;
  title = 'TravelManagement';
   username:any;
   ngOnInit():void{
   this.onload();
   }

   onload(){
    
    this.username=sessionStorage.getItem('username');
    
    this.dummy=sessionStorage.getItem('dummy');
    if(this.username!=null || this.dummy=='login')
    this.checklogin=false; 
   }

}
