import { Component, OnInit } from '@angular/core';
import {Journal} from '../shared/model/journal'
import {JournalService} from '../shared/model/journal.service';
import {Router} from '@angular/router'
import {FirebaseListObservable} from 'angularfire2/database'

@Component({
  selector: 'journal-page',
  templateUrl: './journal-page.component.html',
  styleUrls: ['./journal-page.component.css']
})
export class JournalPageComponent implements OnInit {
  journals: FirebaseListObservable<any>;
  selectedJournal: Journal;

  formVisible = false;

  constructor(private journalService: JournalService, private router: Router) { }

  ngOnInit() {
    this.journals = this.journalService.journals;
    // console.log(this.journals)
  }

  onSelect(journal: Journal): void{
    // console.log(journal.id);
    this.selectedJournal = journal
  }
  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedJournal.id]);
  }


 presentForm(){
   document.getElementById('journal-add').classList.add('hidden');
   document.getElementById('container-form').classList.remove('hidden');

 }
}
