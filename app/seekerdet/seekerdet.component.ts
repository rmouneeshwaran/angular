import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seekerdet',
  templateUrl: './seekerdet.component.html',
  styleUrls: ['./seekerdet.component.css']
})
export class SeekerdetComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  edupage(){
    this.route.navigate(['/edu-det']);
  }
}
