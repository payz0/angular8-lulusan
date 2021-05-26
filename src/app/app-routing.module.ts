import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DaftarComponent } from './daftar/daftar.component';
import { ImportComponent } from './import/import.component';
import { SiswaComponent } from './siswa/siswa.component';


const routes: Routes = [
  {path:'', component:SiswaComponent},
  {path:'admin',component:AdminComponent},
  {path:'import',component:ImportComponent},
  {path:'daftar',component:DaftarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComp = [AdminComponent,ImportComponent,DaftarComponent,SiswaComponent]
