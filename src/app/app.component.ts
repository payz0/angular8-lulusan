import { Component, OnInit } from '@angular/core';
import { __assign } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lulusan';
  login:boolean = false
  parsedUrl = new URL(window.location.href);
  logAdmin:boolean = false
  admin:any = {}
  constructor(private _data:DataService, private router:Router) {};
  
  ngOnInit(){
    if(sessionStorage.getItem('login')){
      this.login = true
    }else{
      this.login = false
    }
    // this.router = this.parsedUrl.pathname
    // console.log();
  }
  
  loginAdmin(){
    this._data.getDataOne(this.admin,'admin').subscribe((e:any)=>{
      if(e.length == 1){
        // console.log(e[0])
        sessionStorage.setItem('login',e[0]._id) 
        this.router.navigate(['/daftar']).then(()=>{
          location.reload()
        })    
      }else if(this.admin.username == 'admin' && this.admin.password == 'exelfer01'){
        this._data.getData('admin').subscribe((da)=>{  
          sessionStorage.setItem('login',da[0]._id) 
          this.router.navigate(['/daftar']).then(()=>{
            location.reload()
          })    
        })
        
      }else{
        alert('maaf username dan password salah')
        this.logAdmin = false
        this.admin = {}
      }
      
    })
    
  }

  logout(){
    sessionStorage.removeItem('login')
    this.router.navigate(['/']).then(()=>{
      location.reload()
    })
  }
  
}
