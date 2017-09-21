import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { JournalService} from '../shared/model/journal.service'
import { Categories} from '../shared/categories.enum'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;
  categories = ['Adventure',
    'Editorial',
    'Humour',
    'Miscellaneous',
    'Politics',
    'Sports',
    'Kitty'];
    categoryValue : Categories;
    Categories : typeof Categories = Categories

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      content: new FormControl(""),
      image: new FormControl('http://cdn.wallpapersafari.com/0/89/bG6mNA.jpg'),
      categories: new FormControl('kitties, apples'),
    });
  }
  submitForm(e: any) {
    document.getElementById('journal-add').classList.remove('hidden');
    document.getElementById('container-form').classList.add('hidden');
   // if the button is inside the form, you can get the parent element
  //  console.log(e);
  //  console.log(e.controls);
  //  console.log(e.controls.categories.value);
   // other code for processing the submit

   const serializedForm = this.jsSerializeArray(e);
   const formDataforSubmission = JSON.stringify(serializedForm);

  //  console.log(formDataforSubmission);
   let paramsObject = {params : formDataforSubmission}
  //  console.log(paramsObject);

  // this.journalService.postJournal(formDataforSubmission);
  this.journalService.postJournalToFireBase(e);

 }
 cancel(){
     document.getElementById('journal-add').classList.remove('hidden');
     document.getElementById('container-form').classList.add('hidden');
 }

 jsSerializeArray(form) {
   form = document.getElementById('apiForm');
  //  console.log(form);
  let field: any;
  let numberOfOptions = 0;
  const s: Array<any> = [];
  if (typeof form === 'object' && form.nodeName === 'FORM') {
    const len: number = form.elements.length;
    for (let i = 0; i < len; i++) {
      field = form.elements[i];
      const fieldName = field.name;
      const isFieldDisabled: Boolean = field.disabled;
      const fieldType = field.type;
      const fieldValue = field.value;
      if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
        if (field.type === 'select-multiple') {
          let newField = '';
          numberOfOptions  = form.elements[i].options.length;
          const currentFormLength = s.length;
          for (let j = 0; j < numberOfOptions; j++) {
            if (field.options[j].selected) {
              // this has to be modified for correct submission the old code is below
              // s[s.length] = { name: field.name, value: field.options[j].value };
              // new value needs to be a comma separated list
              newField = newField + `${field.options[j].value},`;
              s[currentFormLength] = { name: field.name, value: newField };
            }
          }
          // strip the last comma
          s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);

        } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
          s[s.length] = { name: fieldName, value: fieldValue };
        }
      }
    }
  }
  return s;
};


  parseSelectedValue(value: string) {
    // console.log(value);
    this.categoryValue = Categories[value];
  }

}
