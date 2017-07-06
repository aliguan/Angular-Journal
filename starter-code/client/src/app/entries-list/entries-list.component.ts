import { Component, OnInit } from '@angular/core';

import { JournalEntriesService } from '../services/journal-entries.service';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.css']
})
export class EntriesListComponent implements OnInit {
  entries: Object[];
  constructor(private journalservice: JournalEntriesService) { }

  ngOnInit() {
    this.getJournalEntries();
  }

  getJournalEntries() {
    this.journalservice.getEntries()
      .subscribe( (entries) => this.entries = entries);
  }
}
