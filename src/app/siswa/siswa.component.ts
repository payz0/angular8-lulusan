import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-siswa',
  templateUrl: './siswa.component.html',
  styleUrls: ['./siswa.component.scss']
})
export class SiswaComponent implements OnInit {
  kelas:any
  siswa:any = {}
  suksesLog:boolean = false
  status:boolean = false
  sekolah:any = {}
  constructor(private _data:DataService) {}

  ngOnInit(): void {
    this.kelas = this._data.kelas
  }

  login(){
    this._data.getDataOne(this.siswa,'siswa').subscribe((data:any)=>{
      if(data.length == 1){
        this.siswa = data[0]
        this.suksesLog = true
        this._data.getData('admin').subscribe((a:any)=>{
          this.sekolah = a[0];
        })
      }else{
        this.suksesLog = false
        alert('Siswa tidak ditemukan')
      }
    })
    
  }
}
