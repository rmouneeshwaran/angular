import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SeekerComponent } from './seeker/seeker.component';
import { SeekerRegisterComponent } from './seeker-register/seeker-register.component';
import { HireComponent } from './hire/hire.component';
import { HireRegisterComponent } from './hire-register/hire-register.component';
import { HiredetComponent } from './hiredet/hiredet.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { SeekerdetComponent } from './seekerdet/seekerdet.component';
import { EduDetComponent } from './edu-det/edu-det.component';
import { HireMergeComponent } from './hire-merge/hire-merge.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { AppliedComponent } from './applied/applied.component';
import { JobpostedComponent } from './jobposted/jobposted.component';
import { AdminComponent } from './admin/admin.component';
import { MorejobComponent } from './morejob/morejob.component';
import { TcComponent } from './tc/tc.component';



const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'mainpage'},
  {path:'seeker',component:SeekerComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'hire',component:HireComponent},
  {path:'seeker-register',component:SeekerRegisterComponent},
  {path:'hire-register',component:HireRegisterComponent},
  {path:'hiredet',component:HiredetComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'header',component:HeaderComponent},
  {path:'jobs',component:JobsComponent},
  {path:'footer',component:FooterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'jobdetails',component:JobdetailsComponent},
  {path:'seekerdet',component:SeekerdetComponent},
  {path:'edu-det',component:EduDetComponent},
  {path:'hire-merge',component:HireMergeComponent},
  {path:'updatejob',component:UpdatejobComponent},
  {path:'applied',component:AppliedComponent},
  {path:'jobposted',component:JobpostedComponent},
  {path:'admin',component:AdminComponent},
  {path:'morejob',component:MorejobComponent},
  {path:'tc',component:TcComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
