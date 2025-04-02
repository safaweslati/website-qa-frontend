import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebqaComponent } from './webqa/webqa.component';
import { AnalysisSectionComponent } from './analysis-section/analysis-section.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';

@NgModule({
  declarations: [AppComponent, WebqaComponent, AnalysisSectionComponent, SummaryCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
