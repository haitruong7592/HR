import {Injectable} from '@angular/core'

import { ELEMENT_DATA_STUDENTS } from '../mock-students';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { student, dataList} from './st-data-source'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class BackendService {
  Ostudent: Observable<student[]>;

 
  constructor(
    private http: HttpClient,
    private messageService: MessageService){}

  // getStudents(): Student[] {
  //   return ELEMENT_DATA_STUDENTS;
  // }
  
  getStudents () {
    return of (dataList);
     
  }

  // deleteStudent(code:string, name: string){
    
  //   var index= dataList.indexOf({ code, name}  as student);
  //     if (index > -1){
  //       return of (dataList.splice(index,1));
        
  //     }
  // }
  deleteStudent(code, name){
    
    for(var i =0;i<dataList.length; i++)
    {
      
      if (dataList[i].code==code && dataList[i].name==name)
        return of (dataList.splice(i,1));
    }
  }

  addStudent (bien: student): any {
    return of (dataList.push(bien));
  }

  updateStudent(code, value){
    for(var i=0; i<dataList.length;i++)
    {
      if (dataList[i].code==code)
        return of (dataList[i].name=value);
    }
  }

  searchStudent(code, name){

    let a = dataList;

    let b = dataList.filter(x=>x.code.indexOf('st1') > 0);

    return of(b);
    //  return of (dataList.filter(x=>x.code == code));
  }

  
  
 
}