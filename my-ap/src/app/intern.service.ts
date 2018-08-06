import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Intern } from './intern';
import { INTERNS } from './mock-interns';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor() { }
  getInterns(): Observable<Intern[]> {
    return of(INTERNS);
  }
  addIntern (intern: Intern): any {
    return of(INTERNS.push(intern));
  }

  deleteIntern(intern: Intern): any {
    for (var i = 0; INTERNS.length; i++){
      if(INTERNS[i].code == intern.code && INTERNS[i].name== intern.name)
        return of(INTERNS.splice(i,1));
    }
  }
}
