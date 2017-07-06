 import { Component, OnInit } from '@angular/core';

 import { ActivatedRoute } from '@angular/router';

 import { JournalEntriesService } from '../services/journal-entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entryId: string;
  anEntry: any;

  constructor(private journalservice: JournalEntriesService,
  private route: ActivatedRoute) { }

  getAnEntry() {
    this.journalservice.getSingleEntry(this.entryId)
    .subscribe( (res) => {
       res = this.anEntry;
       console.log(this.anEntry);
     });
  }

  ngOnInit() {
    this.route.params
      .subscribe( (params) => this.entryId = params['id'] );

    this.getAnEntry();
  }

}
