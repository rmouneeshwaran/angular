import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edu-det',
  templateUrl: './edu-det.component.html',
  styleUrls: ['./edu-det.component.css']
})
export class EduDetComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  formpage(){

    this.route.navigate(['/seekerdet']);

  }

  tcpage(){

    this.route.navigate(['tc']);

  }
}
