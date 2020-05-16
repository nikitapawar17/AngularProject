import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private updated_data = new BehaviorSubject('default data');
  current_data = this.updated_data.asObservable();

  constructor() { }

  changed_data(data: any)
  {
    this.updated_data.next(data);
  }
}
