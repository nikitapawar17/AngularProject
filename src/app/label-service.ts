import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LabelService{
    constructor(private http: HttpClient) {}

get_labels()
{   
    const endpoint_url = 'label/create/'
    return this.http.get(environment.base_url + endpoint_url)
}

create_label(data)
{
    const endpoint_url = 'label/create/'
    return this.http.post(environment.base_url + endpoint_url, data)
}

update_label(label_id, data)
{
    const endpoint_url = 'label/detail/'
    return this.http.put(environment.base_url + endpoint_url +label_id, data)
}

delete_label(label_id)
{
    const endpoint_url = 'label/detail/'
    return this.http.delete(environment.base_url + endpoint_url +label_id)
}
}