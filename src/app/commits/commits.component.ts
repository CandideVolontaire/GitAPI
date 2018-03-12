import { Component, OnInit } from '@angular/core';
import { Commit } from '../commit';

@Component({
    selector: 'app-commits',
    templateUrl: './commits.component.html',
    styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

    commit = Commit = {
        id: 1,
        message: 'My commit message!'
    };

    constructor() { }

    ngOnInit() {
    }
}
