import { Component, OnInit } from '@angular/core';
import { Commit } from '../commit';
import { CommitService } from '../commit.service';

@Component({
    selector: 'app-commits',
    templateUrl: './commits.component.html',
    styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

    selectedCommit: Commit;
    commits: Commit[];

    constructor(private commitService: CommitService) { }

    ngOnInit() {
        this.getCommits();
    }

    getCommits(): void {
        this.commitService.getCommits().subscribe(commits => this.commits = commits);
    }

    onClick(commit: Commit): void {
        this.selectedCommit = commit;
    }
}
