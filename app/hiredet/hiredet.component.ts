import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiredet',
  templateUrl: './hiredet.component.html',
  styleUrls: ['./hiredet.component.css']
})
export class HiredetComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 posted(){
this.route.navigate(['/jobposted']);
}
}
