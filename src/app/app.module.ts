import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { SubjectService } from './services/subject.service';
import { BehaviorSubjectService } from './services/behavior-subject.service';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectErrorComponent } from './subject-error/subject-error.component';
import { CommonSubjectService } from './services/common-subject.service';


@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        SubjectComponent,
        BehaviorSubjectComponent,
        AsyncSubjectComponent,
        ReplaySubjectComponent,
        SubjectErrorComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        SubjectService,
        BehaviorSubjectService,
        CommonSubjectService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
