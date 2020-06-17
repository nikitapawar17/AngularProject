import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { environment } from '../environments/environment';

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

   edit_note(note_id, data)
   {
    const endpoint_url= "note/detail/" + note_id
    return this.http.put(environment.base_url + endpoint_url, data)
   }

   delete_note(note_id)
   {
    const endpoint_url= "note/detail/"
    return this.http.delete(environment.base_url + endpoint_url + note_id)
   }

   trash_note(note_id)
   {
    const endpoint_url= "note/trash/"
    return this.http.delete(environment.base_url + endpoint_url + note_id)
   }

   get_remainder_notes()
   {
    const endpoint_url= "note/remainder"
    return this.http.get(environment.base_url + endpoint_url)
   }

  get_archived_notes(){
    const endpoint_url= "note/archive"
    return this.http.get(environment.base_url + endpoint_url)
  }

  is_archive(note_id){
    const endpoint_url= "note/archive"
    return this.http.post(environment.base_url + endpoint_url + note_id, note_id)
  }

  add_remainder(note_id, date){
    const endpoint_url= "note/" + note_id + "/remainder/"
    return this.http.put(environment.base_url+ endpoint_url, date)
  }

  remove_remainder(note_id){
    const endpoint_url= "note/remove/remainder/"
    return this.http.get(environment.base_url + endpoint_url + note_id, note_id)
  }
  
  add_collaborator(note_id, data){
    const endpoint_url= "note/add/"+ note_id + "/collaborator/"
    return this.http.put(environment.base_url + endpoint_url ,data);
   }

  empty_trash(data){
    const endpoint_url= "note/delete/all/"
    return this.http.delete(environment.base_url + endpoint_url, data)
  }

  change_color(note_id, color)
  {
    const endpoint_url = "note/detail/" + note_id
    return this.http.put(environment.base_url + endpoint_url, color);
  }

  note_pin(note_id)
  {
    const endpoint_url= "note/pin/" + note_id
    return this.http.put(environment.base_url + endpoint_url, note_id);
  }

  note_unpin(note_id)
  {
    const endpoint_url= "note/unpin/" + note_id
    return this.http.put(environment.base_url + endpoint_url, note_id);
  }

  add_label(data)
  {
    const endpoint_url= "label/add/" 
    return this.http.post(environment.base_url + endpoint_url, data.note_id);
  }


}