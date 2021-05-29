import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TitleComponent } from './components/title/title.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { FinishedQuizComponent } from './components/finished-quiz/finished-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TitleComponent,
    QuestionPresenterComponent,
    FinishedQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
