import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route:Router) { }
    img="assets/images/image.jpeg"
    img2="assets/images/icon/Jaam.png"
  ngOnInit(): void {
  }
  job(){
    this.route.navigate(['/hire']);
  }
  admin(){
    this.route.navigate(['/admin']);
  }
}
