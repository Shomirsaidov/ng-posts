import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IPost } from '../models/post'
import {Observable, delay, catchError} from 'rxjs'


@Injectable({
    providedIn: 'root'
})

export class PostsService {
    constructor(private http : HttpClient) {}

    getRecentPosts() : Observable<IPost[]> {
        return this.http.get<IPost[]>('http://localhost:4545/posts').pipe(
            delay(2000),
            // catchError(this.errorHandler)
        )
    }

    // private errorHandler(error : HttpErrorResponse ){
    //     return throwError(() => error.message) 
    // }
}