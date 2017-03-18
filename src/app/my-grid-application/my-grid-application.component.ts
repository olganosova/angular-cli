import {Component, OnInit} from "@angular/core";
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";
import {HttpService} from "../http/http.service";

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  styleUrls: ['./my-grid-application.component.scss'],
})
export class MyGridApplicationComponent implements OnInit {
  private gridOptions: GridOptions;
  errorMessage: string = "";

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.gridOptions = {
      enableSorting: true,
      enableColResize: true
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        sort: 'desc',
        cellRendererFramework: RedComponentComponent,
        pinned: 'left'
      },
      {headerName: "Age", field: "age", width: 90},
      {headerName: "Country", field: "country", width: 120},
      {headerName: "Year", field: "year", width: 90, unSortIcon: true},
      {headerName: "Date", field: "date", width: 110},
      {headerName: "Sport", field: "sport", width: 110},
      {headerName: "Gold", field: "gold", width: 100},
      {headerName: "Silver", field: "silver", width: 100},
      {headerName: "Bronze", field: "bronze", width: 100},
      {headerName: "Total", field: "total", width: 100}
    ];

    this.getGridData();

  }

  getGridData() {
    this.httpService.makeRequest('getGridData', 'get')
      .subscribe(
        records => {
          this.gridOptions.api.setRowData(records);
          this.sizeToFit()
        },
        error => this.errorMessage = <any>error);
  }

  sizeToFit() {
    this.gridOptions.api.sizeColumnsToFit();
  }
}
