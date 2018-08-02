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
  interns: Intern[] = [];
  addIntern (intern: Intern): Observable<Intern> {
    return this.interns.push(intern);
  }
}
