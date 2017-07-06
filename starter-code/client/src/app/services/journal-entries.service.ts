import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class JournalEntriesService {


  constructor(private http: Http) { }

  getEntries(): Objects[] {
    return this.http.get('http://localhost:3000/api/journal-entries');
  }
}
