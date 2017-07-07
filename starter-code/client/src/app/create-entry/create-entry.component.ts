import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../services/journal-entries.service';


@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  newEntry: Object = {};

  constructor(private journalservice: JournalEntriesService ) { }

  ngOnInit() {
  }

  submitForm(entryForm) {
    console.log(entryForm);
    this.newEntry = {
      title: entryForm.newEntryTitle.value,
      content: entryForm.newEntryContent.value
    }

    console.log(this.newEntry);

    this.journalservice.createEntry(this.newEntry);
  }

}
