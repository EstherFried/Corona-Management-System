import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './components/member/member.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberFormComponent } from './components/member-form/member-form.component';
// import { MemberFormComponent } from './components/member-form/member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MembersListComponent,
    MemberFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
