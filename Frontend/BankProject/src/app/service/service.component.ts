import { Component, OnInit, Input } from '@angular/core';
import { Customer, CustomerResponse } from '../customer';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  constructor(private logServe:LoginService) { 
    console.log("service component");
  }


  ngOnInit(): void {
    
  }
}
