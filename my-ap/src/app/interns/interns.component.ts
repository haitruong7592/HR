import { Component, OnInit, ViewChild } from '@angular/core';
import { INTERNS } from '../mock-interns';
import { Intern } from '../intern';
import { InternService } from '../intern.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent implements OnInit {
 // interns: Intern[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  displayedColumns = ['id', 'code', 'name'];

  constructor(private internService: InternService) { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.internService,this.paginator);
  }

  add(code: string, name: string): void {
    code = code.trim();
    name = name.trim();
    if (!code || !name) { return; }
    this.internService.addIntern({ code, name } as Intern)
      .subscribe(hero => {
        
        this.dataSource = new DataTableDataSource(this.internService,this.paginator);
      });
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
  
}

export class DataTableDataSource extends DataSource<any> {
  data:Intern[] = INTERNS;
  // ngOnInit() {
  //   this.getInterns();
  // }
  // getInterns(): void {  
  //   this.internService.getInterns()
  //       .subscribe(interns => this.data = interns);
  // }
  constructor(private internService: InternService,private paginator: MatPaginator) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Intern[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }

  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Intern[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  
}

