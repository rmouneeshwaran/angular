import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeekerComponent } from './seeker/seeker.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SeekerRegisterComponent } from './seeker-register/seeker-register.component';
import { HireComponent } from './hire/hire.component';
import { HireRegisterComponent } from './hire-register/hire-register.component';
import { HiredetComponent } from './hiredet/hiredet.component';
import { JobsComponent } from './jobs/jobs.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { MorejobComponent } from './morejob/morejob.component';
import { FooterComponent } from './footer/footer.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { SeekerdetComponent } from './seekerdet/seekerdet.component';
import { EduDetComponent } from './edu-det/edu-det.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HireMergeComponent } from './hire-merge/hire-merge.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { AppliedComponent } from './applied/applied.component';
import { JobpostedComponent } from './jobposted/jobposted.component';
import { AdminComponent } from './admin/admin.component';
import { TcComponent } from './tc/tc.component';


@NgModule({
  declarations: [
    AppComponent,
    SeekerComponent,
    HomepageComponent,
    SeekerRegisterComponent,
    HireComponent,
    HireRegisterComponent,
    HiredetComponent,
    JobsComponent,
    MainpageComponent,
    HeaderComponent,
    MorejobComponent,
    FooterComponent,
    JobdetailsComponent,
    ProfileComponent,
    SeekerdetComponent,
    EduDetComponent,
    HireMergeComponent,
    UpdatejobComponent,
    AppliedComponent,
    JobpostedComponent,
    AdminComponent,
    TcComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
