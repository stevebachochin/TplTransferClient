import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  MatDialogModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule, MatButtonModule, MatCheckboxModule,
  MatProgressBarModule, MatNativeDateModule, MatFormFieldModule,
  MatIconModule, MatSelectModule, MatToolbarModule, MatDatepickerModule
} from "@angular/material";
import { PrinterService } from "./services/printerService";
import { DepopBatchService } from "./services/depopBatchService";
import { GraftService } from "./services/graftService";
import { Globals } from "./services/globalService";
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BatchComponent } from './components/batch/batch.component';
import { StepComponent } from './components/step/step.component';
import { AppConfig } from './services/app.config';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BatchComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [
    DepopBatchService,
    GraftService,
    PrinterService,
    Title,
    AppConfig,
    Globals,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
