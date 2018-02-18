import {Component} from "@angular/core";
import {ImpactedArea} from './imbalance-month-component/ImpactedArea';
import {ImbalanceDirection} from './in-kind-pay-month/ImbalanceDirection'
import {GridOptions} from "ag-grid/main";

import 'ag-grid-enterprise/main';
import { HeaderComponent} from "././header-component/header.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
        
    private imbalanceMonth : String;
    private payBackKindMonth : String;
    public impactedArea : ImpactedArea[];
    
      public year:number;
    
      public month:number;
      public imbalanceDirection : ImbalanceDirection[];
      
      public inKindPayMonth : String;
    selectedImpactArea:ImpactedArea;
    private gridOptions:GridOptions;
    public showGrid:boolean=true;
    public rowData:any[];
    private columnDefs:any[];

    constructor(){

        this.impactedArea = [
            new ImpactedArea(1, 'Select..' ),
            new ImpactedArea(2, 'Market' ),
            new ImpactedArea(3, 'Field' ),
            new ImpactedArea(4, 'Both')
         ];
         this.imbalanceDirection = [new ImbalanceDirection(1,"Select.."),
         new ImbalanceDirection(2,"Long (Due to SVC Req)"),
         new ImbalanceDirection(3,"Short (Due from SVC Req)"),
         new ImbalanceDirection(3,"Both")
       ];
       this.selectedImpactArea = this.impactedArea[0];
        this.assignImbalanceMonth();
        this.assignInKindPayBackMonth();
       
       console.log(this.selectedImpactArea);
       this.gridOptions = <GridOptions>{};
       this.createRowData();
       this.createColumnDefs();
       this.showGrid = true;
       this.gridOptions.defaultColDef = {
           headerComponentFramework : <{new():HeaderComponent}>HeaderComponent,
           
       }
    }

    validateCancel(){
        
        let x = <HTMLInputElement>document.getElementById("impactArea");
        let y = <HTMLInputElement>document.getElementById("impactDirection");

        x.value = this.impactedArea[0].name;
        y.value = this.imbalanceDirection[0].name;
        this.commentsText = null;
    }
   
    private assignInKindPayBackMonth(){
        this.month = new Date().getMonth()+3;
        this.year = new Date().getFullYear();
        if(new Date().getDate()>20){
            this.month = this.month+4;
        }
        this.inKindPayMonth = "0"+this.month.toString()+"/"+this.year.toString();
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

    validateSubmit(){
        let x = <HTMLInputElement>document.getElementById("impactArea");
        let y = <HTMLInputElement>document.getElementById("impactDirection");
        console.log(x.value,typeof(x.value));
        if(x.value == "Select.."){
            alert('Please Select Impact Area;')
        }
        if(y.value == "Select.."){
            alert('Please Select Impact Direction;')
        }
        if((x.value !== "1") && (y.value !== "1")){
            let a = {impactArea:x.value,imbalanceDirection:y.value,imbalanceMonth:this.imbalanceMonth,comment:this.commentsText,inKindPayBackMonth:this.inKindPayMonth};
            //this.rowData.push(a);
            this.rowData = [...this.rowData,a];
            console.log(this.rowData);
            this.commentsText = null;
        }
        


    }
commentsText:string;
    private createRowData() {
        this.rowData = [];
    }

    private createColumnDefs() {
        this.columnDefs = [
          {field: 'imbalanceMonth', headerName: 'Imbalance Month',width: 150,},
                    { field: 'inKindPayBackMonth', headerName: 'In-Kind Payback Month',width: 189},
                    { field: 'impactArea', headerName: 'Impact Area',width: 120 },
                    { field: 'imbalanceDirection', headerName: 'Imbalance Direction',width: 179 },
                {field:'comment',headerName:'Comment',width: 100},
            {field:'updatedBy',headerName:'Updated By',width: 110},
            {field:'updatedDT',headerName:'Updated Date Time',width: 160},
            {field:'viewCommentLink',headerName:'View Comments',width: 150}
                ]
            }

    
}
