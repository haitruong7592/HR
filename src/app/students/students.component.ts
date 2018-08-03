import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {BackendService} from './backend.service';

// import { Student } from '../student';
import { Observable, of as observableOf, merge,} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {StDataSource,student, dataList} from './st-data-source'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
// import {ELEMENT_DATA_STUDENTS} from '../mock-students'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  
})



export class StudentsComponent implements OnInit {

  code1: string= "";
  name1: string= "";
  isDisabled1: boolean= false;
  isDisabled2: boolean= true;
  isDisabled3: boolean= true;
  isDisabled4: boolean= true;isDisabled5:boolean= true;isDisabled6:boolean= true;isDisabled7;
  selected: student = {code : '', name: ''};
  studentsArray: student[];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource : StDataSource;
  displayedColumns= ['Code', 'Name'];
  
  // dataSource = new MatTableDataSource<Student[]>();
  
  constructor( private myservice: BackendService){}
  
  ngOnInit() {
    
    this.dataSource=new StDataSource(this.myservice , this.paginator,)
    // const nameFilter$ = this.formControlValueStream(this.nameFilter, '');
    // const colorFilter$ = this.formControlValueStream(this.colorFilter, '');
    
  }
  getStudents(): void {
    this.myservice.getStudents()
    .subscribe(students => this.studentsArray = students);
  }
 
  add(code: string,name: string): void {
    
    
    if(this.isDisabled2!=false){
    code = code.trim();
    name = name.trim();
    //this.studentsArray.push({id: 12,code:'aaaaaa', name: 'asasdasd'});
    if (!name || !code) { return; }
    this.myservice.addStudent({ code,name } as student)
      .subscribe( bien => {
        this.dataSource=new StDataSource(this.myservice, this.paginator,)
      });
    }
    else{
      var value=name.trim();
      this.myservice.updateStudent(code, value)
      .subscribe( bien => {
        this.dataSource=new StDataSource(this.myservice, this.paginator,)
      });
    }
    this.isDisabled1 = false;
    
    this.isDisabled3 = true;
    this.isDisabled4 = true;
    this.isDisabled6 = true;
    this.isDisabled7 = false;
    this.isDisabled2 = true;
  }

  search(code, name){
    code = code.trim();
    name = name.trim();

    this.myservice.searchStudent(code,name)
    .subscribe( bien => {
      this.dataSource=new StDataSource(this.myservice, this.paginator,)
    });
      
  }
  update(code, name){
    this.isDisabled1 = true;
    this.isDisabled3 = false;
    this.isDisabled4 = false;
    this.isDisabled5 = true;
    this.isDisabled6 = false;
    this.isDisabled7 = true;
    
    // for(var i=0; i<dataList.length;i++)
    // {
    //   if (dataList[i].code==code && dataList[i].name==name)
    //     return of (dataList.splice(i,1));
    // }
    
  }
  

  delete(code: string,name: string): void {
    code = code.trim();
    name = name.trim();
    this.myservice.deleteStudent(code, name).subscribe( bien => {
      this.dataSource=new StDataSource(this.myservice, this.paginator,)
    });
  }
  public config:any = {
    paging: true,
    sorting: {columns: this.displayedColumns},
    filtering: {filterString: ''},
    
  };
  selectRow(row:student){
    // this.code1=(row['code']);
    // this.name1=(row['name']);
    this.selected=row;
    this.isDisabled2 = false;
    this.isDisabled5 = false;

  }
 
  onchange(){
    this.isDisabled1 = true;
    this.isDisabled2 = true;
    this.isDisabled3 = false;
    this.isDisabled4 = false;
    this.isDisabled6 = false;
    this.isDisabled7 = true;
  }
  
  
}

