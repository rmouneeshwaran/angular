import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private route:Router) { }
  complogo="assets/images/job/Jaam-logo.png"
  bgimg="assets/images/job/6671.jpg"
  logo1="assets/images/job/prodapt1-logo.png"
  logo2="assets/images/job/oracle-logo.png"
  logo3="assets/images/job/microsoft-logo.png"
  joblogo1="assets/images/job/tesla-logo.png"
  joblogo2="assets/images/job/google-logo.png"
  joblogo3="assets/images/job/zoho-logo.png"
  joblogo4="assets/images/job/accenture-logo.png"
  icon1="assets/images/job/location-pin.png"
  findbg(){
    let fimg={'background-image':'url("assets/images/job/image0.jpg")',};
    return fimg;
  }
  ngOnInit(): void {
  }
  details(){
    this.route.navigate(['/jobdetails']);
  }
  more(){
    this.route.navigate(['/morejob']);
  }
}

