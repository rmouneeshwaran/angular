
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Seekerreg } from './model/Seekerreg';

@Injectable({

  providedIn: 'root'

})

export class SeekeregisterService {

 

  private baseURL = "http://localhost:8082/api/v1/can_reg";



  constructor(private httpClient: HttpClient) { }

 

  getSeekerList(): Observable<Seekerreg[]>{

    return this.httpClient.get<Seekerreg[]>(`${this.baseURL}`);

  }



  createSeeker(Seekerreg: Seekerreg): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`, Seekerreg);

  }



  /*getEmployeeById(id: number): Observable<Employee>{

    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);

  }



  updateEmployee(id: number, employee: Employee): Observable<Object>{

    return this.httpClient.put(`${this.baseURL}/${id}`, employee);

  }



  deleteEmployee(id: number): Observable<Object>{

    return this.httpClient.delete(`${this.baseURL}/${id}`);

  }*/

}