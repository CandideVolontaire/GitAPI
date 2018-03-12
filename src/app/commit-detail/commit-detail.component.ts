import { Component, OnInit, Input } from '@angular/core';
import { Commit } from '../commit';

@Component({
    selector: 'app-commit-detail',
    templateUrl: './commit-detail.component.html',
    styleUrls: ['./commit-detail.component.css']
})
export class CommitDetailComponent implements OnInit {

    @Input() commit: Commit;

    constructor() { }

    ngOnInit() {
    }

}
