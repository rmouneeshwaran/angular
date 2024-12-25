import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seekerreg } from '../model/Seekerreg';
import { SeekeregisterService } from '../seeker-register.service';

@Component({
  selector: 'app-seeker-register',
  templateUrl: './seeker-register.component.html',
  styleUrls: ['./seeker-register.component.css']
})
  export class SeekerRegisterComponent implements OnInit {



    Seekerreg:Seekerreg=new Seekerreg();
  
    constructor(private route:Router,private expservice :SeekeregisterService) { }
    ngOnInit(): void {
    }
    saveSeeker()

  {

    this.expservice.createSeeker(this.Seekerreg).subscribe(data=>{console.log(this.Seekerreg);

    this.exp()},

    error =>console.log(error));

  }

  onSubmit()

  {

    console.log(this.Seekerreg);

    this.saveSeeker();

  }
  exp()
{
  this.route.navigate(['/jobs']);
}
}
