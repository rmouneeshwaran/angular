import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-merge',
  templateUrl: './hire-merge.component.html',
  styleUrls: ['./hire-merge.component.css']
})
export class HireMergeComponent implements OnInit {

  constructor(private route:Router) { }


  ngOnInit(): void {
  }
 addjob(){
   this.route.navigate(['/hiredet']);
 }

 updatejob(){
  this.route.navigate(['/updatejob']);
}
}
