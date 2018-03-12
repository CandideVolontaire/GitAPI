import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitService } from './commit.service';
import { CommitDetailComponent } from './commit-detail/commit-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        CommitsComponent,
        CommitDetailComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        CommitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
