import { Component, OnInit } from '@angular/core';
import {ImpactedArea} from './ImpactedArea'

@Component({
  selector: 'app-imbalance-month-component',
  templateUrl: './imbalance-month-component.component.html',
  styleUrls: ['./imbalance-month-component.component.css']
})
export class ImbalanceMonthComponentComponent implements OnInit {

  public impactedArea : ImpactedArea[];

  public imbalanceMonth : String;

  public year:number;

  public month:number;

  constructor() {

    this.impactedArea = [
      new ImpactedArea(1, 'Select..' ),
      new ImpactedArea(2, 'Market' ),
      new ImpactedArea(3, 'Field' ),
      new ImpactedArea(4, 'Both')
   ];
   this.assignImbalanceMonth();

   }

  ngOnInit() {
   
    
  }

  private assignImbalanceMonth(){
      this.month = new Date().getMonth()+1;
      this.year = new Date().getFullYear();
      if(new Date().getDate()>20){
          this.month = this.month+2;
          console.log(this.month);
      }
      this.imbalanceMonth = "0"+this.month.toString()+"/"+this.year.toString();
  }

}
