import { Injectable } from '@angular/core';
import { Commit } from './commit';
import { COMMITS } from './mock-commits';

@Injectable()
export class CommitService {

    constructor() { }

    getCommits(): Commit[] {
        return COMMITS;
    }
}
