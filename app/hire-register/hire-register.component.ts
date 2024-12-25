import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-register',
  templateUrl: './hire-register.component.html',
  styleUrls: ['./hire-register.component.css']
})
export class HireRegisterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  hiredet(){
    this.route.navigate(['/hiredet']);
  }
  addjob(){
    this.route.navigate(['/hire-merge']);
  }

}
