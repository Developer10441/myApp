import {Component, ViewEncapsulation} from "@angular/core";
import {GridOptions} from "ag-grid/main";

import RefData from '../data/refData';

import 'ag-grid-enterprise/main';

import { HeaderComponent} from "../header-component/header.component";

@Component({
    selector: 'rich-grid',
    templateUrl: 'rich-grid.component.html',
    styleUrls: ['rich-grid.css', 'proficiency-renderer.css'],
    encapsulation: ViewEncapsulation.None
})
export class RichGridComponent {

    private gridOptions:GridOptions;
    public showGrid:boolean;
    public rowData:any[];
    private columnDefs:any[];


    constructor() {
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
        this.gridOptions.defaultColDef = {
            headerComponentFramework : <{new():HeaderComponent}>HeaderComponent,
            
        }
    }

    private createRowData() {
        this.rowData = RefData.DUMMY_DATA;
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

  


