import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private updated_data = new BehaviorSubject({data:'', type:''});
  current_data = this.updated_data.asObservable();

  constructor() { }

  changed_data(message: any)
  {
    this.updated_data.next(message);
  }
}
