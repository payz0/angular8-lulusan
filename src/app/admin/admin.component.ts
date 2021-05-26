import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin:any = {}
  sekolah:any = {}
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.readData()
  }

  update(data){
    
    // console.log(data);
    
    this._data.updateData('admin',Object.assign(data,{'_id':sessionStorage.getItem('login')})).subscribe((e:any)=>{
      this.admin = {}
      if(e.sukses){
        alert('data sudah di update')
      }else{
        alert('gagal merubah username dan password')
      }
      
    })
    // console.log(this.admin);
    
  }

  readData(){
    this._data.getDataOne({'_id':sessionStorage.getItem('login')},'admin').subscribe((a)=>{
      this.sekolah = a[0]
      // console.log(a);
      
    })
  }
}
