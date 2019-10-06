import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BktppComponent } from './components/bktpp/bktpp.component';
import { KtpsComponent } from './components/ktps/ktps.component';
import { BtpsComponent } from './components/btps/btps.component';
import { StpsComponent } from './components/stps/stps.component';
import { SgtppComponent } from './components/sgtpp/sgtpp.component';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BktppComponent,
    KtpsComponent,
    BtpsComponent,
    StpsComponent,
    SgtppComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
