import {Route} from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {JournalPageComponent} from '../app/journal-page/journal-page.component'
import {JournalDetailComponent} from '../app/journal-detail/journal-detail.component'
import {JournalListComponent} from '../app/journal-list/journal-list.component'
import {FormComponent} from '../app/form/form.component'


export const routerConfig: Route[] =[{
  path:'home',
  component: HomeComponent,
  children: [{
    path:'journal',
    redirectTo: 'journals' ,
    pathMatch: 'full'
  },]
},
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'journals',
    component: JournalPageComponent,
    children:[
      {
        path: '',
        component:JournalListComponent
      },
      {
        path: 'form',
        component: FormComponent,
      }
    ]
  },
  {
    path: 'detail/:id',
    component: JournalDetailComponent,
  },
 /*  {
    path:'**',
    redirectTo: 'home',
    pathMatch: "full"
  },*/

]
