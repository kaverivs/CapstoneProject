import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ViewprofileService } from '../viewprofile/viewprofile.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  customer?:Customer={};
  
  userName:any;
  password:any;
  constructor(private  viewprofileService : ViewprofileService) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('user');

    this.getBalance(this.userName);

  }
  getBalance(userName:any): void{
    this.viewprofileService.getCustPro(userName).subscribe((customerData) =>{   
    
      this.customer=customerData, 
      console.log("hello",this.customer), 
      console.log("hai",customerData);
    }, 
    (error) =>{
      console.log(error);
    });
  }

}
