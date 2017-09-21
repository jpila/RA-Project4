import 'rxjs'

export class Journal {

  constructor(

    public title: string,
    public content: string,
    public categories: string[],
    public img: string,
    public date: string,
    public author: string,
    public id?: string,
  )  {
    //this.content = content.replace(/&#039;/g, `''`);
  }

  static fromJson({ID, title, content, categories, image, date, author}){

    if(content){
      title = title.replace(/&#034;/g, `"`)
      title = title.replace(/&#039;/g, `'`)
      content = content.replace(/&#039;/g, `'`)
      content = content.replace(/&#034;/g, `"`)
}
  return new Journal(title, content, categories, image, date, author, ID)
}
  static fromJsonArray(json: any[]): Journal[]{
    let jsonObjectArray = [];

    for(var key in json) {
      let value = json[key]
    //  console.log(value)
      jsonObjectArray.push(value);
    }
  //  console.log(jsonObjectArray);

    return jsonObjectArray.map(Journal.fromJson)
}

  static fromFormFields(form): Journal{
    let title = form.controls.title.value;
    let author = form.controls.hasOwnProperty('author') ? form.controls.author.value : "Jose Pilapil" ;
    let content = form.controls.content.value;
    let categories = form.controls.categories.value;
    let image = form.controls.image.value;
    let date = new Date().toString();

    return new Journal(title, content, categories, image, date, author);
  }

}
