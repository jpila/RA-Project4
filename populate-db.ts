

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';



import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";


console.log("WARNING VERY IMPORTANT - PLEASE READ THIS\n\n\n");
console.log('WARNING Please set your own firebase config on src/environmnents/firebase.config.ts');
console.log('Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours. ');
console.log('Any issues please contact me, Thanks, Vasco\n\n\n');



//initializeApp(firebaseConfig);


export function populateDatabase() {
const JournalsRef = database().ref('Journals')
let date = database().ref
dbData.Journals.forEach( Journal => {
  console.log('adding Journals', Journal.title);
  const JournalRef = JournalsRef.push({
      author: Journal.author,
      title: Journal.title,
      imgUrl: Journal.imgUrl,
      categories: Journal.categories,
      content: Journal.content,
      date: database.ServerValue.TIMESTAMP
  });
});

}
