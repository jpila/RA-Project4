import { Component, OnInit } from '@angular/core';
import {Journal} from '../shared/model/journal'
import {JournalService} from '../shared/model/journal.service';
import {Router} from '@angular/router'
import {FirebaseListObservable} from 'angularfire2/database'


@Component({
  selector: 'journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css']
})
export class JournalListComponent implements OnInit {
  journals: FirebaseListObservable<Journal[]>;
  selectedJournal: Journal;
  constructor(private journalService: JournalService, private router: Router) { }

  ngOnInit() {
    this.journals = this.journalService.getFireJournals();
    console.log(this.journals)
  }

  onSelect(journal: Journal): void{
    console.log(journal.id);
    this.selectedJournal = journal
  }
  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedJournal.id]);
  }

}
