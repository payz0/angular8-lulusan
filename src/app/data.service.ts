import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  kelas:any = ["IX A","IX B","IX C","IX D","IX E", "IX F"]
  baseUrl:string = "http://localhost:8088/"
  private headers = new HttpHeaders({
    'Content-Type':'application/json',
    // 'Access-Control-Allow-Origin': this.baseUrl,
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
    // 'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept'
    // 'auth':  environment.token
    })

  // this.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  // this.headers.append('Access-Control-Allow-Credentials', 'true');

  constructor(private _http:HttpClient) {}
  
  // constructor() { }
  postData(data,tabel):Observable<any>{
    return this._http.post(this.baseUrl+tabel,data,{headers:this.headers})
    .pipe(catchError(this.errorHandler))
  }
  getDataOne(data,tabel){
    return this._http.post(this.baseUrl+"cari/"+tabel,data,{headers:this.headers})
    .pipe(catchError(this.errorHandler))
  }
  getData(tabel){
    return this._http.get(this.baseUrl+tabel,{headers:this.headers})
    .pipe(catchError(this.errorHandler))
  }

  updateData(tabel, data:any){
    return this._http.put(this.baseUrl+tabel,data,{headers:this.headers})
    .pipe(catchError(this.errorHandler))
  }

  deleteData(tabel, id:string){
    return this._http.delete(this.baseUrl+tabel+"/"+id,{headers:this.headers})
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  Upload(event) {
      return new Promise((resolve,reject)=>{
          let workBook = null;
          let jsonData = null;
          const reader = new FileReader();
          reader.readAsBinaryString(event.target.files[0]);
          reader.onload = (e) => {
            workBook =  XLSX.read(reader.result, { type: 'binary' });
            jsonData =  workBook.SheetNames.reduce((initial, name) => {
              resolve(XLSX.utils.sheet_to_json(workBook.Sheets[name]));
            }, {});
          }
      })
  }
  

}
