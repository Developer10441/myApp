import { Component, OnInit } from '@angular/core';
import {ImbalanceDirection} from './ImbalanceDirection'

@Component({
  selector: 'app-in-kind-pay-month',
  templateUrl: './in-kind-pay-month.component.html',
  styleUrls: ['./in-kind-pay-month.component.css']
})
export class InKindPayMonthComponent implements OnInit {

  public imbalanceDirection : ImbalanceDirection[];
  
  public inKindPayMonth : String;

  public year:number;
  
  public month:number;


  constructor() { 
    this.imbalanceDirection = [new ImbalanceDirection(1,"Select.."),
  new ImbalanceDirection(2,"Long (Due to SVC Req)"),
  new ImbalanceDirection(3,"Short (Due from SVC Req)"),
  new ImbalanceDirection(3,"Both")
];
  this.assignInKindPayBackMonth();
  }

  ngOnInit() {
  }


  private assignInKindPayBackMonth(){
    this.month = new Date().getMonth()+3;
    this.year = new Date().getFullYear();
    if(new Date().getDate()>20){
        this.month = this.month+4;
    }
    this.inKindPayMonth = "0"+this.month.toString()+"/"+this.year.toString();
}

}
