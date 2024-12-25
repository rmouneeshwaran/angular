import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Jobsite';
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  job(){
    this.route.navigate(['/seeker']);
  }
  offer(){
    this.route.navigate(['/hire']);
  }
 
}
