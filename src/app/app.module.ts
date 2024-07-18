import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { AssigneeComponent } from './assignee/assignee.component';

@NgModule({
  declarations: [
    // AppComponent,
    LoginComponent,
    EmployeeComponent,
    AssigneeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: MockHttpInterceptor, multi: true },
  ],
  //bootstrap: [AppComponent],
})
export class AppModule {}
