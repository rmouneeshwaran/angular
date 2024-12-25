import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  hirereg(){
    this.route.navigate(['/hire-register']);
  }
  addjob(){
    this.route.navigate(['/hire-merge']);
  }
}
