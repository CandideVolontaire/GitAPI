import { Injectable } from '@angular/core';
import { Commit } from './commit';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CommitService {

    private gitHubGraphQLEndPoint: string = 'https://api.github.com/graphql';
    private gitHubRepo: string = '/angular/material2';
    private gitHubToken: string = 'a5fbd4e701ca0e7d32d0ace9543a9ab6b27b2fc7';

    private gitHubRestUrl: string = 'https://api.github.com/repos/angular/material2/commits';

    constructor(private http: HttpClient) { }

    getCommits(): Observable<any> {
        //return this.http.get<Commit[]>(this.gitHubRestUrl).pipe(map(element => ({'id': element.sha, 'message': element.commit.message})));
        //TODO: understand why RXJS map operator does not work as array.map
        return this.http.get<any>(this.gitHubRestUrl).pipe(map(function(data) {
                return data.map(element => ({'id': element.sha, 'message': element.commit.message}));
            }));
        };
    }
}
