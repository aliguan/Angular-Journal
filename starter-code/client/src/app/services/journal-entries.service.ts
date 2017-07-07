import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JournalEntriesService {


  constructor(private http: Http ) { }

  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res) => res.json());
  }

  createEntry(entry) {
     this.http.post('http://localhost:3000/api/journal-entries', entry).subscribe();
  }

  getSingleEntry(id) {
  return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
    .map((res) => res.json() );
  }

}
