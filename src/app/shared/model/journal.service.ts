import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database'
import { Http} from '@angular/http'
import {Journal} from './journal'
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';
import {database} from 'firebase'

@Injectable()
export class JournalService {
  journals: FirebaseListObservable<any>
  journalsURL = 'ahttp://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/'
  private x: any = {};
  constructor(private db: AngularFireDatabase, private http: Http, ){

    this.journals = db.list('/Journals');
    // this.journals.subscribe(console.log);
   }

   getFireJournals(){
     return this.db.list('/Journals/');
   }

   getFireJournal(key: string){
     return this.db.object('/Journals')
   }

  getJournals(): Promise<Journal[]>{
    const getTheJournals = this.http.get(this.journalsURL);
    // console.log(getTheJournals);

    let newPromise: any = getTheJournals.toPromise();
    // console.log(newPromise);

    let successFn: Function = (response) =>{
      // console.log(response);
      let journals = response.json();
      // console.log(journals);
      let allJournals = Journal.fromJsonArray(journals)
      // console.log(allJournals);

      return allJournals;

    }

    let failureFn: Function = (error) => {
      console.log(error)
    }

    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    console.log(resolvedPromise);

    return resolvedPromise;
  }

  getFirstFourJournals():Promise<Journal[]>{
    const getTheJournals = this.http.get(this.journalsURL);
    // console.log(getTheJournals);

    let newPromise: any = getTheJournals.toPromise();
    // console.log(newPromise);

    let successFn: Function = (response) =>{
      // console.log(response);
      let journals = response.json();
      // console.log(journals);
      let allJournals = Journal.fromJsonArray(journals)
      // console.log(allJournals);

      return allJournals.slice(0,4);

    }

    let failureFn: Function = (error) => {
      // console.log(error)
    }

    const resolvedPromise: any = Promise.resolve(newPromise.then(successFn).catch(failureFn));
    // console.log(resolvedPromise);

    return resolvedPromise;
  }


  getJournal(id: string): FirebaseObjectObservable<any> {
  return this.db.object('/Journals/'+id);
}

postJournal(params): void{
  let url = `ahttp://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2?params=`
  // console.log(url + params)
//  this.http.post(url + params,'').subscribe(result => console.log(result));
}

 postJournalToFireBase(form){
   let journal = Journal.fromFormFields(form);
   const JournalsRef = database().ref('Journals');
   let date = database().ref
   JournalsRef.push({
     author: journal.author,
     title: journal.title,
     imgUrl: journal.img,
     categories: journal.categories,
     content: journal.content,
     date: database.ServerValue.TIMESTAMP
   })
 }

}
