import { Component, OnInit , Input} from '@angular/core';
import {Journal} from '../shared/model/journal'
import {ActivatedRoute, Params} from '@angular/router'
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {JournalService} from '../shared/model/journal.service';


@Component({
  selector: 'journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {

  @Input() journal: Journal;

  constructor(  private journalService: JournalService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit(): void {
    // console.log('bananas')
    // console.log(this.route.params)

    this.route.params.switchMap((params: Params) =>  this.journalService.getJournal(params['id']))
        .subscribe(journal => this.journal = journal);
  }

  goBack(): void {
  this.location.back();
  }


}
