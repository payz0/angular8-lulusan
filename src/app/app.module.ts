import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routeComp } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';
// import { SiswaComponent } from './siswa/siswa.component';
// import { DaftarComponent } from './daftar/daftar.component';
// import { ImportComponent } from './import/import.component';
// import { DaftarComponent } from './daftar/daftar.component'

@NgModule({
  declarations: [
    AppComponent,
    routeComp
    // SiswaComponent
    // DaftarComponent
    // ImportComponent
    // DaftarComponent
  ],
  imports: [
    FilterPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
