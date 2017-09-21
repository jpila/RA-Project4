import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomePageBannerComponent } from './home-page-banner/home-page-banner.component';
import { ShopStuffComponent } from './shop-stuff/shop-stuff.component';
import { InhabitentComponent } from './inhabitent/inhabitent.component';
import { LatestAdventuresComponent } from './latest-adventures/latest-adventures.component';
import { FooterComponent } from './footer/footer.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import {RouterModule} from '@angular/router';
import {routerConfig} from './router.config';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from 'angularfire2';
import {fireConfig} from '../environments/firebase.config';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {JournalService} from './shared/model/journal.service'
import {Journal} from './shared/model/journal';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';
import { JournalListComponent } from './journal-list/journal-list.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms'
import {ReversePipe} from './reverse.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomePageBannerComponent,
    ShopStuffComponent,
    InhabitentComponent,
    LatestAdventuresComponent,
    FooterComponent,
    JournalPageComponent,
    HomeComponent,
    JournalDetailComponent,
    JournalListComponent,
    FormComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(fireConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
  ],
  providers: [JournalService, ReversePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
