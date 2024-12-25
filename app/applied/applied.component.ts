import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied',
  templateUrl: './applied.component.html',
  styleUrls: ['./applied.component.css']
})
export class AppliedComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  apply(){
    this.route.navigate(['/jobs']);
  }
}
