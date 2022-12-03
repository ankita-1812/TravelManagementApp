import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {
  username:any;
  loginForm:any;
  constructor(private loginser:AuthenticationService,private fb:FormBuilder,private router:Router) {
    this.loginForm=this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })

   }

  ngOnInit(): void {    
    this.onload();

  }
  public onload(){
    this.username=sessionStorage.getItem('username');
    this.loginForm.get('userName').setValue(this.username);
  }
  public onSubmit(){
    this.loginser.updatePassword(this.username,this.loginForm.value).subscribe(data=>{
      sessionStorage.clear();
      this.router.navigate(['/login']).then(()=>{window.location.reload();});
    });
  }

}
