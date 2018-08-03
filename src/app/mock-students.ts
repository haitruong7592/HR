import { Student } from "./student";
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';


export interface Student {
  id : number;
  code: string;
  name: string;
  
}
export const ELEMENT_DATA_STUDENTS: Student[] = [
  { id: 1 ,code: 'st1', name: 'Thanh1' },
      { id: 2 ,code: 'st2', name: 'Tu1' },
      { id: 3 ,code: 'st3', name: 'Nguyen' },
      { id: 4 ,code: 'st4', name: 'Quang' },
      { id: 5 ,code: 'st5', name: 'Tai' },
      { id: 6 ,code: 'st6', name: 'Tan' },
      { id: 7 ,code: 'st7', name: 'Quan' },
      { id: 8 ,code: 'st8', name: 'Dai' },
      { id: 9 ,code: 'st9', name: 'Phong' },
      { id: 10 ,code: 'st10', name: 'Phu' },
      { id: 11 ,code: 'st11', name: 'Hong' },
      { id: 12 ,code: 'st12', name: 'Hung' },
      { id: 13 ,code: 'st13', name: 'Thy' },
      { id: 14 ,code: 'st14', name: 'Diem' },
      { id: 15 ,code: 'st15', name: 'Truc' },
      { id: 16 ,code: 'st16', name: 'Lam' },
      { id: 17 ,code: 'st17', name: 'Tam' },
      { id: 18 ,code: 'st18', name: 'Ngan' },
      { id: 19 ,code: 'st19', name: 'Kha' },
      { id: 20 ,code: 'st20', name: 'Luan' },
]; 


