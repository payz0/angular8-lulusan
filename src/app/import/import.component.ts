import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  dataSiswa:any
  indeks:number
  editns:boolean = false
  editni:boolean = false
  openTabel:boolean=false
  // kelas:any
  cari:any = {'nama':''}
  constructor(private _data:DataService, private router:Router) { }

  ngOnInit(): void {
    // this.readData();
    // this.kelas = this._data.kelas
  }

  // selectKelas(e){
  //   this._data.getDataOne({'kelas':e.target.value},'siswa').subscribe(dat=>{
  //     this.dataSiswa = dat
  //   })
  // }

  editNisn(x,i){
    this.indeks = i
    if(x == 'nisn'){
      this.editns = true
    }else{
      this.editni = true
    }
  }

  saveEdit(x){
    if(x == 'nisn'){
      this.editns = false
    }else{
      this.editni = false
    }
    console.log(this.dataSiswa)
  }

  fileExcel(e){
    this._data.Upload(e).then((data:any)=>{
      this.dataSiswa = data
      this.openTabel = true
      setTimeout(()=>{
        console.log(this.dataSiswa)
      },200)
      
    })
  }

  batal(){
    this.openTabel = false; 
    this.dataSiswa = {}
  }

  delSiswa(x){
    this.dataSiswa.splice(x,1)
    console.log(this.dataSiswa)
  }

  simpan(){
    // for(let i = 0; this.dataSiswa.length > i;i++){
    //   this._data.postData(this.dataSiswa[i],'siswa').subscribe((datas)=>{
    //     // console.log(datas)
        
    //   })
    // }
    this.dataSiswa.forEach(data => {
      // console.log(data)
      this._data.postData(data,'siswa').subscribe((datas)=>{
        this.router.navigate(['/daftar']).then(()=>{
          location.reload()
        })
      })
    });
      
    
  }

}
