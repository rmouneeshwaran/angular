import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobposted',
  templateUrl: './jobposted.component.html',
  styleUrls: ['./jobposted.component.css']
})
export class JobpostedComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  apply(){
    this.route.navigate(['/hiredet']);
  }
}
