import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
personal(){
  this.route.navigate(['/seekerdet']);
}
}
