 import { Component, OnInit } from '@angular/core';

 import { ActivatedRoute } from '@angular/router';

 import { JournalEntriesService } from '../services/journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entryId: Number;
  anEntry: Object;
  constructor(private journalservice: JournalEntriesService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => { this.entryId = Number(params['id']) });

     this.getAnEntry();
  }

  getAnEntry() {
    this.anEntry = this.journalservice.getSingleEntry(this.entryId);
  }


}
