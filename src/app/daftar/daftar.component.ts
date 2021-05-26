import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {
  dataSiswa:any
  kelas:any
  cari:any = {'nama':''}
  rombel:string = 'IX A'

  indeks:number
  editns:boolean = false
  editni:boolean = false

  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.readData(this.rombel)
    this.kelas = this._data.kelas
  }

  editNisn(x,i){
    this.indeks = i
    if(x == 'nisn'){
      this.editns = true
    }else{
      this.editni = true
    }
  }

  saveEdit(x,i){
    if(x == 'nisn'){
      this.editns = false
    }else{
      this.editni = false
    }
    // console.log(this.dataSiswa[i])
    this._data.updateData('siswa',this.dataSiswa[i]).subscribe((e:any)=>{
        if(e.sukses){
          alert('data siswa di rubah')
        }else{
          alert('gangguan server')
        }
    })
  }

  readData(kelas){
    this._data.getDataOne({'kelas':kelas},'siswa').subscribe((data)=>{
      this.dataSiswa = data
    })
  }

  selectKelas(e){
    this.rombel = e.target.value
    this._data.getDataOne({'kelas':e.target.value},'siswa').subscribe(dat=>{
      this.dataSiswa = dat
    })
  }

  delSiswa(i){
    // console.log(i);
    this._data.deleteData('siswa',i).subscribe(da=>{
      // console.log(da)
      this.readData(this.rombel)
    })
    
  }

  updateSiswa(data){
    if(data.status.toLowerCase() == 'lulus'){
      data.status = 'Tidak Lulus'
    }else{
      data.status = 'Lulus'
    }
    this._data.updateData('siswa',data).subscribe((e:any)=>{
      if(e.sukses){
        alert('siswa di rubah '+ data.status)
      }else{
        alert('gangguan server')
      }
    })
    // console.log(data.status)
  }
}
