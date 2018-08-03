
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator,MatTableDataSource, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


import {BackendService} from './backend.service';
import { Student } from '../student';
export class StDataSource extends DataSource<student> {

  
  // data: Student[] = ELEMENT_DATA_STUDENTS; --mock
  constructor( private myservice: BackendService,
    private paginator: MatPaginator,){
    super();
  }
  data: student[]=dataList;
  connect() {
    const dataMutations = [
      observableOf(this.myservice.getStudents()),
      this.paginator.page,
      
    ];
    this.paginator.length = this.data.length;

    // return this.myservice.getStudents().pipe(map(() => {
    //   return this.getPagedData([...this.data]);
    // }));;
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData([...this.data]);
    }));
  }
  
  disconnect() {}
  private getPagedData(data: student[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  
}
export interface student {
  code: string;
  name: string;
}

export const dataList: student[] =  [
  {code: 'st1', name: 'Thanh1' },
  {code: 'a2', name: 'Tu' },
  {code: 'b3', name: 'Nguyen' },
  {code: 'a4', name: 'Quang' },
  {code: 'st5', name: 'Tai' },
  {code: 'b6', name: 'Tan1' },
  {code: 'st7', name: 'Quan1' },
  {code: 'st8', name: 'Dai' },
  {code: 'st9', name: 'Phong' },
  {code: 'st10', name: 'Phu' },
  {code: 'st11', name: 'Hong' },
  { code: 'st12', name: 'Hung' },
  {code: 'st13', name: 'Thy' },
  {code: 'st14', name: 'Diem' },
  {code: 'st15', name: 'Truc' },
  {code: 'st16', name: 'Lam' },
  {code: 'st17', name: 'Tam' },
  {code: 'st18', name: 'Ngan' },
  {code: 'st19', name: 'Kha' },
  {code: 'st20', name: 'Luan' },
];
