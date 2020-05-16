import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class NoteService
{
   constructor(private http : HttpClient) { }
  
   create_note(data)
  {
    const endpoint_url= "note/create/"
    return this.http.post(environment.base_url + endpoint_url, data)
  }

   get_notes()
   {
    const endpoint_url= "note/create/"
    return this.http.get(environment.base_url + endpoint_url)
   }


   get_trash_notes()
   {
    const endpoint_url= "note/trash/"
    return this.http.get(environment.base_url + endpoint_url)
   }

  //  delete_note(note_id)
  //  {
  //   const endpoint_url= "note/detail/"
  //   return this.http.get(environment.base_url + endpoint_url + note_id)
  //  }

  get_archived_notes(){
    const endpoint_url= "note/archive"
    return this.http.get(environment.base_url + endpoint_url)
  }

   is_archive(note_id){
    const endpoint_url= "note/archive"
    return this.http.post(environment.base_url + endpoint_url + note_id, note_id)
  }
  
}