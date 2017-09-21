import { Component, OnInit } from '@angular/core';
import {JournalService} from '../shared/model/journal.service';
import {Journal} from '../shared/model/journal';
import {Observable} from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'latest-adventures',
  templateUrl: './latest-adventures.component.html',
  styleUrls: ['./latest-adventures.component.css']
})
export class LatestAdventuresComponent implements OnInit {

  journals: FirebaseListObservable<Journal[]>
  firstFourJournals: Promise<Journal[]>

  constructor(private journalService: JournalService, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  this.journals = this.journalService.getFireJournals();
  this.firstFourJournals = this.journalService.getFirstFourJournals();
  }

  gotoDetails(journal: Journal){
    this.router.navigate(['/detail'], journal.title)
  }

}
