import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private route:Router) { }
  portimg(){
    let pimg= {'background-image': 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)),url("assets/images/extra/b1.jpg")',};
    return pimg;
  }
  serimg(){
    let simg= {'background-image': 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)),url("assets/images/extra/b3.jpg")',};
    return simg;
  }
  contactimg() {
    let cimg = { 'background-image': 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)),url("assets/images/extra/b4.jpg")',};
    return cimg;
  }
  ngOnInit(): void {
  }

  profile(){
    this.route.navigate(['/profile']);
  }
}
