import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-morejob',
  templateUrl: './morejob.component.html',
  styleUrls: ['./morejob.component.css']
})
export class MorejobComponent implements OnInit {

  joblogo1="assets/images/job/tesla-logo.png"
  joblogo2="assets/images/job/google-logo.png"
  joblogo3="assets/images/job/zoho-logo.png"
  joblogo4="assets/images/job/accenture-logo.png"
  icon1="assets/images/job/location-pin.png"

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  details(){
    this.route.navigate(['/jobdetails']);
  }
}
