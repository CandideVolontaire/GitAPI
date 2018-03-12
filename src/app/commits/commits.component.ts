import { Component, OnInit } from '@angular/core';
import { Commit } from '../commit';
import { COMMITS } from '../mock-commits';

@Component({
    selector: 'app-commits',
    templateUrl: './commits.component.html',
    styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

    commits = COMMITS;

    constructor() { }

    ngOnInit() {
    }

    onClick(commit: Commit): void {
        this.selectedCommit = commit;
    }
}
