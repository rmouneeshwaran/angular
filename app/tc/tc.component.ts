import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
jobs(){
  this.route.navigate(['/jobs']);
}
}
