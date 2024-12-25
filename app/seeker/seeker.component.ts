import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  seekerreg(){
    this.route.navigate(['/seeker-register']);
  }
  
  job(){
    this.route.navigate(['/jobs']);
  }
}
