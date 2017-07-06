import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class JournalEntriesService {


  constructor(private http: Http) { }

  getEntries() {
    return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res) => res.json());
  }

  getSingleEntry(id) {
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`)
    .map(res => res.json()  );
  }

}
